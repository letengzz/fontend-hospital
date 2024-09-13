<template>
  <el-config-provider :locale="zhCn">
    <div class="container">
      <!--顶部全局组件-->
      <HospitalTop/>
      <!-- 展示路由组件的区域 -->
      <div class="content">
        <router-view></router-view>
      </div>
      <HospitalBottom/>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import {ElConfigProvider} from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
