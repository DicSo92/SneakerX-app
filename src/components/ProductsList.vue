<template>
    <div class="ProductsList">
        <ion-grid no-padding>
            <ion-row>
                <ion-col size="6">
                    <ion-card no-margin
                              text-left
                              class="productCard full-height">
                        <img src="/images/Chaussure_Stan_Smith_Blanc_M20324_01_standard.jpg"/>
                        <ion-card-header class="cardHeader">
                            <ion-card-subtitle>
                                Adidas
                            </ion-card-subtitle>
                            <ion-text text-uppercase>
                                <div class="">
                                    ZX 2K 4D
                                </div>
                                <div class="price">
                                    119,80 €
                                </div>
                            </ion-text>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-text>
                                <p class="colorsNb">
                                    2 colors
                                </p>
                            </ion-text>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
                <ion-col size="6">
                    <ion-card no-margin
                              text-left
                              class="productCard full-height">
                        <img src="/images/Chaussure_Superstar_Blanc_FV2819_01_standard.jpg"/>
                        <ion-card-header class="cardHeader">
                            <ion-card-subtitle>
                                Puma
                            </ion-card-subtitle>
                            <ion-text text-uppercase>
                                <div class="">
                                    Superstar - Originals
                                </div>
                                <div class="price">
                                    119,80 €
                                </div>
                            </ion-text>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-text>
                                <p class="colorsNb">
                                    4 colors
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
                products: null
            }
        },
        methods: {
            getProducts () {

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
