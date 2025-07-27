//统一管理与用户相关的接口
import request from'@/utils/request'

//基础地址'/api'已经有了,无需再加
enum API {
  TEST1_URL = '/test/1',
  TEST2_URL = '/test/2'
}

//暴露请求函数
export const test1 = (data:object) => {
  return request.post(API.TEST1_URL, data)
}

export const test2 = ()=>{
  return request.get(API.TEST2_URL)
}
