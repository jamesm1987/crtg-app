<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'


const title = 'Login'

useSeoMeta({
  title,
})

const toast = useToast()
const supabase = useSupabaseClient()
const router = useRouter()

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}]


const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const handleLogin = async (payload: FormSubmitEvent<Schema>) => {

    try {
        const { error } = await supabase.auth.signInWithPassword({ email: payload.data.email, password: payload.data.password})

        if (error) {
            throw error
        }

        return navigateTo('/dashboard')

    } catch (error: any) {
        
        toast.add({
            title: 'Login Failed',
            description: error.message || 'Please check your credentials.',
            color: 'error'
        })
    }

}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        title="Welcome back!"
        icon="i-lucide-lock"
        @submit.prevent="handleLogin"
      >
        <template #description>
          Don't have an account? <ULink to="/register" class="text-primary font-medium">Sign up</ULink>.
        </template>
        <template #password-hint>
          <ULink to="#" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
        </template>
        
      </UAuthForm>
    </UPageCard>
  </div>
</template>

