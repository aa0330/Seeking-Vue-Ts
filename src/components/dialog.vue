<template>
    <div class="dialog">
        <header class="header">
            提示框的头部
        </header>
        <hr>
        <main class="main">
            提示框内容区
        </main>
        <hr>
        <footer class="footer">
            提示框尾部
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.dialog {
    width: 400px;
    height: 400px;
    background: #6dcf79;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
    .header{
      border-bottom: 1px solid #636466;
    }
    .main{
      width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer{
      border-top: 1px solid #636466;
    }
  }
</style>