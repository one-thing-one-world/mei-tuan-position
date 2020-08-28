<template>
<div>
  <div class="mainContent ">

    <div class="all ">

      <div class="df a-center all-title">全部分类</div>

      <div class="allList-box">
        <div @mouseenter="appearContent(item,index)" @mouseleave="disappear(item,index)" class="allList-loop df  j-bettween" v-for="(item,index) in allList" :key="index">
          <div class="allImgList-box   ">

            <div class="allImgList-box-pic"><img :src="allImgList[index].imgUrl"></div>

            <div class="allList-text">
              {{item.name}}
            </div>

          </div>
          <div class="right-icon">></div>

          <div v-if="index === number && flag === true" class="all-right-content">
            <div v-for="(item1,index1) in item.child[0].child">

              {{item1}}
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="banner-box ">
      <div class="banner-top">
        <div class="banner">

        </div>
        <div class="freeLife"></div>
        <div class="hello-register"></div>
      </div>
      <div class="banner-bottom">

        <div class="take-hotal"></div>
        <div class="rise-knowledge"></div>
        <div class="im-business"></div>
        <div class="qr-code"></div>

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
      allList: [],
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
      child: [],
      number: '',
      flag: false,

    }
  },
  methods: {
    appearContent(item, index) {
      this.number = index
      this.flag = true

    },
    disappear() {
      this.flag = false

    }

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
.banner-box{
  
} 
.banner-top{
  width: 760px;
  position: relative;
  z-index: 9999999;
  left: 21%;
  height: 236px;
  border: 1px solid red;
}
.banner-bottom{
  width: 760px;
  position: relative;
  z-index: 9999999;
  left: 21%;
  height: 236px;
  border: 1px solid red;
}
.all-right-content {

  position: absolute;
  display: flex;

  align-items: center;
  flex-direction: column;
  left: 101%;
  top: 6px;
  width: 400px;
  height: 482px;
  background: white;
  line-height: 30px;

  z-index: 8888888;
}

.all-title {
  font-weight: 700;
  display: flex;
  height: 32px;
  align-items: center;
}

.right-icon {
  color: #afaaaa;
}

.allList-loop {
  width: 200px;
  display: flex;

  align-items: center;
}

.allImgList-box {
  display: flex;
  align-items: center;

  height: 31px;
}

.allList-box {
  position: relative;
  display: flex;
  flex-direction: column;

}

.allList-text {
  width: 100px;
  white-space: nowrap;
  margin-left: 6px;
  font-size: 14px;
}

.allImgList-box-pic {
  margin-left: 6px;
  width: 14px;
  height: 14px;

}

.allImgList-box-pic img {
  width: 100%;
  height: 100%;
}

.all {
  position: absolute;
  background: #FFFFFF;
  top: -45px;
  width: 200px;
  height: 520px;
  box-shadow: 0 0 3px rgb(209, 206, 206);
}

.mainContent {
  position: relative;
  width: 960px;
  height: 475px;

}
</style>
