<template>
  <!-- <h3>Telepor</h3> -->
  <div class="container">

    <teleport to="body">
      <Dialog></Dialog>
    </teleport>
    
  </div>
</template>

<script setup lang="ts">
import Dialog from "@/components/dialog.vue"
</script>

<style scoped lang="scss">
.container {
  height: 50vh;
  background-color: #b18a8a;
  // position: relative;
  
}
</style>