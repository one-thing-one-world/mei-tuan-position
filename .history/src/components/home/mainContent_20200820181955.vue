<template>
<div>
  <div class="mainContent b1">

    <div class="all b1">
          <div>全部分类</div>
          <div v-for="(item,index) inallList" :key="index">
        
          </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {

  },
  data() {
    return {
      allList:[],

    }
  },
  methods: {


  },
  mounted() {
    this.$api.getMenu().then(res=>{
      this.allList =  res.data.menu
      console.log(this.allList);
    }).catch(err=>{
      console.log(err);
    })

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.all {
  position: absolute;
  background: #FFFFFF;
  top: -45px;
  width: 200px;
  height: 520px;
  box-shadow: 0 0 3px rgb(209, 206, 206);
}

.banner {}

.mainContent {
  position: relative;
  width: 960px;
  height: 475px;
  
}
</style>
