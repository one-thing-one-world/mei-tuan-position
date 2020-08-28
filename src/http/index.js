import axios from 'axios'
import nprogress from 'nprogress'

import router from '../router'

const service = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// 请求拦截
service.interceptors.request.use(config => {

    nprogress.start()

    // 现在是服务端在登录成功之后 会返回一个令牌(token)
    // jwt做身份验证(json web token)
    // let token = localStorage.getItem('token')
    // if (token) {
    //     // 就让除了不需要token的请求 都加上这个token
    //     // 吧token都加载请求头当中
    //     config.headers['Authorization'] = 'Bearer ' + token
    // }
    
    return config
}, err => {
    nprogress.done()
    return Promise.reject(err)
})

service.interceptors.response.use(res => {
    nprogress.done()
    return res.data
}, err => {
    // 根据错误的状态码来判断当前是什么原因出错的
    let status = err.response.status
    if (status === 400) {
        Message.error('参数错误')
    }
    if (status === 401) {
        // 登录过期
        Message.error('登录过期,请重新登录')
        router.push('/login')
    }
    if (status === 403) {
        Message.error('没有权限访问')
    }
    if (status === 404) {
        Message.error('请求路径出错')
    }
    if (status === 500) {
        Message.error('服务器出错')
    }
    if (status === 503) {
        Message.error('服务器在维护')
    }
    return Promise.reject(err)
})

export default service