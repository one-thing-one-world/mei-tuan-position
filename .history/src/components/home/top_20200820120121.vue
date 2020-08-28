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
      <div class="right-item" v-for="(item,index) in rightList" :key="index">
        <div> {{item.name}}</div>
        <div class="hover-box">
          
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
.right-item {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

}

.right-item:hover {
  box-shadow: 0 0 2px gray;
  background: white;
  cursor: pointer;
  color: orange;
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
