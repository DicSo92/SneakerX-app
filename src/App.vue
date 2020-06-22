<template>
    <div id="app">
        <ion-app>
            <Menu/>
            <div class="ion-page" id="main-content">
                <ion-header style="position: relative;" ref="mainHeader">
                    <ion-toolbar color="tertiary">
                        <ion-buttons slot="start">
                            <ion-menu-button></ion-menu-button>
                        </ion-buttons>
                        <ion-title>SneakerX</ion-title>
                        <ion-buttons slot="primary">
                            <ion-button @click="displaySearchBar = !displaySearchBar">
                                <ion-icon slot="icon-only" name="search"></ion-icon>
                            </ion-button>
                        </ion-buttons>
                    </ion-toolbar>

                    <SearchBar :displaySearchBar="displaySearchBar"
                               @toggleDisplaySearchBar="displaySearchBar = !displaySearchBar"/>
                </ion-header>

                <ion-content class="main-container" :style="'top:'+headerHeight+'px;'">
                    <ion-vue-router/>
                </ion-content>

                <ion-footer class="ion-no-border">
                    <ion-toolbar>
                        <ion-button expand="full" color="dark" @click="goToWebSite()">
                            - GO TO SHOP -
                        </ion-button>
                    </ion-toolbar>
                </ion-footer>
            </div>
        </ion-app>
    </div>
</template>

<script>
    import Menu from '@/components/Menu.vue'
    import SearchBar from '@/components/SearchBar.vue'

    export default {
        name: 'App',
        components: {
            Menu,
            SearchBar
        },
        data() {
            return {
                displaySearchBar: false,
                headerHeight: 44,
            }
        },
        mounted() {
            // this.$nextTick(() => {
            //     console.log(this.$refs.mainHeader.offsetHeight)
            //     this.headerHeight = this.$refs.mainHeader.offsetHeight
            // })
        },
        methods: {
            goToWebSite() {
                window.open(`${process.env.VUE_APP_WEB_URL}/`, '_blank');
            }
        }
    }
</script>


<style lang="scss">
    .main-container {
        position: absolute;
    }
    .footerTransparent {
        min-height: 100px;
        width: 100%;
    }
</style>
