<template>
    <div id="main">
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

        <!-- 蛋糕第一层 -->
        <div class="f" id="f1">
            <div class="fnav"></div>
            <div class="f_left">
              <div class="ftitle"></div>
              <div class="flist"></div>           
            </div>
            
        </div>
        
        <!-- 蛋糕第二层 -->
        <div class="f" id="f2">
            <div class="f_left">
                <div class="ftitle"></div>
                <div class="flist"></div>
            </div>
        </div>
          
        <!-- 页尾 宣传图片 -->
        <div class="wallbox">
            <ul class="wallbox_list">
            </ul>
        </div>
        

        <!-- 引入页尾组件 Myfooter.vue -->
        <my-footer></my-footer>
    </div>
</template>

<script>
// import $ from "jquery";
import indexcaousel from "../components/index/IndexCaousel"
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
    #main{
        width:100%;
        overflow: hidden;
    }
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

    /* 蛋糕第一层 尺寸 */
    .f{
       width:1280px;
       margin:0 auto;
       position: relative;
       overflow: hidden; 
    }
    
    .f_left{
       width:1040px;
       margin:0 auto;
    }
    .ftitle{
       width:1040px;
       height:53px;
       background:#f00;
    }
    .flist{
        width:1040px;
        height:1919px;
        margin:0 auto;
        background:#f0f;
    }
    .fnav{
        position:absolute;
        width:83px;
        height:337px;
        top:50px;
        left:1160px;
        background: #ff0;
    }
    /* 蛋糕第二层 尺寸 */
    

    /* 页尾 宣传图 */
    .wallbox{
        width:100%;
        height:263px;
        background:#eee;
    }
    .wallbox_list{
        width:1200px;
        height:263px;
        margin:0 auto;
        background:#ff0;
    }
</style>
