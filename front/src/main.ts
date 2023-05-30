import { createSSRApp } from "vue";
// import NavBar from './components/zh-navbar/index.vue'
// import TabBar from './components/zh-tabbar/index.vue'
import './static/iconfont/iconfont.css';

import uView from '@/uni_modules/vk-uview-ui/index.js';

import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  // app.component('navbar', NavBar);
  // app.component('tabbar', TabBar);
  
  // 使用 uView UI
   app.use(uView)
  return {
    app,
  };
}
