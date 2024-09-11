<script setup lang="ts">

</script>

<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">3</div>
        <div class="tip">
          <div class="level">4</div>
          <div class="time">5</div>
        </div>

      </div>
      <div class="right">
        2
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  .left {
    width: 60%;
    .tip {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
