<template>
    <div>
        <!-- 按钮 -->
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button><br><br>

            <el-button plain>朴素按钮</el-button>
            <el-button plain type="primary">主要按钮</el-button>
            <el-button plain type="success">成功按钮</el-button>
            <el-button plain type="info">信息按钮</el-button>
            <el-button plain type="warning">警告按钮</el-button>
            <el-button plain type="danger">危险按钮</el-button><br><br>

            <el-button round>圆角按钮</el-button>
            <el-button round type="primary">主要按钮</el-button>
            <el-button round type="success">成功按钮</el-button>
            <el-button round type="info">信息按钮</el-button>
            <el-button round type="warning">警告按钮</el-button>
            <el-button round type="danger">危险按钮</el-button><br>
        </el-row>
        <br>

        <!-- 时间选择器 -->
        <el-time-select v-model="value1" :picker-options="{start:'08:30',step:'00:15',end:'18:30'}" placeholder="选择时间"></el-time-select>
        <br><br>
 
        <!-- Rate评分 -->
        <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
        </div>
         <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate v-model="value2" :colors="['#99a9bf','#f7ba2a','#ff9900']"></el-rate>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value1:"",
            value1:null,
            value2:null
        }
    }
}
</script>