<template>
<div class="box">
  <div>
    <div class="input-box">
      <el-input placeholder="请输入内容" v-model="input" clearable>
      </el-input>
      <div class="search-icon">
      
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
.search-icon{
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-box{
  width: 470px;
}
.box {
  width: 960px;
  height: 157px;
}
</style>
