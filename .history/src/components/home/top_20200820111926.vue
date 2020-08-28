<template>
<div>
  <div class="box b1">
    <div class="top-left">

      <div>
      
        <div>
          <i class="iconfont icon-dingwei "></i>
        </div>
        <div>
          {{positionCity}}
        </div>
        <div>切换城市</div>

        <div class="df">
        [<div v-for="(item,index) in reconmendCity" :key="index">
          
          <div name="recommend">
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
      reconmendCity:[],
      positionCity:"",


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

        this.$api.getDetailLocation(JSON.parse(someData).city).then(res1=>{
          this.reconmendCity = res1.data.areas.slice(0,3)
          console.log(this.reconmendCity);
        }).catch(er2r=>{
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
.recommend{
  margin: 0 10px;
}
.box {
  width: 960px;
  height: 40px;
}

.icon-dingwei {
  color: #999999;
}
</style>
