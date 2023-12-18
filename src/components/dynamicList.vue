<template>
  <div class="container">
    <h2> List组件 </h2>
    <div class="info-box">
      <div>父组件传递标题：{{ title }}</div>
      <hr>
      <div class="input-box">
        用户名：<input type="text" @input="changeInfo" v-model="info">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
  title: string,
  index:number
}>()

const emit = defineEmits<{
  emitInfo: [info: string,index:number]
}>()

const info = ref<string>('')

const changeInfo = () => {
  emit('emitInfo', info.value,props.index)
}


</script>

<style scoped lang="scss">
.container {
  width: 500px;
  height: 300px;
  background: #f6fae2;
  border: 1px solid black;
  margin: 10px auto;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>