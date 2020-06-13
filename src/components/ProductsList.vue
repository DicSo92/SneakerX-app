<template>
    <div class="ProductsList">
        <ion-grid no-padding>
            <ion-row>
                <ion-col size="6" v-for="product in products">
                    <ion-card no-margin
                              text-left
                              class="productCard full-height">
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
                                <p class="colorsNb" >
                                    2 colors
                                </p>
                            </ion-text>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>

</template>

<script>
    export default {
        name: "ProductsList",
        data () {
            return {
                products: null,

                page: 1,
                nbPerPage: 8,
                maxPages: null,
                totalProducts: null,

                selectNbPerPage: [4, 8, 12, 16, 20],
                loading: true
            }
        },
        created() {
            this.getProducts(this.page, this.nbPerPage)
        },
        methods: {
            getProducts (page, nb) {
                this.$axios.get(`http://127.0.0.1:8000/api/client/products?page=${page}&nb=${nb}`)
                    .then(response => {
                        console.log(response)
                        this.products = response.data.data
                        this.maxPages = response.data.last_page
                        this.totalProducts = response.data.total
                        this.loading = false
                    })
                    .catch(error => console.log(error))
            }
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
    }
    .price {
        margin-top: 8px;
    }
</style>
