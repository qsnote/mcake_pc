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
    name:"indexCaousel",
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

<style lang="stylus" scoped>
    .wrapper /deep/ .swiper-pagination-bullet{
        background :#aaa;
        width:15px;
        height:15px;
        opacity :.8;
        border:1px solid #eee;
        margin-right:5px;
    }
    .wrapper /deep/ .swiper-pagination-bullet-active{
        background :#a5002f;      
    }
    .wrapper /deep/ .swiper-button-prev{
        width:17px;
        height:30px;
        background:url(../../../public/images/banner/arrows.png);
    }
    .wrapper /deep/ .swiper-button-next{
        width:17px;
        height:30px;
        background:url(../../../public/images/banner/arrows.png);
        background-position:0 -30px; 
    }
    img{
        height:550px;
        width:1280px;
    }  
</style>
