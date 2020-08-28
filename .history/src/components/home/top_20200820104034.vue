<template>
<div>
  <div class="box b1">
    <div class="top-left">
    <div>
    <i class="iconfont icon-dingwei "></i>
    </div>
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
    this.$api.getprovince().then(
      res => {
        console.log(res)
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
.icon-dingwei{
  color:#999999;
}

</style>
