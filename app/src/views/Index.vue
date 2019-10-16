<template>
    <div>
        <!-- top最上面的羊毛卡 -->
        <router-link :to="url">
            <div class="yangmao" v-show="isShow">
                <div class="close_top">
                    <span @click="closeTop"></span>
                </div>    
            </div>
        </router-link>
        <!-- 引入页头组件 Myheader.vue -->
        <my-header></my-header>

        <!-- 引入首页轮播图 -->
        <indexcaousel></indexcaousel>    

        <!-- 引入页尾组件 Myfooter.vue -->
        <my-footer></my-footer>
    </div>
</template>

<script>
// import $ from "jquery";
import indexcaousel from "../components/IndexCaousel"
export default {
    data(){
        return {
            url:"/myfooter",
            isShow:true
        }
    },
    components:{
        indexcaousel
    },
    methods:{
        closeTop(){
           this.url="";
           this.isShow=false;
            /*
               $(".close_top").click(function(){
              $(this).fadeOut(10); 
              $(".yangmao").slideUp(500);
              $(".header").animate({
                  minHeight: "100px"
              }, 500);
              return false; 
          })  
             */
        }
    }
}
</script>

<style scoped>
    .yangmao{
        background:url(../../public/images/icon/top-banner-mcard.jpg) no-repeat center;
        height:100px;
        width:100%;
    }
    .yangmao .close_top{
        width:1200px;
        height:100%;
        margin:0 auto;
        position: relative;
    }
    .yangmao .close_top>span{
        background:url(../../public/images/icon/close.png);
        position: absolute;
        top:10px;
        right:10px;
        width:23px;
        height:23px;
        cursor:pointer;
        display: block;
    }
</style>
