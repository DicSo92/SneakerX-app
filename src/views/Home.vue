<template>
    <ion-content>
        <ion-slides ref="slide" :pager="true"
                    id="slidesImg" :options="slideOpts">
            <ion-slide>
                <img src="https://www.sneakers.fr/wp-content/uploads/2020/06/banner-Nike-Blazer-mobile-1.gif" alt="">
            </ion-slide>
            <ion-slide>
                <img src="https://i8.amplience.net/i/jpl/mobile-banner-253c9636e18bea7fb57d2807743845f9?qlt=80&fmt=webp" alt="">
            </ion-slide>
            <ion-slide>
                <img src="https://www.prodirectsoccer.com/siteimages/responsive/desktop/puma/evospeed/evospeed-turbulence/billboards/Banner1_mobile_fr.jpg" alt="">
            </ion-slide>
        </ion-slides>

        <SlidesProducts/>

        <NewsList/>

        <div class="footerTransparent"></div>
    </ion-content>
</template>

<script>
    import NewsList from '@/components/home/NewsList.vue'
    import SlidesProducts from '@/components/home/SlidesProducts.vue'

    export default {
        name: 'Home',
        components: {
            NewsList,
            SlidesProducts
        },
        data() {
            return {
                slideOpts: {
                    initialSlide: 0,
                    speed: 600,
                    autoplay: {
                        autoplayDisableOnInteraction: false,
                        delay: 5000
                    }
                }
            }
        },
        mounted() {
            const slides = this.$refs.slide
            this.$nextTick(() => {
                slides.options = this.slideOpts;
            });
        }
    }
</script>

<style lang="scss">

</style>
