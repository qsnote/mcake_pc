<template>
    <div class="header">
        <!-- 头部背景 -->
        <div class="header_bg">
            <div class="header_top">
                <!-- 登录 注册行 -->
                <div class="f1">
                    <!-- logo -->
                    <div class="headerlogo">
                        <router-link to="javascript:;">
                            <img src="../../public/images/comm/logo.png">
                        </router-link>       
                    </div>
                    <!-- 购物车 登录 注册 -->
                    <ul>
                        <li>
                            <!-- 购物车 -->
                            <router-link to="javascript:">
                                <span class="cart"></span>
                                <span>0件</span>
                            </router-link>
                        </li>
                        <!-- 登录 -->
                        <li>
                            <router-link to="javascript:;">
                                LOG IN 登录
                            </router-link>
                        </li>
                        <!-- 注册 -->
                        <li>
                            <router-link to="javascript:">
                                SIGN UP 注册
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- 菜单导航栏 -->
                <div class="f2">
                    <!-- 地址 电话 -->
                    <div class="header_right">
                        <ul>
                            <li>
                                <span>4006-678-678</span>
                                <span class="tel"></span> </li>
                            <li>
                                <router-link to="javascript:;">
                                    <span>配送范围查询</span>
                                    <span class="delivery"></span></router-link>
                            </li>   
                        </ul>
                        <div class="city" id="city" @mouseenter="isCity" @mouseleave="isCity">
                            <ul>
                                <li id="city-bj" data-id="bj" v-show="true"><router-link to="javascript:;">北京市</router-link></li>
                                <li id="city-sh" data-id="sh" v-show="city"><router-link to="javascript:;">上海市</router-link></li>
                                <li id="city-hz" data-id="hz"  v-show="city"><router-link to="javascript:;">杭州市</router-link></li>
                                <li id="city-sz" data-id="sz"  v-show="city"><router-link to="javascript:;">苏州市</router-link></li>
                            </ul>
                            <span></span>
                        </div>
                    </div>
                    <!-- 菜单项 -->
                    <ul class="menu">
                        <li>
                            <router-link to="javascript:;">
                                <samp>Nos Produits</samp>
                                <span>全部产品</span>
                            </router-link>        
                        </li>
                        <li>
                            <router-link to="javascript:;">
                                <samp>Napoléon</samp>
                                <span>拿破仑系列</span>
                            </router-link>                            
                        </li>
                        <li @mouseenter="isShow" @mouseleave="isShow">
                            <router-link to="javascript:;" class="hd">
                                <samp>Événements</samp>
                                <span>热门活动</span>        
                            </router-link>
                            <dl class="submenu" v-show="show">
                                <dd><router-link to="javascript:;" target="_blank" class="bgw">最新活动</router-link></dd>
                                <dd><router-link to="javascript:;" target="_blank" class="bgw">银行活动</router-link></dd>
                            </dl>
                        </li>
                        <li>
                            <router-link to="javascript:;">
                                <samp>Mon M'CAKE</samp>
                                <span>会员中心</span>
                            </router-link>
                        </li>
                    </ul>                  
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            city:false
        }
    },
    methods:{
        // 功能：控制热门菜单 鼠标悬停出现下拉菜单
        isShow(){
               this.show=!this.show;
        },
        isCity(){
            this.city=!this.city;
        }    
    }
}
</script>

<style scoped>
   @import url(../../public/css/normalize.css);
   /* 头部尺寸 */
    .header{
        min-height: 100px;
        overflow: hidden;
    }
    /* 头部背景 */
   .header_bg{
       height:100px;
       width: 100%;
       background:#fff;
       position:absolute;
       z-index:9;
       box-shadow: 3px 3px 3px 3px #e1e1e1;
   }
   /* 登录 注册行 背景的尺寸 */
   .header_top{
       width:100%;
       height:30px;
       border-bottom: 1px solid #eaeaea;
       position:relative;      
   }
   /* 登录 注册行 内容区域尺寸 */
   .header .header_top .f1{
       width:1200px;
       margin:0 auto;
       
   }
   /* logo样式 */
   .header .header_top .f1 .headerlogo{
       display: inline-block;
       position:absolute;
       left:10px;
       top:0px;
   }
   /* 头部左上 ：购物车 登录 注册样式 */
    .header .header_top .f1 ul{
        display: flex;
        justify-content: flex-end;
        line-height: 30px;
    }
    .header .header_top .f1 ul>li{
        height:30px;
        padding-right:10px;
        line-height: 30px;
    }
    /* 头部左上：a标签样式 */
    .header .header_top .f1 ul>li a{
        color:#ab977e;
        text-decoration: none;
        font-size: 12px;
    }
    /* 头部左上：a标签样式 鼠标悬停样式 */
    .header .header_top .f1 ul>li a:hover{
        text-decoration: underline;
    }
    /* 购物车图标：精灵图添加 */
    .header .header_top .f1 ul .cart{
        background: url(../../public/images/comm/icon.png) no-repeat;
        width:23px;
        height:30px;
        background-position: -48px -9px;
        display: inline-block;
        vertical-align: middle;
    }
    /* 头部第二行；弹性设置 */
    .header .f2{
        width:1200px;
        height:70px;
        margin:0 auto;
        overflow: visible;
    }
    /* 头部第二行：head_right */
    .header .header_right{
        width:295px;
        height:58px;
        padding-top:18px;
        float:right;
    }
    /* 头部第二行：菜单导航栏 */
    .header .f2 ul.menu{
        float: right;
        width:620px;         
    }
    /* 菜单 */
    .header .f2 ul.menu li{
        float:left;
        height:67px;
        width:25%;
        text-align: center; 
    }
    /* 每项菜单内的a样式 */
    .header .f2 ul.menu>li a{
        font:12px 'Microsoft YaHei','微软雅黑','黑体','SimHei';
        color:#767676;
        margin-top:16px;
        display: inline-block;
        width:155px;
        text-decoration: none;
        border-left:1px solid #eaeaea;
    }
    /* 第一个li去掉左边框 */
    .header .f2 ul.menu>li:first-child a{
        border-left:0;
    }
    /* 菜单项 鼠标悬停 字体变色 */
    .header .f2 ul.menu>li a:hover{
        color:#b0916a;
    }
    /* 有子菜单项设置行高 */
    .header .f2 ul.menu>li:nth-child(3){
        height:73px;
        line-height: 73px;
        position:relative;
    }
    /* 子菜单样式 */
    .header .f2 ul.menu>li:nth-child(3) .submenu{
        z-index: 10;
        opacity: 1;
        position: absolute;
        top:50px;
        left:0px;
        width:100%;
    }
    .header .f2 ul.menu>li:nth-child(3) .submenu dd{
        opacity: 1;
        margin-left:0;
        text-align:center;
        line-height:50px; 
        border: 1px solid #e2e2e2;
        background:#fff;
    }
    .header .f2 ul.menu>li:nth-child(3) .submenu dd+dd{
        border-top:none;
    }
    /* 菜单项 菜单标题字体 */
    .header .f2 ul.menu>li>a>samp{
        display: block;
        font:16px 'Microsoft YaHei','微软雅黑','黑体',SimHei;
    }
    /* 第二行左边 地址 电话 */
    .header .header_right ul{
        float:left;
        width:195px;
    }
    
    .header .header_right ul>li{
        height:20px;
        text-align: right;
        padding-right: 5px;
        line-height: 20px;
        font:16px 'Microsoft YaHei','微软雅黑','黑体',SimHei;
        overflow: hidden;
    }
    /* 电话 */
    .header .header_right ul>li:first-child span{
        float: right;
        cursor:text;
        color:#767676;
    }
    .header .header_right ul>li:first-child span.tel{
        background: url(../../public/images/comm/icon.png) no-repeat left center;
        width:23px;
        height:30px;
        background-position: -112px -15px;
        cursor:default;
    }
    /* 配送范围查询 */
    .header .header_right ul>li:nth-child(2) a span{
        float: right;
        cursor: pointer;
        font:12px 'Microsoft YaHei','微软雅黑','黑体',SimHei;
        color:#b0916a;
    }
    .header .header_right ul>li:nth-child(2) a span.delivery{
        background: url(../../public/images/comm/icon.png) no-repeat left center;
        width:23px;
        height:30px;
        background-position: -145px -15px;
        cursor:default;        
    }
    /* 地点定位 */
    .header .header_right div.city{
        float:left;
        width:85px;
        padding-top:19x;
        margin-left:15px;
        font:13px 'Microsoft YaHei','微软雅黑','黑体',SimHei;
        color:#767676;
        overflow: hidden;
    }
    /* 位置图标 */
    .header .header_right div.city span{
        background: url(../../public/images/comm/wz.png) no-repeat;
        float:left;
        width:11px;
        height:16px;
        cursor:pointer;
        margin:8px 0 0 8px;
        position: relative;
    }

     .header .header_right div.city ul:hover{
        border:1px solid rgb(176,145,106);
    } 
    /*城市列表  */
    .header .header_right div.city ul{
        float:left;        
        line-height: 30px;
        width: 70px;
        margin-left:0;
        background:#fff;
        border-radius:5px;
        padding:0px 10px 5px;
        border:1px solid #fff;
        position: absolute;;
    }
     .header .header_right div.city ul li{
         height:30px;
         line-height: 30px;
         padding:0;
     }
     .header .header_right div.city ul li a{
        color:#767676;
        font-size: 13px;
        text-decoration: none;
        display: inline-block;
        width: 70px;
        text-align: center
     }
     .header .header_right div.city ul li+li a{
         color:#767676;
         font-size: 13px;
         text-decoration: none;
         border-radius:15px;
         text-align: center;
         display: inline-block;
         width: 70px;
     }
     .header .header_right div.city ul li a:hover{
        color:#ab977e; 
     }
     .header .header_right div.city ul li+li a:hover{
        background: #eaeaea;
     }
</style>

