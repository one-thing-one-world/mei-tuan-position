<template>
<div>
  <div class="box df a-center j-bettween  ">
    <div class="top-left">

      <div class="df  a-center">

        <div>
          <i class="iconfont icon-dingwei "></i>
        </div>
        <div>
          {{positionCity}}
        </div>
        <div class="swichCity">切换城市</div>

        <div class="df">
          [<div class="recommend" v-for="(item,index) in reconmendCity" :key="index">

            <div>
              {{item.type}}
            </div>

          </div>]
        </div>
        <div class="df login-box">
          <div class="login">立即登录</div>
          <div class="register">
            注册
          </div>
        </div>

      </div>

    </div>
    <div class="top-right df">
      <div class="right-item" @mouseenter="enterItem(index)" @mouseleave="leaveItem(index)" v-for="(item,index) in rightList" :key="index">
         <div  v-if="number===index" class="white-box"></div>
        <div class="right-item1"> {{item.name}}</div>
        <div v-if="number===index" class="hover-box">
          <div v-if="index===0" class="index0">
           

            <div class="item1">
              我的订单
            </div>
            <div class="item1">
              我的收藏
            </div>
            <div class="item1">
              抵用卷
            </div>
            <div class="item1">
              账户配置
            </div>

          </div>
          <div v-if="index===1">

          </div>
          <div v-if="index===2" class="index2">

            <div class="white-box"></div>

            <div class="item1">
              美团餐饮商户中心
            </div>
            <div class="item1">
              登录商家中心
            </div>
            <div class="item1">
              美团智能收银
            </div>
            <div class="item1">
              我想合作
            </div>
            <div class="item1">
              手机免费开店
            </div>
            <div class="item1">
              餐饮代理商招募
            </div>
            <div class="item1">
              商家申请开票
            </div>
            <div class="item1">
              免费合作美团排队
            </div>

          </div>
          <div v-if="index===3">

            index4

          </div>
          <div v-if="index===4">
            index5
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {

  },
  data() {
    return {
      number: '',
      flag: false,
      reconmendCity: [],
      positionCity: "",
      rightList: [{
          name: '我得美团'
        },
        {
          name: '手机APP'
        },
        {
          name: '商家中心'
        },
        {
          name: "美团规则"
        },
        {
          name: "网站导航"
        }
      ]

    }
  },
  methods: {
    enterItem(index) {
      this.number = index
    },
    leaveItem(index) {
      this.number = ""
    }

  },
  mounted() {
    this.$api.getPosition().then(
      res => {
        console.log(res)
        let someData = res.data
        this.positionCity = JSON.parse(someData).city

        this.$api.getDetailLocation(JSON.parse(someData).city).then(res1 => {
          this.reconmendCity = res1.data.areas.slice(0, 3)
          console.log(this.reconmendCity);
        }).catch(er2r => {
          console.log(err2);
        })
      }
    ).catch(err => {
      console.log(err)
    })

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.index0,
.index2 {
  position: relative;
  box-shadow: 0 0 2px gray;
}

.white-box {
  position: absolute;
  top: 36px;
  z-index: 999;
  width: 100%;
  height: 10px;

  background: white;
  
}
.right-item:nth-child(0) .right-item1:hover{
cursor: pointer;
  color: orange;
}


.item1 {
  height: 40px;
  padding: 0 10px;
  font-size: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item1:hover {
  color: orange;
  cursor: pointer;

}

.right-item {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  position: relative;

}

.hover-box {
  position: absolute;
  right: 0;

  top: 40px;
}

.right-item:hover {
  box-shadow: 0 0 2px gray;
  background: white;

}

.swichCity:hover,
.recommend:hover,
.login-box:hover {
  cursor: pointer;
  color: orange;

}

.login {
  color: rgb(255, 166, 1);
  margin-right: 10px;
  margin-left: 20px;
}

.swichCity {
  padding: 2px;
  background: #f0ecec;
  border-radius: 6px;
  margin: 0 4px;
}

.recommend {
  margin: 0 6px;
}

.box {
  width: 960px;
  height: 40px;
  font-size: 12px;
  color: #999999;
}

.icon-dingwei {
  color: #999999;
}
</style>
