<template>
    <h2>transition</h2>
    <div :class="{ shake: disabled }" class="box">
        <button @click="onChange">Click me</button>
        <span v-if="disabled"> This feature is disabled!</span>
    </div>
    <div class="box1" @wheel="fi" >aaaaaaaa</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const disabled = ref<boolean>()

const onChange = () => {
    disabled.value = true;
    setTimeout(() => {
        disabled.value = false;
    }, 1500)
}
                            
const fi = (e)=>{
    console.log(e);
    
    console.log('asssssssd');
    
}

</script>

<style scoped lang="scss">
.box{
    margin-left: 20px;
};
.box1{
    width: 500px;
    height: 500px;
    background-color: #afe3cc;
}


.shake {

    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {

    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>