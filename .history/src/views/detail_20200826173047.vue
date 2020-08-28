<template>
<div>
  <div class="search">
    <search></search>
  </div>
  <div class="df j-center">

    <div id="container"></div>

  </div>
</div>
</template>

<script>
import search from '../components/position/search'
import axios from 'axios'
export default {
  name: '',
  props: {},
  components: {
    search,

  },
  data() {
    return {
      lng: '',
      lat: '',
      cities : "成都",

    }
  },
  methods: {
    getLatitude(){
     axios.get(`https://restapi.amap.com/v3/geocode/geo?address=北京市朝阳区阜通东大街6号&key=f6e168c1e85016dea3d54f26cf026e24`).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },

    doPositionCity() {

      let _this = this;

      var map = new AMap.Map('container', {
        resizeEnable: true
      });
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: 'RB', //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点

        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function (status, result) {

           _this.lng = result.position.lng
           _this.lat = result.position.lat

          console.log(result);
          if (status == 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        });
      });
      //解析定位结果
      function onComplete(data) {
       
      }
      //解析定位错误信息
      function onError(data) {
        
      }

    },
    getDotPosition(){
      
    }

  },
  mounted() {
    this.doPositionCity()
    this.getLatitude()

  },
  watch: {

  },
  computed: {

    positionCity() {
      return this.$store.state.positionCity
    }

  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 400px;
  height: 400px;
}

.search {
  display: flex;
  justify-content: center;
}
</style>
