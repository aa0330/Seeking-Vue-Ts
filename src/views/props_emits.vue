<template>
  <h2>生命周期钩子</h2>
  <water ref="waterData" @on_click="getName" title="云飞扬"  />

  <div></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import water from '@/components/water-fall.vue'

const waterData = ref<InstanceType<typeof water>>()
const getName = (name:string)=>{
  console.log('aaaaaa==>',name);
  console.log('waterData.value?.name:',waterData);
  
}

</script>

<style scoped></style>