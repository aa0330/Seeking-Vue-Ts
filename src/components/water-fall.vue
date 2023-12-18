<template>
    <h3>组件中的标题：{{ title }}</h3>
    <h3>arr:{{ arr }}</h3>
    <button @click="send">给父组件传值</button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue'
// 接收父组件传过来的值defineProps
// ts特有定义默认值，withDefaults()

const props = defineProps({
    title: {
        type: String,
        default: () => { return 'sadadasdsa' }
    },
    arr: {
        type: Array<[]>,
        default: () => {
            return [1, 2, 3, 3]
        }
    }
})

// js设置 props
// const props = defineProps({
//     title:{
//         type:string,
//         default: "默认值"
//     }   
// })



// 写法一
// const emit = defineEmits(['on-click'],['change'])
// 写法二
// const emit = defineEmits<{
//     (e:'change',name:string)  :void
// }>()

// 写法三：
const emit = defineEmits<{
    change: [id: number] // 具名元组语法
    update: [value: string];
    on_click: [name: string]
}>()


function send() {
    console.log('dasdad',props.title);
    
    emit('on_click','xxxx')
}


defineExpose({
    name:'xiaochgi1',
    open:()=>{
        console.log('qqqqqqqqqq===>');
        
    }

})


</script>

<style scoped></style>