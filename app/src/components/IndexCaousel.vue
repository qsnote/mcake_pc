<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="imgs.length">
           <swiper-slide v-for="(item,index) of imgs" :key="index">
               <router-link :to="item.href">
                   <img :src="item.url">
               </router-link>
           </swiper-slide>
           <div class="swiper-pagination"  slot="pagination"></div>
           <div class="swiper-button-prev" slot="button-prev"></div>
           <div class="swiper-button-next" slot="button-next"></div>
       </swiper>
    </div>
      
</template>

<script>
export default {
    data(){
        return {
            imgs:[],
           swiperOption: {
              autoplay: {
                 disableOnInteraction: false, 
                 delay: 3000
              },
              pagination: {
                el: '.swiper-pagination',
                clickable :true,
              },
              loop:true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            }
        }
    },
    created(){
        this.axios.get("http://127.0.0.1:3000/index/banner")
        .then(res=>{
            this.imgs=res.data;
        })
    },
    mounted () {
    }
}
</script>

<style lang="stylus">
  
  
  .wrapper >>> .swiper-button-next
    --swiper-theme-color: #fff;/* 设置Swiper风格 */
    --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
</style>
