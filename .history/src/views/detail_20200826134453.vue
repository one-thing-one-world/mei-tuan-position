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
    

  },
  mounted() {
    this.fn3()
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
