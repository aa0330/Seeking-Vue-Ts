<template>
    <h2>Suspense</h2>
    <suspense>
        <template #default>
            <AsyncComp/>
        </template>
        <template #fallback>
            <wFall/>
        </template>
    </suspense>
</template>

<script setup lang="ts">                                            // 异步组件
import wFall from '@/views/fall.vue';
import { defineAsyncComponent } from 'vue';

// const Dialog = defineAsyncComponent(()=>import('@/components/suspenseTest.vue'))      // 箭头函数式写法

const AsyncComp  = defineAsyncComponent({
    // 加载函数
    loader:()=>import('@/components/suspenseTest.vue'),

    // 加载异步组件时使用的组件
    loadingComponent:wFall,
    // 展示加载组件前的延迟时间，默认200ms
    delay:200,

    //加载失败后展示的组件 
    errorComponent:wFall,

    // 如果设置timeout，并且超出时间限制也会展示errorComponent
    // 默认未Infinity
    timeout:1000

})




</script>

<style scoped></style>