<script lang="ts" setup>

</script>
<template>
  <div >
    <div class="content-warpper">
      <div class="text-window"></div>
      <div class="seperate-line"></div>
      <div class="voice-window"></div>
    </div>
  </div>

</template>
<style scoped lang="scss">
.content-warpper {
  height : 400px;
  display: flex;
  background-color: rgba(187, 205, 200, 0.586);
}
.text-window{
  margin:10px;
  border-radius: 5%;
  flex :auto;
  // background-color: rgba(179, 205, 198, 0.671);
  background-color: $boxStyle;
}
.seperate-line{
  border:1px dashed rgb(187, 205, 200);
}
.voice-window{
  margin:10px;
  border-radius: 5%;
  flex:auto;
  background-color: rgb(179, 220, 212);
}

</style>
