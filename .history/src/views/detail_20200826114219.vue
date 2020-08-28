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
      x: 104.034005,
      y: 30.622415,
    }
  },
  methods: {

    positionFunction() {
      let _this = this 
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
          if (status == 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        });
      });
      //解析定位结果
      function onComplete(data) {
        console.log(data);
        // console.log(data);
        // document.getElementById('status').innerHTML = '定位成功'
        // var str = [];
        // str.push('定位结果：' + data.position);
        // str.push('定位类别：' + data.location_type);
        // if (data.accuracy) {
        //   str.push('精度：' + data.accuracy + ' 米');
        // } //如为IP精确定位结果则没有精度信息
        // str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
        // document.getElementById('result').innerHTML = str.join('<br>');
      }
      //解析定位错误信息
      function onError(data) {
        // document.getElementById('status').innerHTML = '定位失败'
        // document.getElementById('result').innerHTML = '失败原因排查信息:' + data.message;
      }
    },
    fn() {

      var marker, map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13
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

      });
      marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [116.406315, 39.908775],
        offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(map);

    }

  },
  mounted() {
    this.positionFunction()
    console.log(this.positionCity);

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
