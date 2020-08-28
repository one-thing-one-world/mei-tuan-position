//模块化  导入    导出   export defoult  只能导出一次 export  可以到处多次
  //在main.js中引入 ：        import utils from './utils'    Vue.prototype.$utils =utils
 
// 在这里引用vue   ：import Vue from 'vue'  

//还有需要使用的组件也要引入
import Vue from 'vue'
// import { Dialog } from 'vant'
export default {
  // 是否登录的模块化
  checkLogin(next) {
    Vue.prototype.$checkLogin = (next) => {
      if (!localStorage.user) {
        Dialog.confirm({
          title: '系统检测到您现在没有登陆',
          message: '是否立即前往登录/注册页面',
        })
        return false
      } else {
        next()
      }
    }
  },
  // 最近浏览模的块化
  browse(item) {  
    // 判断本地有没有最近浏览的数组       this.$utils.browse(整个点击商品的所有信息(index))
    // 比如存储fool 的所有最近浏览(跳转到详情就算)  this.$utils.browse(this.floor1[index])  或者:this.$utils.browse(this.item)
    if(!localStorage.browse){
      let arr = []
      arr.push(item)
      localStorage.setItem('browse',JSON.stringify(arr))
    }else{
      let arr = JSON.parse(localStorage.browse)
      arr.push(item)
      localStorage.setItem('browse',JSON.stringify(arr))
    }
},
// 收藏的摸块化
// 这个方法名必须跟 点击收藏的方法名一摸一样   
//也需要在 收藏的方法里面  this.$utils.collect(this.goodsDetail)  （是需要的信息）
collect(item) {  
  // 判断本地有没有最近浏览的数组
  if(!localStorage.collect){  //如果没有存储的 collect
    let arr = []              //自己定义一个
    arr.push(item)            //并且把点击收藏的 都放在 定义的数组里面
    localStorage.setItem('collect',JSON.stringify(arr))  //存起来
  }else{                      //如果有存起来的 collect
    let arr = JSON.parse(localStorage.collect)   //也是定义隔空数组把 collect 存起来
    arr.push(item)            //并且把之后点击收藏的也放在 定义的数组里面
    localStorage.setItem('collect',JSON.stringify(arr)) //存起来
  }
},

/**
 * 搜索关键词高亮显示
 * @param String str 要替换的所有内容   item.name
 * @param String value 搜索框里面的内容   this.inputs
 * @return Function 替换后的内容
 */// map循环  item => (item.name = this.$utils.keyWord(item.name,this.inputs))
keyWord(){   // 使用： this.$utils.keyWord 
  let keyWord = (str, value) => {
    let replaceReg = new RegExp(value, 'g');
    let replaceString = `<span style='color:red'>${value}</span>`
    str = str.replace(replaceReg, replaceString);
    return str
  }
}
// 已经改好的 所以以后用取名字 直接跟上面的keyWord一样就不用改动 
// this.searchlist.map(item => {
//   let replaceReg = new RegExp(this.inputs, "g");
//   let replaceString = `<span style='color:red'>${this.inputs}</span>`;
//   item.name = item.name.replace(replaceReg, replaceString);
//   return item.name;
// });



}
// export function checkLogin() {

// }

// export function addViews() {}