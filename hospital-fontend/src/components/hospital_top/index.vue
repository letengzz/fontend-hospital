<script setup lang="ts">

</script>

<template>
  <div class="top">
    <div class="content">
      <!--左侧-->
      <div class="left">
        <img src="@/assets/images/logo.png" alt="">
        <p>预约挂号统一平台</p>
      </div>
      <!-- 右侧-->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--el-border-color);
  .content{
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
      p{
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #bbb;
      .help{
        margin-right: 10px;
      }
    }
  }
}
</style>
