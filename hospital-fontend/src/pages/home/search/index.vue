<template>
  <div class="search">
      <el-autocomplete
          @select="goDetail"
          :trigger-on-focus="false"
          clearable
          placeholder="请你输入医院名称"
          v-model="hosname"
          :fetch-suggestions="fetchData"
      />
      <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
//引入element-plus提供图标
import {Search} from "@element-plus/icons-vue";

//深度选择器:>>>  /deep/ ::v-deep
</script>
<script lang="ts">
</script>
<style scoped lang="scss">
.search {
  width: 1200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  ::v-deep(.el-tooltip__trigger) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
