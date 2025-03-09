// src/plugins/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost', // 替换为你的 API 基础 URL
    timeout: 1000, // 请求超时时间
    headers: { 'Content-Type': 'application/json' }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么，比如添加认证 token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response;
    },
    error => {
        // 对响应错误做点什么
        if (error.response.status === 401) {
            // 处理未授权错误，比如重定向到登录页面
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;