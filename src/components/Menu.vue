<template>
    <ion-menu side="start" content-id="main-content">
        <ion-header>
            <ion-toolbar translucent>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-icon name="mail" slot="start"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item>
                    <ion-icon name="paper-plane" slot="start"></ion-icon>
                    <ion-label>Catalog</ion-label>
                </ion-item>
                <ion-item>
                    <ion-icon name="heart" slot="start"></ion-icon>
                    <ion-label>Brands</ion-label>
                </ion-item>
                <ion-item>
                    <ion-icon name="archive" slot="start"></ion-icon>
                    <ion-label>Contact</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>
