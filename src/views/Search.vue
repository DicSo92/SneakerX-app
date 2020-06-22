<template>
    <ion-content>
        <ion-list>
            <ion-list-header>
                {{ totalProducts }} Results
            </ion-list-header>

            <ion-item v-for="product in searchProducts"
                      @click="goToProduct(product.slug)"
                      :key="product.id">
                <ion-avatar slot="start">
                    <img :src="product.image">
                </ion-avatar>
                <ion-label>
                    <p text-uppercase>{{product.brand.name}}</p>
                    <h2>{{product.name}}</h2>
                </ion-label>
            </ion-item>
        </ion-list>

        <div class="footerTransparent"></div>
    </ion-content>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                searchProducts: null,
                totalProducts: null,

                loading: false
            }
        },
        created() {
            this.totalProducts = this.$route.query.nb
            this.getSearch(this.$route.query.search, this.totalProducts)
        },
        beforeRouteUpdate (to, from, next) {
            // Prevent routing problem
            this.totalProducts = to.query.nb
            this.getSearch(to.query.search, this.totalProducts)
            next()
        },
        methods: {
            getSearch(search, totalProducts) {
                if (search) {
                    this.loading = true

                    this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/products/search/${search}?nb=${totalProducts}`)
                        .then(response => {
                            console.log(response)
                            this.searchProducts = response.data.data
                            this.totalProducts = response.data.total

                            this.loading = false
                        })
                        .catch(error => {
                            console.log(error)
                            this.searchProducts = null
                        })
                }
            },
            goToProduct(slug) {
                console.log('go to');
                this.$router.push({name: 'product', params: {slug: slug}})
                this.$emit('toggleDisplaySearchBar')
                this.$refs.searchbar.value = ''
                this.searchProducts = null
            },
        }
    }
</script>

<style scoped lang="scss">

</style>
