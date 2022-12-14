import sidebar from "./sidebar";
import head from "./head";
import nav from "./nav";
import markdown from "./markdown";
// import lang from './lang'
import { footer } from "./footer";
const config = {
  title: "Filter-UI",
  description: "使用Filter-UI组件库的教程",
  head,
  markdown,
  themeConfig: {
    search: true, //展示搜索
    algolia: {
      appKey: "",
      indexName: "",
      searchParameters: {
        faeFilters: ["tags:guide,api"],
      },
    },
    sidebar,
    nav,
    // demoblock: lang,
    logo: "https://lhp96.oss-cn-hangzhou.aliyuncs.com/lhp/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png", // 网站nav栏logo
    lastUpdated: "Last Updated",
    author: "lhp96", //  作者
    authorAvatar: "/bighead.svg", //  作者头像
    record: "桂ICP备2021001752号-1",
    footer: footer,
  },
};

export default config;
