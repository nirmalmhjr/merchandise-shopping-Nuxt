<template>
    <h3>This index inside products folder</h3>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id">
            <ProductCard :product="p"/>
        </div>
    </div>
</template>

<script setup>

    definePageMeta({
        layout: 'products'
    })
    const {data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style>

</style>