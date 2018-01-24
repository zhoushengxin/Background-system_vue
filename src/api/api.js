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
// 用户列表查询
export const getUsersData = (params) => {
  return axios.get('users', {params: params}).then(res => {
    return res.data
  })
}
// 用户状态改变查询 users/uId/state/type
export const toggleUserState = (params) => {
  return axios.put('users/' + params.Uid + '/state/' + params.state).then(res => {
    return res.data
  })
}
// 根据id查询用户
export const getUserById = (params) => {
  return axios.get('users/' + params.Uid).then(res => {
    return res.data
  })
}
// 编辑用户提交
export const editUser = (params) => {
  return axios.put('users/' + params.id, params).then(res => {
    return res.data
  })
}
// 删除用户
export const deleteUser = (params) => {
  return axios.delete('users/' + params.Uid).then(res => {
    return res.data
  })
}
// 添加用户
export const AddUser = (params) => {
  return axios.post('users/', params).then(res => {
    return res.data
  })
}
//  分配角色  请求路径：users/:id/role 请求方法：put
export const giveRole = (params) => {
  return axios.put('users/' + params.id + '/role', params).then(res => {
    return res.data
  })
}
// 角色列表  请求路径：roles 请求方法：get
export const roleList = (params) => {
  return axios.get('roles').then(res => {
    return res.data
  })
}
