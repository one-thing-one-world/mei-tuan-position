<template>
<div>
  <div class="search">
    <search></search>
  </div>
  <div>

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
    fn(){
      var map = new AMap.Map('container', {
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
    });
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

<style scoped lang='scss'>
  #container {
        width: 1200px;
        height: 600px;
      }
.search{
  display:flex;
  justify-content:center;
}
</style>
