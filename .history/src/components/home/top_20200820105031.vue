<template>
<div>
  <div class="box b1">
    <div class="top-left">

      <div>
        <div>
          <i class="iconfont icon-dingwei "></i>
        </div>
        <div>
          北京
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="top-right"></div>
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

    }
  },
  methods: {

  },
  mounted() {
    this.$api.getPosition().then(
      res => {
        console.log(res)
        this.$api.getDetailLocation().then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      }
    ).catch(err => {
      console.log(err)
    })

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 960px;
  height: 40px;
}

.icon-dingwei {
  color: #999999;
}
</style>
