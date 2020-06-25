<template>
    <div class="ProductsList">
        <ion-grid no-padding>
            <ion-row>
                <ion-col size="6" v-for="product in products">
                    <ion-card no-margin
                              text-left
                              class="productCard full-height"
                              @click="goToProduct(product.slug)">
                        <img :src="product.image"/>
                        <ion-card-header class="cardHeader">
                            <ion-card-subtitle>
                                {{ product.brand.name }}
                            </ion-card-subtitle>
                            <ion-text text-uppercase>
                                <div class="">
                                    {{ product.name }}
                                </div>
                                <div class="price">
                                    {{ product.price / 100 }} €
                                </div>
                            </ion-text>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-text>
                                <p class="colorsNb ion-text-end">
                                    {{product.colors.length}} colors
                                </p>
                            </ion-text>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>

        <ion-infinite-scroll threshold="100px" ref="infiniteScroll" v-show="products && products.length > 0">
            <ion-infinite-scroll-content
                    loading-spinner="bubbles"
                    loading-text="Loading more data...">
            </ion-infinite-scroll-content>
        </ion-infinite-scroll>

        <div class="footerTransparent"></div>
    </div>
</template>

<script>
    export default {
        name: "ProductsList",
        props: [
            'brandSelected'
        ],
        data() {
            return {
                products: null,

                page: 1,
                nbPerPage: 6,
                last_page: null,
                totalProducts: null,

                loading: true,
                infiniteLoading: false,

            }
        },
        watch: {
            brandSelected(val) {
                console.log('watch brandSelected')
                this.products = null
                this.$refs.infiniteScroll.disabled = false
                if (val === 'All') {
                    this.getProducts(1, this.nbPerPage)
                } else {
                    this.getProductsPerBrand(1, this.nbPerPage, this.brandSelected)
                }
            }
        },
        created() {
            if (this.brandSelected === 'All') {
                this.getProducts(this.page, this.nbPerPage)
            } else {
                this.getProductsPerBrand(this.page, this.nbPerPage, this.brandSelected)
            }
        },
        mounted() {
            this.$refs.infiniteScroll.addEventListener("ionInfinite", event => {
                setTimeout(() => {
                    this.infiniteLoading = true
                    let nextPage = this.page + 1

                    if (this.brandSelected === 'All') {
                        this.getProducts(nextPage, this.nbPerPage)
                    } else {
                        this.getProductsPerBrand(nextPage, this.nbPerPage, this.brandSelected)
                    }

                    if (this.page >= this.last_page) {
                        event.target.disabled = true
                    }
                }, 500)
            })
        },
        methods: {
            getProductsPerBrand(page, nb, brandId) {
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/productsBrand/${brandId}?page=${page}&nb=${nb}`)
                    .then(response => {
                        console.log(response)
                        this.page = response.data.current_page
                        this.last_page = response.data.last_page
                        this.totalProducts = response.data.total

                        if (!this.infiniteLoading) {
                            this.products = response.data.data
                        } else {
                            response.data.data.forEach(product => {
                                this.products.push(product)
                            })

                            this.$refs.infiniteScroll.complete()
                            this.infiniteLoading = false
                        }
                        this.loading = false
                    })
                    .catch(error => console.log(error))
            },
            getProducts(page, nb) {
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/products?page=${page}&nb=${nb}`)
                    .then(response => {
                        console.log(response)
                        this.page = response.data.current_page
                        this.last_page = response.data.last_page
                        this.totalProducts = response.data.total

                        if (!this.infiniteLoading) {
                            this.products = response.data.data
                        } else {
                            response.data.data.forEach(product => {
                                this.products.push(product)
                            })

                            this.$refs.infiniteScroll.complete()
                            this.infiniteLoading = false
                        }
                        this.loading = false
                    })
                    .catch(error => console.log(error))
            },
            goToProduct(slug) {
                console.log('go to');
                this.$router.push({name: 'product', params: {slug: slug}})
            },
        }
    }
</script>

<style scoped lang="scss">
    .full-height {
        height: 100%;
    }

    .productCard {
        display: flex;
        flex-direction: column;
    }

    .cardHeader {
        flex-grow: 1;
        padding: 8px !important;
    }

    .price {
        margin-top: 8px;
    }

    ion-card {
        border-radius: 0 !important;
    }

    ion-card-content {
        padding: 8px !important;
    }
</style>
