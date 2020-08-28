<template>
<div>
  
 <div class="search"> <search></search></div>

</div>
</template>

<script>
import search from '../components/home/search'
export default {

  name: 'home',
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
.search{
  width:100%;
  display:flex;
  justify-content:center;
}
</style>
