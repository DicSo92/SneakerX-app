<template>
    <div id="app">
        <ion-app>
            <Menu/>
            <div class="ion-page" id="main-content">
                <ion-header>
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
                    <transition name="slideUp">
                        <ion-searchbar animated class="searchbar"
                                       v-show="displaySearchBar">
                        </ion-searchbar>
                    </transition>
                </ion-header>

                <ion-content class="main-container">
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
    // @ is an alias to /src
    import Menu from '@/components/Menu.vue'

    export default {
        name: 'App',
        components: {
          Menu
        },
        data () {
            return {
                displaySearchBar: false
            }
        },
        methods: {
            goToWebSite() {
                window.open(`${process.env.VUE_APP_WEB_URL}/`, '_blank');
            }
        }
    }
</script>


<style lang="scss">
    ion-searchbar {
        padding: 6px 10px !important;
    }

    .slideUp-enter-active, .slideUp-leave-active {
        transition: all .5s;
    }
    .slideUp-enter, .slideUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(-50px);
    }
    .main-container {
        position: absolute;
    }
    .searchbar {
        background-color: white;
    }
</style>
