<template>
<div class="box b1">
  <div class="logo-png"><img src="../../assets/logo.png" alt=""></div>
  <div class="">
    <div class="input-box ">

      <el-input placeholder="搜索商家或地点" v-model="input" clearable>
      </el-input>
      <div class="search-icon">
        <div class="search-img-box">
          <img src="../../assets/search.png">
        </div>
      </div>

    </div>
    <div>
      <div class="content-title b1">dfdf</div>
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
.content-title{
 
}
.logo-png {
  position: absolute;
  left: 0;
  top: 26px;
  width: 126px;
  height: 46px;
}

.logo-png img {
  width: 100%;
  height: 100%;
}

.search-img-box {
  width: 24px;
  height: 24px;

}

.search-img-box:hover {
  cursor: pointer;

}

.search-img-box img {
  width: 100%;
  height: 100%;

}

.search-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  height: 40px;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-box {
  width: 470px;
  margin-top: -50px;
  position: relative;
}

.box {
  width: 960px;
  height: 157px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
