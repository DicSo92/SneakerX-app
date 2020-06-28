<template>
    <ion-content>
        <div class="breadcrumb">
            <p margin>
                <span class="breadLink">Home</span> /
                <span class="breadLink">Catalog</span> /
                <span class="breadLink">{{brandSelectedName}}</span>
            </p>
        </div>
        <div class="brandsList">
            <ion-segment color="dark" scrollable
                         value="All"
                         @ionChange="brandChanged($event.target.value)">
                <ion-segment-button value="All" layout="icon-start">
                    <ion-label>All</ion-label>
                    <ion-icon name="call"></ion-icon>
                </ion-segment-button>
                <ion-segment-button :value="brand.id" layout="icon-start" v-for="brand in brands">
                    <ion-label>{{brand.name}}</ion-label>
                    <ion-icon name="call"></ion-icon>
                </ion-segment-button>
            </ion-segment>
        </div>

        <ProductsList :brandSelected="brandSelected"/>
    </ion-content>
</template>

<script>
    import ProductsList from '@/components/ProductsList.vue'

    export default {
        name: "Catalog",
        components: {
            ProductsList
        },
        data() {
            return {
                brands: null,
                brandSelected: 'All',
                loading: false
            }
        },
        created() {
            this.getBrands()
        },
        computed: {
            brandSelectedName() {
                if (this.brandSelected === 'All') {
                    return this.brandSelected
                }
                return this.brands.find(brand => brand.id === Number(this.brandSelected) ).name
            }
        },
        methods: {
            getBrands() {
                this.loading = true
                this.$axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/client/brands`)
                    .then(response => {
                        console.log(response)
                        this.brands = response.data
                        this.loading = false
                    })
                    .catch(error => console.log(error))
            },
            brandChanged(brandName) {
                console.log(brandName)
                this.brandSelected = brandName
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
    .brandsList {
        padding: 0 16px 16px;
    }
</style>
