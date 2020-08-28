<template>
<div class="box">
  <div>
    <div class="input-box">
      <el-input placeholder="请输入内容" v-model="input" clearable>
      </el-input>
      <div class="search-icon">
        <div class="search-img-box">
        <img src="../../assets/search.png">
        </div>
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
.search-img-box{
  width:24px;
  height:24px;

}
.search-img-box img{
width:100%;
height:100%;
  
}
.search-icon{
  position:absolute;
  right:0;
  top:0;
  width: 80px;
  height: 42px;
  background:orange;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-box{
  width: 470px;
  position:relative;
}
.box {
  width: 960px;
  height: 157px;
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>
