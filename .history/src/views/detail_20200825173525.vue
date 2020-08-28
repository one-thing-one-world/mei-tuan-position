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

  },
  mounted() {

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
