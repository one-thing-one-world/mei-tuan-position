//用来封装所有的请求
import service from './index'

export default {
    
    getPosition() {
        return service.get('/position')
    },
    getDetailLocation(name){
        return service.get(`/crumbs?city=${name}`)
    },
    getMenu(){
       return service.get(`/menu`) 
    },
    getSearchAdvice(city,keyword){
        return service.get(`/searchTop?city=${city}&input=${keyword}`)
    },
   getKeyWordSearch(city,keyword){
       return service.get(`/results?city=${city}&keyword=${keyword}`)
   },
   getAllProvince(){
       return service.get(`/province`)
   }













}