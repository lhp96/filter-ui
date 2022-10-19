import { getMsg } from "./util";
const arr = getMsg();
// console.log(arr);
export default {
  "/": [
    {
      text: "开始",
      items: [
        { text: "简介", link: "/introduction" },
        { text: "快速上手", link: "/" },
      ],
    },
    // {
    //   text: "基础组件",
    //   items: arr[1].items,
    // },
    // {
    //   text: "导航组件",
    //   items: arr[2].items,
    // },
    // {
    //   text: "数据展示",
    //   items: arr[2].items,
    // },
    // {
    //   text: "反馈组件",
    //   items: arr[2].items,
    // },
  ],
};
