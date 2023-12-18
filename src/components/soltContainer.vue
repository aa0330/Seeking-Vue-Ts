<template>
    <div class="container">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <!-- <slot :name="name" :index="index">
            {{ name }}----{{ index }}
            </slot>   -->
        </div>
        <div class="footer">
            <div v-for="(name,index) in data">
                <slot :index="index" :name="name" ></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface dataType {
    name:string,
    index: number
}

const data  = reactive<dataType[]>([
    {
        index: 1,
        name:'小明'
    },
    {
        index: 2,
        name:'小红'
    },
    {
        index: 3,
        name:'小蓝'
    },
])



</script>

<style scoped lang="scss">
.container {
    font: 20px bold;
    .header,
    .content ,.footer{
        width: 100vw;
        height: 200px;
        border: 1px solid black;
        display: flex;
        justify-self: center;
        align-items: center;
    }
    .header{

    }
}
</style>