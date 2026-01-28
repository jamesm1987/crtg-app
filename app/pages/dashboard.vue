<script setup lang="ts">


const title = 'Dashboard'

useSeoMeta({
  title,
})

const user = useSupabaseUser()
const profile = useProfile()


</script>
<template>
    Dashboard
</template>