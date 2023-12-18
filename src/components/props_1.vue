<template>
  <div>{{ title }}</div>
</template>

<script  lang="ts">
export default {
  // props: ['title'],
  props:{
    title:String    // 需要使用对应类型的构造函数 string ---String   number--Number
  },
  created() {
      console.log(this.title);
      
  },



}
</script>

<style scoped></style>