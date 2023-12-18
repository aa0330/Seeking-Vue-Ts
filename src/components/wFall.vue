<template>
  <div class="wraps">
    <div v-for="item in waterList"
      :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px' }"
      class="items"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import type { fallData } from '@/type/wFall'

const props = defineProps({
  list: Array<fallData>,
  default: () => {
    list: []
  }
})

const waterList = reactive<any[]>([])
let heightList:number[] = reactive([])

const init = () => {
  const width = 130;
  const x = document.body.clientWidth
  const column = Math.floor(x / width)
  for (let i = 0; i < props.list?.length; i++) {
    if (i < column) {
      props.list[i].left = width * i;
      props.list[i].top = 10;
      waterList.push(props.list[i]);
      heightList.push(props.list[i].height + 10);
    }else{
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h:number,i:number)=>{
        if(current > h){
          current = h;
          index = i ;
        }
      })
      props.list[i].top = (current + 20);
      heightList[index] +=  (props.list[i].height + 20);
      props.list[i].left = width * index;
      waterList.push(props.list[i]);
    }
  }
}

onMounted(() => {
  init();
})


</script>

<style scoped lang="scss">
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
    overflow: hidden;
  }
}
</style>