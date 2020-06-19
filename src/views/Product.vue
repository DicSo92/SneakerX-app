<template>
    <ion-content>
        <ion-slides pager id="slidesImg">
            <ion-slide>
                <img src="http://res.cloudinary.com/charly-luzzi/image/upload/v1589846382/SneakerX/Products/Reebok/reebok-royal-classic-jogger-30/q6myorag2w0hdgmzz2ee.jpg" alt="">
            </ion-slide>
            <ion-slide>
                <img src="http://res.cloudinary.com/charly-luzzi/image/upload/v1589846382/SneakerX/Products/Reebok/reebok-royal-classic-jogger-30/q6myorag2w0hdgmzz2ee.jpg" alt="">
            </ion-slide>
            <ion-slide>
                <img src="http://res.cloudinary.com/charly-luzzi/image/upload/v1589846382/SneakerX/Products/Reebok/reebok-royal-classic-jogger-30/q6myorag2w0hdgmzz2ee.jpg" alt="">
            </ion-slide>
            <ion-slide>
                <img src="http://res.cloudinary.com/charly-luzzi/image/upload/v1589846382/SneakerX/Products/Reebok/reebok-royal-classic-jogger-30/q6myorag2w0hdgmzz2ee.jpg" alt="">
            </ion-slide>
        </ion-slides>
    </ion-content>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                product: null,
                loading: false
            }
        },
        created() {
            this.getProduct(this.$route.params.slug)
        },
        methods: {
            getProduct(slug) {
                this.loading = true
                this.$axios.get(`/api/client/products/${slug}`)
                    .then(response => {
                        console.log(response)
                        this.product = response.data
                        this.loading = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    #slidesImg {
        --bullet-background: grey;
        --bullet-background-active: black;
    }
</style>
