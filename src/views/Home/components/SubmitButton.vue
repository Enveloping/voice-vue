<script setup lang="ts">
import { submit } from '@/api/audio'
import { tr } from 'element-plus/es/locales.mjs'
import { computed, ref } from 'vue'
const props = defineProps({
  emitFunction: Function,
})
const data = ref({})
const loading = ref(false)
const loadingStyle = computed(() => {
  return loading.value ? 'isLoading' : ''
})

const submitAudio = (e: MouseEvent) => {
  //防止重复点击
  if (loading.value) return

  loading.value = true

  //调用父组件传过来的方法
  //`?.`是可选链运算符如果emitFunction是函数才会调用并将e传入，否则不会调用
  // props.emitFunction?.(e)
  //发起请求
  submit(data).then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(()=>{
      loading.value = false
    })
  // setTimeout(() => {
  //   loading.value = false
  // }, 1000)
}
</script>
<template>
  <div class="button-wrapper">
    <div class="button-content" @click="submitAudio" v-bind:id="loadingStyle">
      <div v-if="loading"><img src="@/assets/loading.svg"></div>
      <div v-else>提交</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img{
  margin-top: 20px;
  width: 20px;
  height: 20px;
  animation: loadingKeyFrame 2s linear infinite;
}

@keyframes loadingKeyFrame {
  0% { transform: translate(0%, 0%) rotate(0deg); }
  100% { transform: translate(0%, 0%) rotate(360deg); }
}


.button-wrapper {
  margin-left: 50px;
  display: inline-block;
  height: 70px;
  width: 100px;
  box-sizing: border-box;
  font-size: large;

  .button-content {
    height: 100%;
    width: 100%;
    background-color: #d6e5e7;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    line-height: 70px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
  .button-content:hover {
    background-color: #bfcfd0;
    transition: all 0.2s ease-out;
  }

  #isLoading {
    background-color: #6c7778;
    transition: all 0.1s ease-out;
  }
}
</style>
