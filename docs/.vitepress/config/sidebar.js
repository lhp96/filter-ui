import { getMsg } from "./util";
// const arr = getMsg();
// console.log(arr);
export default {
  "/": [
    {
      text: "开始",
      items: [
        { text: "简介", link: "/introduction" },
        { text: "快速上手", link: "/quickStart" },
      ],
    },
    {
      text: "基础组件",
      items: getMsg()[1].items,
    },
    {
      text: "导航组件",
      items: getMsg()[2].items,
    },
    {
      text: "数据展示",
      items: getMsg()[3].items,
    },
    {
      text: "反馈组件",
      items: getMsg()[0].items,
    },
  ],
};
