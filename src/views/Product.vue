<template>
    <ion-content>
        <div class="product flex flex-col" v-if="product">
            <div class="" margin>
                <div class="breadcrumb">
                    <p no-margin>
                        <span class="breadLink">Home</span> /
                        <span class="breadLink">Catalog</span> /
                        <span class="breadLink">Adidas</span>
                    </p>
                </div>
                <ion-text>
                    <h1 class="name">{{product.name}}</h1>
                </ion-text>
                <ion-row class="ion-align-items-center">
                    <ion-text class="grow1">
                        <h6 no-margin class="grey">ADIDAS</h6>
                    </ion-text>
                    <ion-text>
                        <h5 no-margin style="font-weight: bold;">122,00 €</h5>
                    </ion-text>
                </ion-row>
            </div>
            <ion-slides pager id="slidesImg">
                <ion-slide>
                    <img :src="product.image" alt="">
                </ion-slide>
                <ion-slide v-for="(imgLink, index) in product.images" :key="index">
                    <img :src="imgLink" alt="">
                </ion-slide>
            </ion-slides>

            <div class="" margin>
                <ion-text>
                    <p no-margin class="titles">{{product.colors.length}} Colors Available :</p>
                </ion-text>
                <ion-row class="ion-align-items-center">
                    <div class="color-container" v-for="color in product.colors">
                        <div class="squareColor" :style="{background: color.color}"></div>
                        <p no-margin>
                            {{color.name}}
                        </p>
                    </div>
                </ion-row>

                <ion-text>
                    <p no-margin class="titles ion-margin-top">{{product.sizes.length}} Sizes Available :</p>
                </ion-text>
                <ion-row class="ion-align-items-center sizes">
                    <ion-col size="2" class="" v-for="(size, index) in product.sizes" :key="index">
                        <div>
                            <p class="ion-text-center">{{size.size}}</p>
                        </div>
                    </ion-col>
                </ion-row>

                <ion-text>
                    <p no-margin class="titles ion-margin-top">Description :</p>
                </ion-text>
                <ion-text>
                    <p class="description">{{product.description}}</p>
                </ion-text>

                <ion-button expand="full" color="light"
                            style="border: solid grey 1px;"
                            @click="goToWebProduct(product.slug)">
                    Shop Now
                </ion-button>
            </div>
        </div>
    </ion-content>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                product: null,
                loading: false
            }
        },
        created() {
            this.getProduct(this.$route.params.slug)
        },
        methods: {
            getProduct(slug) {
                this.loading = true
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/products/${slug}`)
                    .then(response => {
                        console.log(response)
                        this.product = response.data
                        this.loading = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            goToWebProduct(slug) {
                window.open(`${process.env.VUE_APP_WEB_URL}/catalog/${slug}`, '_blank');
            }
        }
    }
</script>

<style scoped lang="scss">
    #slidesImg {
        --bullet-background: grey;
        --bullet-background-active: black;
    }
    .grow1 {
        flex-grow: 1;
    }
    .grey {
        color: gray;
    }
    .breadcrumb {
        font-size: 14px;
    }
    .breadLink {
        text-decoration: underline;
    }
    .name {
        margin: 8px 0 5px;
    }
    .titles {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .color-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 8px;

        .squareColor {
            width: 35px;
            height: 25px;
            /*border: 1px white solid;*/
            border-radius: 3px;
        }
        p {
            font-size: 13px;
            color: #484848;
        }
    }
    .sizes {
        ion-col {
            padding: 4px;
            div {
                border: solid black 1px;
            }
        }
    }
    .description {
        font-size: 14px;
    }
    .shopBtn {
        border: solid black 1px;
        width: 100%;
        background-color: #dedede;
        padding: 15px;
    }
</style>
