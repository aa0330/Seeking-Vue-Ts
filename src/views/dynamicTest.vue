<template>
    <div class="showCom">
        导入组件 {{componentsList.length  }} 个组件
        <h3>父组件接收组件1输入信息：{{ info1 }}</h3>
    </div>
    <div class="components" v-for="item in componentsList">
        <component :is="item.componentName" :title="item?.title" :index="item.index" @emitInfo="onchange"  ></component>
    </div>
</template>

<script setup lang="ts">
import { dataType,componentList } from '@/type/dynamicTest'
import { ref,reactive, shallowReactive,onMounted } from 'vue'

const componentsList = shallowReactive<componentList[]>([])
const data = reactive<dataType[]>([])
const setData = () => {
    let list = [
        {
            index:1,
            title: '数据展示列表',
            address: "dynamicList"
        }, {
            index:2,
            title: 'Tab页签',
            address: "dynamicTab"
        }, {
            index:3,
            title: '图片展示',
            address: "dynamicImg"
        }
    ]
    for (let item of list) {
        data.push(item)
    }    
}

const info1 = ref<string>()

const onchange = (info:string,index:number)=>{
    info1.value = info
    console.log('index:',index);
    
}

const loadComponent = () => {
    for (let item of data) {
        import(`@/components/${item.address}.vue` ).then(component => {
            let obj =  {
                componentName:component.default,
                title:item.title,
                index:item.index
            }
            componentsList.push(obj)
        })
    }
}

onMounted(() => {
    setData()
    loadComponent()
})


</script>

<style scoped></style>