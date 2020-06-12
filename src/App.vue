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
                        <ion-title>Inbox</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <ion-vue-router/>
                </ion-content>
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
        }
    }
</script>


<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
