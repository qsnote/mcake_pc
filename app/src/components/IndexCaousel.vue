<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
           <swiper-slide v-for="(item,index) of imgs" :key="index">
              <img :src="item">
              <p>{{item}}</p>
           </swiper-slide>
           <div class="swiper-pagination"  slot="pagination"></div>
           <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
           <!-- <div class="swiper-button-next" slot="button-next"></div> -->
       </swiper>
    </div>
      
</template>

<script>
export default {
    data(){
        return {
            imgs:["../../public/images/banner/banner01.png","/images/banner/banner02.png"],
           swiperOption: {
              pagination: {
                el: '.swiper-pagination'
              },
              autoplay:true
            }
        }
    },
    created(){
        this.axios.get("http://127.0.0.1:3000/index/banner")
        .then(res=>{
            // this.imgs=res.data;
            // console.log(this.imgs)
        })
    }
}
</script>

<style scoped>
  /* .wrapper{
      width:500px;
      height:500px;
  } */
  img{
      width:100%;
      height:500px;
  }
          
</style>