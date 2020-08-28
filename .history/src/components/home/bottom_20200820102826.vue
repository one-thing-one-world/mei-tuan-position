<template>
<div>
  <div class="box b1">
    this is bottom
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

</style>
