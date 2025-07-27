//进行axios二次封装,使用请求与响应拦截器,以进行前后端联调
import axios from 'axios'


//创建request实例
const request = axios.create({
  baseURL : 'http://localhost:8081/api',
  timeout : 3000,
})
//请求拦截器
request.interceptors.request.use( (config) => {
  console.log(config)
  //传进来的的config是空的，在这个方法里面配置传进来的config并返回即可。
  //config里面有很多配置对象，如headers属性请求头等，用于发起请求携带参数


  return config
} )

//响应拦截器
request.interceptors.response.use( (response) => {
  console.log(`接收到响应：${response}`)
  return response.data
} )

export default request
