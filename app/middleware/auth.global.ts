export default defineNuxtRouteMiddleware((to) => {
    
    const user = useSupabaseUser()

    const isPublicPath = ['/', '/login', '/register'].includes(to.path)


    if (!user.value && !isPublicPath) {
        
        // return navigateTo('/login')
    }

    if (user.value && to.path === '/login') {
        
        return navigateTo('/')
    }
})