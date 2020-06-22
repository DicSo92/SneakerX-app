<template>
    <transition name="slideUp">
        <ion-searchbar animated class="searchbar"
                       v-show="displaySearchBar">
        </ion-searchbar>
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
                searchProducts: null
            }
        },
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
</style>
