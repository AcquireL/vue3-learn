import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // 引入路由
import axiosInstance from './plugins/axios.ts';
import './mock'; // 引入 Mock 配置
import * as echarts from 'echarts';
import {DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$echarts = echarts;


app.use(router); // 注册路由
app.use(DatePicker)
app.mount('#app');