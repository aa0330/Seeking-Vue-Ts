<template>
    <div></div>
</template>

<script setup lang="ts">
import { ref, provide, readonly } from 'vue'
const msg = ref('')
provide('key', readonly(msg))

</script>

<style scoped></style>