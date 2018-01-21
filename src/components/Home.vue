<template>
  <div>主页</div>
</template>

<script>
import { testDate } from '../api/api'
export default {
  name: 'home',
  data () {
    return {}
  },
  mounted () {
    testDate({
      query: '',
      pagenum: 1,
      pagesize: 10
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
