<template>
  <div style="display:flex;flex-direction:column">
    <!-- 首页轮播图的结构 -->
    <Carousel/>
    <!-- 首页搜索医院的表单区域 -->
    <Search/>
    <!-- 展示医院的结构-->
    <el-row :gutter="20" style="display: flex">
      <el-col :span="16">
        <!-- 等级子组件 -->
        <Level/>
        <!-- 地区子组件 -->
        <Region/>
        <!-- 展示医院的结构 -->
        <div class="hospital" >
         <Card v-for="o in 5" key="o" class="item"/>
        </div>
        <!-- 分页器 -->
        <div class="page">
          <el-pagination
              v-model:current-page="pageNo"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 40]"
              :size="size"
              :disabled="disabled"
              :background="background"
              layout="prev, pager, next,  total,sizes, jumper"
              :total="400"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
      <el-col :span="8">
        <Tip/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
//引入首页轮播图组件
import Carousel from "./carousel/index.vue";
//引入首页搜索的组件
import Search from "./search/index.vue";
//引入登记子组件
import Level from "./level/index.vue"
//引入地区子组件
import Region from "./region/index.vue"
//展示医院新的的卡片组件
import Card from "./card/index.vue";
//引入右侧组件
import Tip from './tip/index.vue';
import {reactive, ref} from 'vue'
import type {ComponentSize} from 'element-plus'
//当前页数
const pageNo = ref(4)
//每页显示条目个数
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

//存储已有的医院的数据
let hasHospitalArr = reactive([]);
</script>

<style scoped lang="scss">
.page {
  display: flex;
  align-content: center;
  justify-content: center;
  align-self: flex-end;
  margin: 10px 0px;
}
.hospital{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>
