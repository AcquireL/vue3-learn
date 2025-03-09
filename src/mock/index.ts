// src/mock/index.js
import Mock from 'mockjs';

// 模拟一个 GET 请求
Mock.mock('/endpoint', 'get', {
    code: 200,
    message: 'success',
    data: {
        'id|1-100': 1,
        'name': '@name',
        'age|18-60': 1,
        'gender|1': ['male', 'female']
    }
});

// 模拟一个 POST 请求
Mock.mock('/api/user/register', 'post', (options) => {
    const body = JSON.parse(options.body);
    return {
        code: 200,
        message: 'registration successful',
        data: body
    };
});

// 你可以继续添加更多的模拟接口