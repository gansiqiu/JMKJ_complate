<style lang="css">

</style>

<template>
    <div class="JMHome" >
        <swiper :options="swiperOption" ref="mySwiper" style="width:80%;height:400px;">
            <!-- slides -->
             <swiper-slide  style="width:80%;min-height:400px;background:black;">
                 <img src="../assets/index1.jpeg" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:red;">
                 <img src="../assets/index2.jpeg" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <swiper-slide style="width:80%;min-height:300px;background:blue;">
                 <img src="../assets/index3.jpeg" alt="" style="width:100%;height:400px;">
             </swiper-slide>
             <!-- Optional controls -->
        </swiper>

        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 name: 'JMHome',
 data() {
   return {
     swiperOption: {
           notNextTick: true,
           autoplay: 300,
           // direction : 'vertical',
           effect:"coverflow",
           grabCursor : true,
           setWrapperSize :true,
           autoHeight: true,
           // paginationType:"bullets",
           pagination : '.swiper-pagination',
           paginationClickable :true,
           // prevButton:'.swiper-button-prev',
           // nextButton:'.swiper-button-next',
           scrollbar:'.swiper-scrollbar',
           observeParents:true,
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
     computed: {
           swiper() {
             return this.$refs.mySwiper.swiper
           }
     },
     mounted() {
        console.log('mounted');
     }
}
</script>
