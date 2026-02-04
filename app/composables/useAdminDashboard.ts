export const useAdmin = () => {
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()

    const profile = useState('user_profile', () => null)
    const loading = useState('profile_loading', () => false)

    const fetchProfile = async () => {
        if (!user.value || profile.value || loading.value) return

        loading.value = true
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', user.value?.id ?? user.value?.sub)
                .single()

            if (data) profile.value = data
        } finally {
            loading.value = false
        }
    }

    const fetchUserTeams = async () => {

    }


    return { 
        profile, 
        fetchProfile, 
        loading,
    }
}