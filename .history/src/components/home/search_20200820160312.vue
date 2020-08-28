<template>
<div class="box">
    <div>
      <div >
      <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>

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
      input: ''

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
.box {
  width: 960px;
  height:157px;
}

</style>
