<template>
<div class="container">
  <div class="top">
    <top></top>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="bottom">
    <bottom></bottom>
  </div>
</div>
</template>

<script>
import top from '../components/home/top'
import bottom from '../components/home/bottom'
export default {
  name: '',
  props: {},
  components: {
    top,
    bottom,

  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>


.container {
  width: 100%;
}

.top {
  background: #F8F8F8;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom{
   background: #F8F8F8;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
