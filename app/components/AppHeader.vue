<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const client = useSupabaseClient()
const { profile, isAdmin, isLoggedIn, fetchProfile } = useProfile()

onMounted(() => {
    fetchProfile()
})

const handleLogout = async () => {
    await client.auth.signOut()
    profile.value = null
    navigateTo('/')
}



    const items = computed<NavigationMenuItem[]>(() => {
        const baseItems: NavigationMenuItem[] = [
            {
                label: 'My Teams',
                to:     '/my-teams',
                active: false
            },
            {
                label: 'How to play',
                to: '/#how-to-play',
                active: false
            }
        ]

        return baseItems
    })
    

</script>


<template>
    <UHeader>
      <template #left>
        <AppLogo />
      </template>
      <template #right>
        <UNavigationMenu
            :items="items"
            variant="link"
            class="hidden lg:block"
        />

        <div v-if="isLoggedIn" class="flex items-center gap-2 ml-4 border-l pl-4">
            <UButton
              v-if="isAdmin"
              to="/admin"
              icon="i-heroicons-wrench-screwdriver"
              color="orange"
              variant="ghost"
              label="Admin"
              size="sm"
            />
            
            <UButton 
              label="Logout" 
              variant="subtle" 
              size="sm" 
              @click="handleLogout" 
            />
        </div>
        
        <UButton v-else to="/login" label="Login" />
      </template>
    </UHeader>
</template>