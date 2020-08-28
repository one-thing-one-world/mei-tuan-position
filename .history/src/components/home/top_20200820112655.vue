<template>
<div>
  <div class="box b1">
    <div class="top-left">

      <div class="df b1">

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

      </div>

    </div>
    <div class="top-right"></div>
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
.swichCity{
  padding: 2px;
  background: #F8F8F8;
}
.recommend {
  margin: 0 6px;
}

.box {
  width: 960px;
  height: 40px;
  font-size: 14px;
}

.icon-dingwei {
  color: #999999;
}
</style>
