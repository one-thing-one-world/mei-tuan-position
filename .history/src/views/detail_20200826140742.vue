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
      lng:'',
      lat:'',

    }
  },
  methods: {
    fn() {
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
          console.log(result.position);
          _this.lng = result.position.lng
          _this.lat = result.position.lat
        
        });
      });
      //解析定位结果
      function onComplete(data) {
        console.log(data);
        console.log(data.position);

      }
      //解析定位错误信息
      function onError(data) {

      }
    },
    fns(){

      var marker, map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13
    });

    // 实例化点标记
    function addMarker() {
        marker = new AMap.Marker({
            icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            position: [116.406315,39.908775],
            offset: new AMap.Pixel(-13, -30)
        });
        marker.setMap(map);
    }
    function updateIcon() {
    
        marker.setIcon('//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png')
    }

    function updateContent() {

        if (!marker) {
            return;
        }

        // 自定义点标记内容
        var markerContent = document.createElement("div");

        // 点标记中的图标
        var markerImg = document.createElement("img");
        markerImg.className = "markerlnglat";
        markerImg.src = "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png";
        markerContent.appendChild(markerImg);

        // 点标记中的文本
        var markerSpan = document.createElement("span");
        markerSpan.className = 'marker';
        markerSpan.innerHTML = "Hi，我被更新啦！";
        markerContent.appendChild(markerSpan);

        marker.setContent(markerContent); //更新点标记内容
        marker.setPosition([116.391467, 39.927761]); //更新点标记位置
    }

    // 清除 marker
    function clearMarker() {

        if (marker) {
            marker.setMap(null);
            marker = null;
        }
    }

    }

  },
  mounted() {
    this.fn()
    console.log(this.positionCity);

  },
  watch: {

  },
  computed: {
   
     positionCity(){
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
