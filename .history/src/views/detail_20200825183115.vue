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
          x:104.034005,
          y:30.622415,
    }
  },
  methods: {
    clickMap() {

      Map.on('click', function (e) {
        this.x = e.lnglat.getLng()  
        this.y = e.lnglat.getLat()
      });

    },
    fn() {
      var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 11, //级别
        center: [`${this.x}`, `${this.y}`], //中心点坐标
        viewMode: '3D', //使用3D视图,

      });
      let features = ['bg', 'road', 'building', 'point']
      Map.setFeatures(features);
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
