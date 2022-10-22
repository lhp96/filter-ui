// .vitepress/theme/index.js
import { registerComponents } from "./register-components.js";
import DefaultTheme from "vitepress/theme";
import FilterUI from "../../../packages/filter-ui/dist/filter-ui.esm.js";
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
import "vitepress-theme-demoblock/theme/styles/index.css";
import "../../../packages/filter-ui/dist/entry.css";
import "./style/var.css";

export default {
  ...DefaultTheme,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    registerComponents(app);
    app.use(FilterUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
