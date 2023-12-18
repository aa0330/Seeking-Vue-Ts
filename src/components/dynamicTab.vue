<template>
  <div class="container">
    <h2> Tab组件 </h2>
    <div class="info-box">
      <div>父组件传递标题：{{ title }}</div>
      
    </div>
  </div>
</template>
  
<script setup lang="ts">
defineProps<{
  title: string
}>()

defineExpose({

})

</script>
  
<style scoped lang="scss">
.container {
  width: 500px;
  height: 300px;
  background: #fae2e2;
  border: 1px solid black;
  margin: 10px auto;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>