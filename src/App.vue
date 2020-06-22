<template>
    <div id="app">
        <ion-app>
            <Menu/>
            <div class="ion-page" id="main-content">
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-menu-button></ion-menu-button>
                        </ion-buttons>
                        <ion-title>SneakerX</ion-title>
                    </ion-toolbar>
                </ion-header>

                <ion-content>
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
        methods: {
            goToWebSite() {
                window.open(`${process.env.VUE_APP_WEB_URL}/`, '_blank');
            }
        }
    }
</script>


<style lang="scss">

</style>
