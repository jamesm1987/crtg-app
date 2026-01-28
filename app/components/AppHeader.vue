<script setup lang="ts">

    const { activeHeadings, updateHeadings } = useScrollspy()

    const items = computed(() => [{
        label: 'My Teams',
        to: '/my-teams',
        active: activeHeadings.value.includes('my-teams')
    },
    {
        label: 'How to play',
        to: '/#how-to-play',
        active: activeHeadings.value.includes('#how-to-play')
    },
    {
        label: 'Login',
        to: '/login',
        active: activeHeadings.value.includes('login')
    }
])
    

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
      </template>
    </UHeader>
</template>