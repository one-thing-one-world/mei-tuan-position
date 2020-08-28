<template>
<div>

  <div class="search">
    <search></search>
  </div>
  <div class="mainContent">
    <mainContent></mainContent>
  </div>
  <div class="hostel">
    <hostel></hostel>
  </div>

  

</div>
</template>

<script>
import search from '../components/home/search'
import mainContent from '../components/home/mainContent'
import hostel from '../components/home/hostel'
export default {

  name: 'home',
  props: {},
  components: {
    search,
    mainContent,
    hostel,

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
.mainContent,
.search {
  width: 100%;
  display: flex;
  justify-content: center;
}
.mainContent{
  background: #F8F8F8;
}
</style>
