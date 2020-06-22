<template>
    <ion-card text-left
              class="productCard full-height"
              @click="goToActuality(actuality.slug)">
        <img :src="actuality.image"/>
        <ion-card-header class="cardHeader">
            <ion-card-subtitle color="light">
                <ion-row class="ion-align-items-center">
                    <div class="subtitle">
                        {{ actuality.subtitle }}
                    </div>
                    <div class="date">
                        {{actuality.published_date}}
                    </div>
                </ion-row>
            </ion-card-subtitle>
            <ion-text text-uppercase>
                <h5 class="title">
                    {{ actuality.title }}
                </h5>
            </ion-text>
        </ion-card-header>
        <ion-card-content>
            <ion-text>
                <p>
                    {{ actuality.content | truncate(150, '...') }}
                </p>
            </ion-text>
        </ion-card-content>
    </ion-card>
</template>

<script>
    export default {
        name: "CardActuality",
        props: [
            'actuality'
        ],
        filters: {
            truncate: function (text, length, suffix) {
                if (text.length > length) {
                    return text.substring(0, length) + suffix;
                } else {
                    return text;
                }
            },
        },
        methods: {
            goToActuality(slug) {
                console.log('go to');
                this.$router.push({name: 'actuality', params: {slug: slug}})
            },
        }
    }
</script>

<style scoped lang="scss">
    .subtitle {
        background-color: black;
        padding: 3px;
        margin-right: 6px;
    }
    .title {
        margin: 0;
    }
    .date {
        color: darkgrey;
    }
    ion-card {
        border-radius: 0 !important;
    }
    ion-card-content {
        padding-top: 0px !important;
    }
</style>
