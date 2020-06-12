<template>
    <div class="Catalog">
        <ProductsList/>
    </div>
</template>

<script>
    import ProductsList from '@/components/ProductsList.vue'

    export default {
        name: "Catalog",
        components: {
            ProductsList
        }
    }
</script>

<style scoped>

</style>
