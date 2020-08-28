<template>
<div class="container">
  <div class="box">

    <div class="byProvince df a-center">
      <div>
        按省份选择:
      </div>
      <div class="chooseProvince">
        <el-input readonly v-model="inputProvence"  suffix-icon="el-icon-caret-bottom" placeholder="省份"></el-input>
      </div>
      <div class="chooseCity">
        <el-input readonly :disabled="disableFlag" v-model="inputCity" suffix-icon="el-icon-caret-bottom"  placeholder="城市" ></el-input>
      </div>

      <div class="derecteSearchtext">直接搜索:</div>
      <div class="derecteSearch">
        <el-input readonly v-model="derecteSearch"  placeholder="请输入城市名字或拼音" ></el-input>
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
      derecteSearch:'',
      disableFlag:true,

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
.derecteSearchtext{
  margin-left: 70px;
  margin-right:20px;
}
.inp {
  color: black !important;
}

.chooseProvince {
  width: 18%;
  margin-left: 20px;
  margin-right: 20px;

}
.derecteSearch{
   width: 18%;
}
.chooseCity {
  width: 18%;
}

.box {
  box-shadow: 0 0 5px gray;
  padding: 20px;
}

.byProvince {

  width: 960px;

}
</style>
