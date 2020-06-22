<template>
    <ion-content>
        <div class="breadcrumb">
            <p margin>
                <span class="breadLink">Home</span> /
                <span class="breadLink">News</span>
            </p>
        </div>
        <div class="actuality" v-if="actuality">
            <img :src="actuality.image" alt="">
            <div class="" margin>
                <ion-row class="ion-align-items-center">
                    <div class="subtitle">
                        {{ actuality.subtitle }}
                    </div>
                    <div class="date">
                        {{actuality.published_date}}
                    </div>
                </ion-row>
                <ion-text text-uppercase>
                    <h5 class="title">
                        {{ actuality.title }}
                    </h5>
                </ion-text>
                <ion-text>
                    <p>
                        {{ actuality.content }}
                    </p>
                </ion-text>
            </div>
        </div>
    </ion-content>
</template>

<script>
    export default {
        name: "Actuality",
        data() {
            return {
                actuality: null,
                loading: false
            }
        },
        created() {
            this.getActuality(this.$route.params.slug)
        },
        methods: {
            getActuality(slug) {
                this.loading = true
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/news/${slug}`)
                    .then(response => {
                        console.log(response)
                        this.actuality = response.data
                        this.loading = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .breadcrumb {
        font-size: 14px;
    }
    .breadLink {
        text-decoration: underline;
    }
    .subtitle {
        background-color: black;
        color: white;
        padding: 3px;
        margin-right: 8px;
    }
    .title {
        margin: 10px 0;
    }
    .date {
        color: darkgrey;
    }
</style>
