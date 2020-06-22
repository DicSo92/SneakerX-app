<template>
    <transition name="slideUp">
        <div class="searchbar" v-show="displaySearchBar">
            <ion-searchbar animated class="searchbar"
                           ref="searchbar"
                           @ionChange="getSearch($event.target.value)"
                           @keyup.enter="goToSearch($event.target.value)"
                           debounce="500">
            </ion-searchbar>

            <ion-list class="searchProducts" v-if="searchProducts">
                <ion-item v-for="product in searchProducts"
                          @click="goToProduct(product.slug)"
                          :key="product.id">
                    <ion-avatar slot="start">
                        <img :src="product.image">
                    </ion-avatar>
                    <ion-label>
                        <h2>{{product.name}}</h2>
                    </ion-label>
                </ion-item>
            </ion-list>
            <ion-list-header v-if="searchProducts">
                {{totalProducts}} Results
            </ion-list-header>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "SearchBar",
        props: [
            'displaySearchBar'
        ],
        data() {
            return {
                searchProducts: null,
                totalProducts: null,

                loading: false
            }
        },
        methods: {
            getSearch(search) {
                if (search) {
                    this.loading = true

                    this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/products/search/${search}?nb=5`)
                        .then(response => {
                            console.log(response)
                            this.searchProducts = response.data.data
                            this.totalProducts = response.data.total

                            this.loading = false
                        })
                        .catch(error => {
                            console.log(error)
                            this.searchProducts = null
                        })
                } else {
                    this.searchProducts = null
                }
            },
            goToProduct(slug) {
                console.log('go to');
                this.$router.push({name: 'product', params: {slug: slug}})
                this.$emit('toggleDisplaySearchBar')
                this.$refs.searchbar.value = ''
                this.searchProducts = null
            },
            goToSearch(search) {
                if(this.totalProducts) {
                    console.log(search)
                    this.$router.push({name: 'search', query: {search: search, nb: this.totalProducts}})
                    this.$emit('toggleDisplaySearchBar')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    ion-searchbar {
        padding: 6px 10px !important;
    }

    .slideUp-enter-active, .slideUp-leave-active {
        transition: all .5s;
    }

    .slideUp-enter, .slideUp-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transform: translateY(-50px);
    }

    .searchbar {
        background-color: white;
    }

    .searchProducts {
        margin-bottom: 0;
    }
</style>
