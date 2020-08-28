<template>
<div class="box ">
  <div class="logo-png">
    <img src="../../assets/logo.png" alt />
  </div>
  <div class>
    <div class="input-box">
      <el-input placeholder="搜索商家或地点" @change="inputSomething" @focus="focusSomeThing" @blur="lostFocus" v-model="inputs"  clearable></el-input>
      <div class="searchSomething" v-if="flag1">ffffff</div>
      <div class="search-icon">
        <div class="search-img-box">
          <img src="../../assets/search.png" />
        </div>
      </div>
    </div>
    <div>
      <div class="content-title">
        <div v-for="(item,index) in contentTitleList" :key="index">
          <div ref="title" @mouseenter="changeColor(index)" @mouseleave="returnColor(index)" class="content-title-item">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  name: "",
  props: {},
  components: {},
  data() {
    return {
        inputs:'',
      flag1:false,
      num: "",
      flag: false,
      input: "",
      textColor: "",
      contentTitleList: [{
          name: "美团外卖",
        },
        {
          name: "猫眼电影",
        },
        {
          name: "美团酒店",
        },
        {
          name: "名宿/公寓",
        },
        {
          name: "商家入驻",
        },
        {
          name: "美团公益",
        },
      ],
    };
  },
  methods: {
    lostFocus(){
      console.log("lostfocus");
    },
    inputSomething(value){
      console.log(value);
    },
    focusSomeThing(){
        this.flag1 = true
    },
    changeColor(index) {
      let arr = ["red", "yellow", "pink", "blue"];
      let n = Math.floor(Math.random() * arr.length + 1) - 1;
      this.contentTitleList.map((item) => {
        this.$set(item, "color", arr[n]);
      });
      console.log(this.$refs.title)
      this.$refs.title[index].style.color = arr[n]

    },
    returnColor(index) {
      this.$refs.title[index].style.color = '#000'

    },
  },
  mounted() {},
  watch: {
    
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.history{
  width: 400px;
  height: 400px;
  background: red;
  position: absolute;
  top: 40px;
}
.searchSomething{
  position: absolute;
  z-index: 99999999999;
  top: 42px;
  left:0;
  width: 390px;
  height: 200px;
  border:1px solid red;
}

.content-title-item {
  padding: 0 10px;
}

.content-title {
  position: absolute;
  bottom: 4px;
  z-index: 2222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;

  height: 30px;
  left: 50%;
  margin-left: -256px;
}

.content-title:hover {
  cursor: pointer;
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
