<template>
<div>
  <div class="mainContent b1">

    <div class="all b1">

      <div>全部分类</div>

      <div v-for="(item,index) in allImgList" :key="index">
        <div class="allImgList-box">
     
          <img :src="allImgList[index].imgUrl">
       
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
      
      allImgList: [{
          imgUrl: require("../../assets/img/1.png")
        },
        {
          imgUrl: require("../../assets/img/2.png")
        },
        {
          imgUrl: require("../../assets/img/3.png")
        },
        {
          imgUrl: require("../../assets/img/4.png")
        },
        {
          imgUrl: require("../../assets/img/5.png")
        },
        {
          imgUrl: require("../../assets/img/6.png")
        },
        {
          imgUrl: require("../../assets/img/7.png")
        },
        {
          imgUrl: require("../../assets/img/8.png")
        },
        {
          imgUrl: require("../../assets/img/9.png")
        },
        {
          imgUrl: require("../../assets/img/10.png")
        },
        {
          imgUrl: require("../../assets/img/11.png")
        },
        {
          imgUrl: require("../../assets/img/12.png")
        },
        {
          imgUrl: require("../../assets/img/13.png")
        },
        {
          imgUrl: require("../../assets/img/14.png")
        },
        {
          imgUrl: require("../../assets/img/15.png")
        },
        {
          imgUrl: require("../../assets/img/16.png")
        },

      ],

    }
  },
  methods: {

  },
  mounted() {
    this.$api.getMenu().then(res => {
      this.allList = res.data.menu

      console.log(this.allList);
    }).catch(err => {
      console.log(err);
    })

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.allImgList-box{
  width:14px;
  height:14px;

}
.allImgList-box img{
  width:100%;
  height:100%;
}
.all {
  position: absolute;
  background: #FFFFFF;
  top: -45px;
  width: 200px;
  height: 520px;
  box-shadow: 0 0 3px rgb(209, 206, 206);
}

.banner {}

.mainContent {
  position: relative;
  width: 960px;
  height: 475px;

}
</style>
