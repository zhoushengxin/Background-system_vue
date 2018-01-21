import axios from 'axios'
// 设置请求的基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 登录拦截器
// 拦截器处理token
axios.interceptors.request.use(function (params) {
  // 当前是否存在token
  let token = localStorage.getItem('mytoken')
  if (token) {
    params.headers['Authorization'] = token
  }
  return params
}, function (error) {
  return Promise.reject(error)
})
// 实现登录功能
export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}
// 请求头测试
export const testDate = (params) => {
  return axios.get('users', {params: params}).then(res => {
    return res.data
  })
}
