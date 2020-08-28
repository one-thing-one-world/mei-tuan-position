<template>
<div class="container">
  <div class="box">

    <div class="byProvince df a-center">
      <div>
        按省份选择:
      </div>
      <div class="chooseProvince">
        <el-input readonly v-model="inputProvence" suffix-icon="el-icon-caret-bottom" placeholder="省份"></el-input>
      </div>
      <div class="chooseCity">
        <el-input readonly v-model="inputCity" suffix-icon="el-icon-caret-bottom"  placeholder="城市" ></el-input>
      </div>

      <div>直接搜索</div>
      <div class="chooseCity">
        <el-input readonly v-model="inputCity" suffix-icon="el-icon-caret-bottom"  placeholder="城市" ></el-input>
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

      inputProvence: "",
      inputCity: "",

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
.inp {
  color: black !important;
}

.chooseProvince {
  width: 22%;

}

.chooseCity {
  width: 22%;
}

.box {
  box-shadow: 0 0 5px gray;
  padding: 20px;
}

.byProvince {

  width: 960px;

}
</style>
