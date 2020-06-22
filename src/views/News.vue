<template>
    <ion-content>
        <div class="breadcrumb">
            <p margin>
                <span class="breadLink">Home</span> /
                <span class="breadLink">News</span>
            </p>
        </div>
        <CardActuality v-for="actuality in news" :actuality="actuality" :key="actuality.id"/>
    </ion-content>
</template>

<script>
    import CardActuality from '@/components/CardActuality.vue'

    export default {
        name: "News",
        components: {
            CardActuality
        },
        data () {
            return {
                news: null,
                nbPerPage: 8,

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
    .breadcrumb {
        font-size: 14px;
    }
    .breadLink {
        text-decoration: underline;
    }
</style>
