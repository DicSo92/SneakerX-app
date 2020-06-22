<template>
    <ion-content>
        <div class="">
            <div class="breadcrumb">
                <p margin>
                    <span class="breadLink">Home</span> /
                    <span class="breadLink">News</span>
                </p>
            </div>
            <CardActuality v-for="actuality in news" :actuality="actuality" :key="actuality.id"/>

            <ion-infinite-scroll threshold="100px" ref="infiniteScroll" class="infScroll"
                                 v-show="news && news.length > 0">
                <ion-infinite-scroll-content
                        loading-spinner="bubbles"
                        loading-text="Loading more data...">
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>

            <div class="footerTransparent"></div>
        </div>
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
                nbPerPage: 6,

                page: 1,
                last_page: null,

                loading: true,
                infiniteLoading: false,
            }
        },
        created() {
            this.getNews(this.page, this.nbPerPage)
        },
        mounted() {
            this.$refs.infiniteScroll.addEventListener("ionInfinite", event => {
                setTimeout(() => {
                    this.infiniteLoading = true
                    let nextPage = this.page + 1
                    this.getNews(nextPage, this.nbPerPage)

                    if (this.page >= this.last_page) {
                        event.target.disabled = true
                    }
                }, 500)
            })
        },
        watch: {},
        computed: {},

        methods: {
            getNews(page, nb) {
                this.loading = true
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/news?page=${page}&nb=${nb}`)
                    .then(response => {
                        console.log(response)
                        this.last_page = response.data.last_page
                        this.page = response.data.current_page

                        if (!this.infiniteLoading) {
                            this.news = response.data.data
                        } else {
                            response.data.data.forEach(actuality => {
                                this.news.push(actuality)
                            })

                            this.$refs.infiniteScroll.complete()
                            this.infiniteLoading = false
                        }
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
    .infScroll, infinite-loading {
        bottom: 100px;
    }
</style>
