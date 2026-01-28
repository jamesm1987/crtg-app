-- 1. Create the custom type (with a safety check)
DO $$ BEGIN
    CREATE TYPE public.user_role AS ENUM ('admin', 'user');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. Add the 'role' column to the existing table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS role public.user_role DEFAULT 'user';

-- 3. Update the trigger function
-- This replaces your old function with the version that handles metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, role)
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'display_name',
    COALESCE((new.raw_user_meta_data->>'role')::public.user_role, 'user')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;