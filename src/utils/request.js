import axios from 'axios';
axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: '',
  headers: { 'Content-Type': 'application/json' }
});

// 请求拦截
service.interceptors.request.use((config) => {
  // const token = getToken();
  // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
  // config.headers.token = token;
  // }
  // console.log('token：' + config.headers.token);
  console.log('============start request================');
  // console.log('token:' + token);
  console.log('url：' + JSON.stringify(config.url));
  console.log('method：' + JSON.stringify(config.method));
  console.log('params：' + JSON.stringify(config.data));
  console.log('============end request================');
  return config;
});

// 响应拦截
service.interceptors.response.use(
  (response) => {
    console.log('============start response================');
    console.log('data:' + JSON.stringify(response.data));
    console.log('============end response================');
    const { status, data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function get(url = '', params = {}) {
  return service({
    url,
    method: 'GET',
    params
  });
}

export function post(url = '', data = {}) {
  return service({
    url,
    method: 'POST',
    data
  });
}

// implements get successful data
export function getSuccess(res) {
  const { code, data, message } = res?.data;
  if (code === '00000') {
    return data;
  } else {
    throw message;
  }
}
export default service;
