<template>
    <!-- 
    动态组件： tab页签可以通过动态组件或者路由实现
        v3写法 通过 shallowRef和markRaw去设置组件减少不必要的性能开销
        v2写法 通过 export default 选项式写法的conponents:{}中写入，后续引用时只需以字符串形式去存储和使用即可
 -->
    <div style=" display: flex;">
        <div :class="[active == index ? 'active' : '']" class="tabs" v-for="(item, index) in data"
            @click="changeCom(item, index)">
            <div>{{ item.name }}</div>
        </div>
    </div>
    <component :is="comId"></component>
</template>
  
<script setup lang="ts">
import { reactive, ref, shallowRef, markRaw } from 'vue';
const comId = shallowRef(tabA)
const active = ref(0)
const data = reactive([
    {
        name: 'A组件',
        com: markRaw(tabA)
    },
    {
        name: 'B组件',
        com: markRaw(tabB)
    },
    {
        name: 'C组件',
        com: markRaw(tabC)
    },
])
const changeCom = (item: any, index: number) => {
    comId.value = item.com
    active.value = index
}
</script>
<script lang="ts">
import tabA from '@/components/TabA.vue';
import tabB from '@/components/TabB.vue';
import tabC from '@/components/TabC.vue';
export default {
    components: {
        tabA,
        tabB,
        tabC
    }
}
</script>

<style scoped lang="scss">
.tabs {
    border: 1px solid black;
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.active {
    background: rgb(156, 156, 255);
}
</style>