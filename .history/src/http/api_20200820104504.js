//用来封装所有的请求
import service from './index'

export default {
    
    getPosition() {
        return service.get('/position')
    },
   













}