import { createSSRApp } from "vue";
import NavBar from './components/zh-navbar/index.vue'
import TabBar from './components/zh-tabbar/index.vue'
import './static/iconfont/iconfont.css';

import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.component('navbar', NavBar);
  app.component('tabbar', TabBar);
  return {
    app,
  };
}
