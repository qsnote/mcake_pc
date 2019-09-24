<template>
    <div class="myfooter">  
         <div class="myfooter_f1">
            <div class="myfooter_left">
                <p style="color:#b0916a">客服热线：4006-678-678（8:00 - 22:00）</p>
                <p>客服邮箱：cs@mcake.com</p>
            </div>
            <div class="myfooter_right">
                <dl>
                    <dt><router-link to="javascript:;">发现</router-link></dt>
                    <dd><router-link to="javascript:;">公告</router-link></dd>
                    <dd style="margin-top:10px;" class="faxian"> 
                             <span class="sina" style="margin-right:8px;"></span>
                            <router-link to="javascript:;">
                            <span class="wechat" @mouseenter="isShowWechat" @mouseleave="isShowWechat"></span>
                            </router-link>
                       
                        <samp v-show="showWechat" class="ma"></samp>
                    </dd>
                </dl>
                <dl>
                    <dt><router-link to="javascript:;">关于我们</router-link></dt>
                    <dd><router-link to="javascript:;">企业合作</router-link></dd>
                    <dd><router-link to="javascript:;">媒体合作</router-link></dd>
                    <dd><router-link to="javascript:;">招贤纳士</router-link></dd>
                    <dd><router-link to="javascript:;">呼叫中心</router-link></dd>
                </dl>
                <dl>
                    <dt><router-link to="javascript:;">帮助中心</router-link></dt>
                    <dd><router-link to="javascript:;">投诉与建议</router-link></dd>
                    <dd><router-link to="javascript:;">会员权益</router-link></dd>
                    <dd><router-link to="javascript:;">购物指南</router-link></dd>
                    <dd><router-link to="javascript:;">支付类</router-link></dd>
                    <dd><router-link to="javascript:;">订单相关</router-link></dd>
                    <dd><router-link to="javascript:;">配送服务</router-link></dd>
                </dl>
            </div>
         </div>
        <div class="b_copyright">
            <table>
                <tr>
                    <td>上海卡法电子商务有限公司</td>
                    <td>上海卡法电子商务有限公司北京分公司</td>
                    <td>上海卡法电子商务有限公司杭州分公司</td>
                </tr>
                <tr>
                    <td>地址：上海市普陀区同普路1130弄3号楼</td>
                    <td>地址：北京市朝阳区东四环中路82号3座04层505</td>
                    <td>地址：杭州市拱墅区中环大厦607室</td>
                </tr>
                <tr>
                    <td>电话：021-52691591</td>
                    <td>电话：010-52088262</td>
                    <td>电话：0571-28103688</td>
                </tr>
                <tr>
                    <td><a href="http://static.mcake.com/file/45bd630382f3722e/1e072161a0cfb0f3.jpg">社会信用代码：913101070678091460</a></td>
                    <td><a href="http://static.mcake.com/file/b03db117e433acfa/0fe0386ad2cd75d3.jpg">社会信用代码：911101053484280752</a></td>
                    <td><a href="http://static.mcake.com/file/0892df100e0f3c76/09c369ed881ad213.jpg">社会信用代码：913301060920344424</a></td>
                </tr>
                <tr>
                    <td><a href="http://static.mcake.com/file/9cf52502c183b213/64537636f9b040f8.jpg">食品经营许可证：JY13101070034251</a></td>
                    <td><a href="http://static.mcake.com/file/a7e902007c06ce83/dcc598ac970854e8.jpg">食品经营许可证：JY11105211911746</a></td>
                    <td><a href="http://static.mcake.com/file/233aaf781606c528/4e3cc903c472f0d1.jpg">食品经营许可证：JY13301050141226</a></td>
                </tr>
                <tr>
                    <td><a href="http://static.mcake.com/file/5ef5931c2226a424/c9907a053fdbcab9.jpg">食品生产许可证：SC12431010700121</a></td>
                </tr>
            </table>
        </div>
        <p class="f_copyright">
            Copyright © 2012-2019 上海卡法电子商务有限公司 版权所有
            <span>
                <a href="http://www.miitbeian.gov.cn/"> 沪ICP备12022075号</a>
                <a href="http://scjgj.sh.gov.cn/lz/licenseLink.do?method=licenceView&entyId=dov73ne26zbqq0ilh2bh0q0c52u55z0cgo"><img src="../../public/images/icon/gs.png" style="margin-bottom:-7px;" border="0"></a>
            </span>
        </p> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            showWechat:false
        }
    },
    methods:{
        isShowWechat(){
            this.showWechat=!this.showWechat;
        }
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
        color:#767676;
    }
    a:hover{
        color:#b0916a;
    }
    /* 设置底部宽高和背景 */
    .myfooter{
        width:100%;
        height:auto;
        background:#f2f6f7;
        font:12px 'Microsoft YaHei','微软雅黑','黑体','SimHei';
        color:#767676;
        text-align: center;
    }
    /* 设置底部一楼的尺寸 */
    .myfooter_f1{
        width:1040px;
        height:168px;
        margin:0 auto;
        padding:40px 0 20px 0;
        overflow: hidden;
    }
    /* 底部一楼左 */
    .myfooter_f1 .myfooter_left{
        float: left;
        width:320px;
        margin-left:10px;
    }
     /* 底部一楼左 内容外边距设置 */
    .myfooter_f1 .myfooter_left p{
        margin-top:10px;
        font-size:14px;
        text-align: left;
    }
    /* 底部一楼右 */
    .myfooter .myfooter_right{
        float: left;
        width:580px;
        height:168px;
        margin-left:40px;
        border-left:1px solid #bbb;
        overflow: visible;
        position: relative;
    }
    /* 底部一楼右 列表 */
    .myfooter .myfooter_right dl{
        float: left;
        width:33.33%;
        margin:0;
        padding:0;
    }
    /* 去掉dd默认左外边距 */
    .myfooter .myfooter_right dd{
        margin:0;
        line-height: 24px;
    }
    /* 给dt添加列标题样式 */
    .myfooter .myfooter_right dt a{
        line-height:24px;
        font-size:14px;
        font-weight:700;
    }
    /* 底部一楼右 第一个dl下的图标设置 */
    .myfooter .myfooter_right dd span.sina{
        background:url(../../public/images/index/w_icon_hd.png) no-repeat center;
        background-position: 0 0;
        width:25px;
        height:25px;
        background-size: auto 25px;
        display: inline-block;
    }
    .myfooter .myfooter_right span.wechat{
        background:url(../../public/images/index/w_icon_hd.png) no-repeat center;
        background-position: -29px 0;
        height:25px;
        width:25px;   
        background-size: auto 25px;
        display: inline-block;
    }
    /* 给微信图片后添加一个二维码图片 */
    .myfooter .myfooter_right .faxian samp.ma{
        float:right;
        background:url(../../public/images/postsystem/docroot/images/channel/channel_286_9.jpg) no-repeat;
        height:149px;
        width:149px;
        background-size: auto 149px;
        position: absolute;
        left:130px;
        top:-40px;
    }
    /* 底部 */
    .myfooter .b_copyright{
        width:870px;
        margin:10px auto;
    }
    .myfooter .b_copyright td{
        padding:0 20px;
        text-align: left;
    }
    .myfooter .f_copyright{
        padding:18px 0 20px;
        margin:0 auto;
    }
</style>