<script lang="ts" setup>
import SubmitButton from './components/SubmitButton.vue';


</script>
<template>
  <!-- <div >
    <div class="warpper">
      <div class="content-warpper">
        <div class="text-window"></div>
        <div class="seperate-line"></div>
        <div class="voice-window"></div>
      </div>
      <div class="box-center">
        <el-button type="primary" style="height:50px;width:80px">转换</el-button>
      </div>
    </div>
  </div> -->
  <SubmitButton/>

</template>
<style scoped lang="scss">

.box-center{//盒子内部元素居中
  text-align: center;
}

.content-warpper {//包裹两个窗口
  height : 400px;
   display: flex;
  background-color: rgba(187, 205, 200, 0.586);
}
.text-window{//文本框
  margin:10px;
  border-radius: 5%;
  flex :auto;
  // background-color: rgba(179, 205, 198, 0.671);
  background-color: $boxStyle;
}
.seperate-line{
  border:1px dashed rgb(187, 205, 200);
}
.voice-window{//语音框
  margin:10px;
  border-radius: 5%;
  flex:auto;
  background-color: rgb(179, 220, 212);
}

</style>
