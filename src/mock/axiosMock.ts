// src/mock/axiosMock.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// 模拟一个 GET 请求
mock.onGet('/endpoint').reply(200, {
    code: 200,
    message: 'success',
    data: {
        id: 1,
        name: 'John Doe',
        age: 30,
        gender: 'male'
    }
});

// 模拟一个 POST 请求
mock.onPost('/api/user/register').reply((config) => {
    const body = JSON.parse(config.data);
    return [200, {
        code: 200,
        message: 'registration successful',
        data: body
    }];
});

// 导出 mock 实例，以便在其他地方使用（可选）
export default mock;