export const useProfile = () => {
    
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()
    const profile = useState('user_profile', () => null)

    const fetchProfile = async () => {
        
        if (!user.value) {
            return
        }

        const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.value.id)
            .single()

            profile.value = data
    }

    return { profile, fetchProfile}
}