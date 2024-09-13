# 医院项目
技术选型：

![image-20240903132844910](https://cdn.jsdelivr.net/gh/letengzz/tc2/img/202409031330719.png)

使用 `npm create vue@latest`，删除多余代码：

![image-20240903170426461](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409102023799.png)

浏览器自动打开：

在package.json配置文件中：

```json
"scripts": {
  "dev": "vite --open",
  "build": "run-p type-check \"build-only {@}\" --",
  "preview": "vite preview",
  "build-only": "vite build",
  "type-check": "vue-tsc --build --force"
},
```

配置src别名：

在vite.config.ts配置文件：如果红色语法提示请安装 @types/node 是TypeScript的一个声明文件包，用于描述Node.js核心模块和常用的第三方库的类型信息。

```typescript
npm install @types/node --save-dev
```

> vite.config.ts

```typescript
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins:[vue()],
  resolve:{
    alias: {
      "@": path.resolve(__dirname,'src')
    }
  }
})
```

找到tsconfig.json配置文件，找到配置项compilerOptions添加配置，作用是让IDE可以对路径进行智能提示

> tsconfig.json

```json
"compilerOptions":{
  "baseUrl":".",
  "paths": {
    "@/*":["src/*"]
  }   
}
```

## 搭建静态

清除默认样式：在[npm](https://www.npmjs.com/package/reset.scss?activeTab=code)中搜索reset.scss

![image-20240904191841259](https://cdn.jsdelivr.net/gh/letengzz/tc2/img/202409041918429.png)

复制该代码：

![image-20240904105303817](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409102033919.png)

新建一个style 用于放置文件：

![image-20240904105518940](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409102033337.png)

引入：

```typescript
//vue3框架提供的方法createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
//引入根组件App
import App from '@/App.vue'
//利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App);
//引入清除默认样式
import '@/style/reset.scss'
//挂载
app.mount('#app')
```

安装 scss：

```shell
npm i sass
```

## 顶部组件

新建顶部组件：

> src/components/hospital_top/index.vue

```vue
<script setup lang="ts">

</script>

<template>
  <div class="top">
    <div class="content">
      <!--左侧-->
      <div class="left">
        <img src="../../assets/images/logo.png" alt="">
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
        width: 70px;
        height: 70px;
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
```

将顶部组件注册成全局组件：

> src/main.ts

```typescript
//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'

app.component('HospitalTop',HospitalTop)
```

使用顶部组件：

> src/App.vue

```vue
<script setup lang="ts">
</script>

<template>
  <div class="container">
    <!--顶部全局组件-->
    <HospitalTop/>
    <div class="content">
      xxxxx
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 900px;
  }
}
</style>
```

## 底部组件

新建顶部组件：

> src/components/hospital_bottom/index.vue

```vue
<script setup lang="ts">
</script>

<template>
  <div class="bottom">
    <div class="content">
      <!--左侧-->
      <div class="left">京ICP备 12345678号 电话挂号010-123456</div>
      <!-- 右侧-->
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  .content{
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .right{
      span{
        margin: 0 5px;
      }
    }
  }
}
</style>
```

将底部注册成全局组件：

> src/main.ts

```typescript
//引入全局组件
import HospitalBottom from '@/components/hospital_bottom/index.vue'

app.component('HospitalBottom',HospitalBottom)
```

使用底部组件：

> src/App.vue

```vue
<script setup lang="ts">
</script>

<template>
  <div class="container">
    <!--顶部全局组件-->
    <HospitalTop/>
    <div class="content">
      xxxxx
    </div>
    <!--顶部全局组件-->
    <HospitalBottom/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 900px;
  }
}
</style>
```

## 路由搭建

安装router：

```shell
npm i vue-router
```

使用router：

> src/main.ts

```vue
import router from "@/router";
app.use(router)
```

创建路由：

> src/router/index.ts

```typescript
// 创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter, createWebHistory} from 'vue-router';
//引入可能要呈现的组件
import Home from '@/pages/home/index.vue';


//第二步：创建路由器
const router = createRouter({
    // 路由器工作模式
    //在制定路由的之后 一定要想好路由器的工作模式
    history: createWebHistory(),
    //配置路由规则
    routes: [
        // 配置路由
        {
            // 路由路径
            path: '/home',
            //组件
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
    ],
    //滚动行为：控制滚动条的位置
    scrollBehavior(){
        return {
            left: 0,
            top: 0
        }
    }
});

//暴露router
export default router;
```

 展示路由组件：

> src/App.vue

```vue
<template>
  <div class="container">
    <!--顶部全局组件-->
    <HospitalTop/>
    <div class="content">
      <!-- 展示路由组件-->
      <router-view></router-view>
    </div>
    <!--顶部全局组件-->
    <HospitalBottom/>
  </div>
</template>
```

## 轮播图组件

安装elementplus：

```shell
npm i element-plus
```

引入并安装element plus插件：

> src/main.ts

```typescript
//element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
```

创建轮播图组件：

> src/pages/home/carousel/index.vue

```vue
<script setup lang="ts">

</script>

<template>
  <el-carousel height="350px" motion-blur>
    <el-carousel-item v-for="item in 4" :key="item">
     <img src="../../../assets/images/web-banner-1.png" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
img{
  width: 100%;
  height: 350px;
}
</style>
```

引入并使用轮播图：

> src/pages/home/index.vue

```vue
<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from '@/components/carousel/index.vue'
</script>

<template>
  <!-- 首页轮播图 -->
  <Carousel/>
</template>

<style scoped lang="scss">

</style>
```

## 搜索组件

创建搜索组件：

> src/pages/home/search/index.vue

```vue
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
```

引入并使用轮播图：

> src/pages/home/index.vue

```vue
<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
  </div>
</template>

<script setup lang="ts">
//引入首页轮播图组件
import Carousel from "@/components/carousel/index.vue";
//引入首页搜索的组件
import Search from "@/components/search/index.vue";
</script>

<style scoped lang="scss">
</style>
```

## 首页登记/地区组件





## Axios封装

```
npm i axios
```



## 代理跨域



## 展示已有医院











![image-20240904154442412](./assets/image-20240904154442412.png)

![image-20240904154512709](./assets/image-20240904154512709.png)

![image-20240904155001703](./assets/image-20240904155001703.png)

![image-20240904155026394](./assets/image-20240904155026394.png)

![image-20240904155103537](./assets/image-20240904155103537.png)

![image-20240904155419760](./assets/image-20240904155419760.png)

![image-20240904155545183](./assets/image-20240904155545183.png)

![image-20240904155755069](./assets/image-20240904155755069.png)

![image-20240904160011581](./assets/image-20240904160011581.png)

![image-20240904160103935](./assets/image-20240904160103935.png)

![image-20240904160209742](./assets/image-20240904160209742.png)

![image-20240904160231797](./assets/image-20240904160231797.png)

![image-20240904160331366](./assets/image-20240904160331366.png)

![image-20240904160357192](./assets/image-20240904160357192.png)

![image-20240904160425295](./assets/image-20240904160425295.png)

![image-20240904160442144](./assets/image-20240904160442144.png)

![image-20240904160539549](./assets/image-20240904160539549.png)

![image-20240904160704983](./assets/image-20240904160704983.png)

![](./assets/image-20240904161109868.png)

![image-20240904161154802](./assets/image-20240904161154802.png)

![image-20240904161252810](./assets/image-20240904161252810.png)





