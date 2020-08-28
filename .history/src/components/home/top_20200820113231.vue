<template>
<div>
  <div class="box df a-center  b1">
    <div class="top-left">

      <div class="df b1 a-center">

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
        <div class="df">
          <div class="login">立即登录</div>
          <div class="register">
            注册
          </div>
        </div>

      </div>

    </div>
    <div class="top-right r1"></div>
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
.login{
  color: orange;
  margin-right: 10px;
  margin-left: 20px;
}
.swichCity {
  padding: 2px;
  background: #e7e6e6;
  border-radius: 6px;
  margin: 0 4px;
}

.recommend {
  margin: 0 6px;
}

.box {
  width: 960px;
  height: 40px;
  font-size: 14px;
  color: ;
}

.icon-dingwei {
  color: #999999;
}
</style>
