<template>
    <div class="NewsList">
        <div class="newsHeader">
            <ion-text align="center">
                <h3>NEWS</h3>
            </ion-text>
        </div>
        <CardActuality v-for="actuality in news" :actuality="actuality" :key="actuality.id"/>
    </div>
</template>

<script>
    import CardActuality from '@/components/CardActuality.vue'

    export default {
        name: "NewsList",
        components: {
            CardActuality
        },
        data() {
            return {
                news: null,
                nbPerPage: 5,

                loading: true
            }
        },
        created() {
            this.getNews(1, this.nbPerPage)
        },
        watch: {},
        computed: {},

        methods: {
            getNews(page, nb) {
                this.loading = true
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/news?page=${page}&nb=${nb}`)
                    .then(response => {
                        console.log(response)
                        this.news = response.data.data
                        this.loading = false
                    })
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped lang="scss">
    .newsHeader {
        h3 {
            font-weight: bold;
        }
    }
</style>
