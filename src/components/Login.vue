<template>
  <div>
  <h1>登录</h1>
  <ul>
    <li>
      <label for="uname">用户名 :</label>
      <input type="text" v-model="username" id="uname">
    </li>
    <li>
      <label for="pw">密码 :</label>
      <input type="passward" v-model="password" id="pw">
    </li>
    <li>
      <input type="button" value="提交" @click="login">
    </li>
  </ul>
  </div>
</template>

<script>
import { login } from '../api/api'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log(1)
      let params = {
        username: this.username,
        password: this.password
      }
      console.log(params)
      login(params).then(res => {
        console.log(res)
        if (res.meta.status === 200) {
          localStorage.setItem('mytoken', res.data.token)
          this.$router.push({name: 'home'})
        } else {
          alert('用户名或密码错误')
        }
      })
    }
  }
}
</script>
