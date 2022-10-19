const fs = require("fs");
const path = require("path");
const { resolve } = path;

export const getMsg = (path = resolve(__dirname, "../../article")) => {
  // const getMsg = (path = resolve(__dirname, "../../article")) => {
  let res = fs.readdirSync(path);
  if (res) {
    let arr = res.map((item) => {
      if (String(item).endsWith(".md")) {
        return { text: item.split(".")[0], link: resolve(path, item) };
      } else {
        return {
          text: item.split(".")[0],
          items: getMsg(resolve(path, item)),
        };
      }
    });
    arr = arr.map((item) => {
      if (item.link) {
        item.link = translateDir(item.link);
      }
      return item;
    });
    // console.log(arr);
    return arr;
  } else {
    console.warn("无文章");
  }
};

/**
 *
 * @param {string} path
 * @returns
 */
function translateDir(path) {
  return path.replace(/\\/g, "/").split("docs")[1].split(".")[0];
}

// console.log("aaa", getMsg()[0]);
// module.exports = getMsg;
