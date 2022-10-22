# 安装依赖

## pnpm

使用快速的，节省磁盘空间的包管理工具 pnpm 进行安装

```shell
pnpm add @lhp96/filter-ui
```

## npm / yarn

```shell
npm i @lhp96/filter-ui
yarn add @lhp96/filter-ui
```

# 快速上手

在 main.js 中引入下面内容

```js
import { createApp } from "vue";
import App from "./App.vue";

import FilterUI from "@lhp96/filter-ui";
import "@lhp96/filter-ui/dist/entry.css";

createApp(App).use(FilterUI).mount("#app");
```

## 在组件中使用

```vue
<template>
  <div>
    <SButton color="red">测试按钮</SButton>
  </div>
</template>
```
