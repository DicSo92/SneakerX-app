<template>
    <div class="slidesProducts">
        <div class="newsHeader">
            <ion-text align="center">
                <h3>NEW PRODUCTS</h3>
            </ion-text>
        </div>
        <ion-row>
            <ion-slides class="shortForecastSlide" pager="true"
                        :options="this.slideOpts" v-if="products"
                        ref="slideProducts">
                <ion-slide v-for="threeProducts in this.productsArray" id="slidesContainer">
                    <ion-grid class="gridForecast">
                        <ion-row class="rowContainer">
                            <ion-col size="4" class="forecastItem" v-for="(product, index) in threeProducts">
                                <ion-card text-left
                                          class="productCard">
                                    <img :src="product.image"/>
                                    <ion-card-header class="cardHeader">
                                        <ion-card-subtitle>
                                            {{ product.name | truncate(15, '...') }}
                                        </ion-card-subtitle>
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-slide>
            </ion-slides>
        </ion-row>
    </div>
</template>

<script>
    export default {
        name: "SlidesProducts",
        data() {
            return {
                products: null,
                slideOpts: {
                    initialSlide: 1,
                    speed: 400,
                    pager: true
                },
                productsArray: [],
                loading: false
            }
        },
        filters: {
            truncate: function (text, length, suffix) {
                if (text.length > length) {
                    return text.substring(0, length) + suffix;
                } else {
                    return text;
                }
            },
        },
        mounted() {
            this.getProducts()
        },
        computed: {},
        methods: {
            getProducts() {
                this.loading = true

                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/products?page=1&nb=9`)
                    .then(response => {
                        console.log(response)
                        this.products = response.data.data
                        for (let i = 1; i < 4; i++) {
                            this.productsArray.push(this.products.slice(i*3-3,i*3))
                        }
                        this.loading = false
                    })
                    .catch(error => console.log(error))
            }
        },
    }
</script>

<style scoped lang="scss">
    #slidesContainer {
        padding-bottom: 10px;
    }
    .forecastItem {
        padding-left: 0;
        padding-right: 0;
    }
    .productCard {
        /*height: 100%;*/
    }
    .gridForecast {
        padding-top: 0;
        padding-bottom: 10px;
    }
    ion-card {
        margin: 4px
    }
    .cardHeader {
        padding: 8px !important;
    }
    .newsHeader {
        h3 {
            font-weight: bold;
        }
    }
</style>
