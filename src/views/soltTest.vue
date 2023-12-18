<template>
    <div class="title">
        插槽篇
    </div>
    <div class="solt-box">
        <soltContainer>
            <!-- <template v-slot>
                <div>
                    匿名插槽: 无需多言直接写在组件内部template，然后组件内通过slot标签进行插入
                </div>
            </template> -->
            <template v-slot:header>
                <div>
                    具名插槽: 父组件通过v-slot:+ name 进行传递 ,子组件通过 slot标签上的name属性进行匹配
                </div>
            </template>

        </soltContainer>

        <soltContainer2>

            <template #default="data">
                具名作用域插槽：{{ data.count }}--{{ data.text }}
            </template>
            <template #xiaochi="data">
                <div>
                    {{ data.text }}---{{ data.count }}
                </div>
            </template>


        </soltContainer2>

    </div>
</template>
<script setup lang="ts">
import soltContainer from '@/components/soltContainer.vue'
import soltContainer2 from '@/components/slotContainer2.vue';



</script>

<style scoped lang="scss">
.title {
    border: 1px solid rgb(244, 212, 244);
    font: 40px bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>