<template>
    <div class="card">
        <div class="car-head">
            <div>标题</div>
            <div>副标题</div>
        </div>
        <div class="card-content">
            {{ content }}
        </div>

    </div>
</template>

<script setup lang="ts">
type propsType = {
    content: string
}
defineProps<propsType>()


</script>

<style scoped lang="scss">
.card{
    width: 300px;
    border:1px solid #ccc;
    margin: 100px auto;
    border-radius: 3px;
    &:hover{
        box-shadow: 0 0 10px #ccc;
    };
    .card-content{
        padding: 10px;
    }
    .card-header{
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
}
</style>