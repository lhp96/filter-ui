// .vitepress/theme/index.js
import { registerComponents } from "./register-components.js";
import DefaultTheme from "vitepress/theme";
import "./style/var.css";

export default {
  ...DefaultTheme,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    registerComponents(app);
  },
};
