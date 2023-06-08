<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merchandise Products</NuxtLink>
        </nav>
    </header>

    <!-- for placing the content -->
    <div class="container mx-auto p-4">
        <slot />
    </div>

    <footer class="container mx-auto p-4">
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
    </footer>
</template>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>