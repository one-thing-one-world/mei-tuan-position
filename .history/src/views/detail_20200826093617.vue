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
export default {
  name: '',
  props: {},
  components: {
    search,

  },
  data() {
    return {
    
    }
  },
  methods: {
    fn() {

      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete(data) {
        
        }

        function onError(data) {
          // 定位出错
        }
      })
    }

  },
  mounted() {
    this.fn()

  },
  watch: {

  },
  computed: {

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
