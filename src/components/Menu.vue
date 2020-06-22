<template>
    <ion-menu side="start" content-id="main-content" ref="menu">
        <ion-header>
            <ion-toolbar translucent>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item @click="goTo('home')">
                    <ion-icon name="home" slot="start"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item @click="goTo('catalog')">
                    <ion-icon name="apps" slot="start"></ion-icon>
                    <ion-label>Catalog</ion-label>
                </ion-item>
                <ion-item @click="goTo('news')">
                    <ion-icon name="document" slot="start"></ion-icon>
                    <ion-label>News</ion-label>
                </ion-item>
                <ion-item @click="goTo('contact')">
                    <ion-icon name="mail" slot="start"></ion-icon>
                    <ion-label>Contact</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            closeMenu () {
                this.$refs.menu.close()
            },
            goTo(route) {
                this.closeMenu()
                this.$router.push({name: route})
            }
        }
    }
</script>

<style scoped>

</style>
