<template>
<div>
  <div class="mainContent ">

    <div class="all ">

      <div class="df a-center all-title">全部分类</div>

      <div class="allList-box">
        <div @mouseenter="appearContent(item,index)" @mouseleave="disappear(item,index)" class="allList-loop df  j-bettween" v-for="(item,index) in allList" :key="index">
          <div class="allImgList-box ">

            <div class="allImgList-box-pic"><img :src="allImgList[index].imgUrl"></div>

            <div class="allList-text">
              {{item.name}}
            </div>

          </div>
          <div class="right-icon">></div>

          <div v-if="index === number && flag === true" class="all-right-content">
            <div v-for="(item1,index1) in item.child[0].child" :key="index1">

              {{item1}}
            </div>
          </div>

        </div>

      </div>

    </div>

    <div class="banner-box ">
      <div class="banner-top">

        <div class="banner">

          <el-carousel height="230px">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
              <img class="swiper-pic" :src="item.imgUrl" alt="">
            </el-carousel-item>
          </el-carousel>

        </div>

        <div class="freeLife">
          <img class="top-bottom" src="../../assets/banner/bottom.jpg" alt="">
        </div>

        <div class="hello-register b1">
          <div><img src="./../../assets/avatar.jpg" alt=""></div>
          <div>hi 你好</div>

          <div class="df a-center j-center">
            <div class="login">
              登录
            </div>
          </div>
          <div class="df a-center j-center">
            <div class="register">注册</div>
          </div>
        </div>

      </div>
      <div class="banner-bottom df">

        <div class="take-hotal">
          <img class="food" src="../../assets/banner/food.jpg" alt="">
        </div>
        <div>
          <img class="food" src="../../assets/banner/food.jpg" alt="">
        </div>
        <div class="im-business">
          <img class="bottom-top" src="../../assets/banner/bottom.jpg" alt="">
        </div>
        <div class="qr-code ">
          <div><img class="qr" src="../../assets/qr.png" alt=""></div>
          <div>手机app手机版本</div>
          <div class="qr-text"><span class="price">1元起</span>吃喝玩乐</div>
        </div>
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
      bannerList: [{
          imgUrl: require("../../assets/banner/food.jpg")
        },
        {
          imgUrl: require("../../assets/banner/hotal.jpg")
        },
        {
          imgUrl: require("../../assets/banner/food.jpg")
        },

      ]

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
.login {
  width: 80px;
  height: 30px;
  background: gray;
  border-radius: ;
}

.hello-register {
  width: 180px;
  height: 210px;
  border: 1px solid red;
  margin: 10px;
  margin-top: 5px;
}

.qr {
  width: 100px;
  height: 100px;
}

.qr-code {
  width: 180px;
  height: 130px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 13px;
  margin: 10px;
  box-shadow: 0 0 2px gray;
  background: white;
}

.bottom-top {
  padding: 5px;
  width: 140px;
  height: 160px;
}

.top-bottom {
  height: 220px;
  width: 140px;
  padding-left: 10px;
}

.banner {
  width: 400px;

}

.swiper-pic {
  width: 400px;
  height: 220px;

}

.food {
  width: 195px;
  height: 160px;
  padding: 5px;
}

.banner-box {
  padding: 5px;
}

.banner-top {
  width: 760px;
  position: relative;
  z-index: 9999999;
  left: 21%;
  height: 226px;

  display: flex;
  padding: 5px;
}

.banner-bottom {
  width: 760px;
  position: relative;
  z-index: 9999999;
  left: 21%;

  display: flex;

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
  height: 26px;
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

  box-shadow: 0 0 3px rgb(209, 206, 206);
}

.mainContent {
  position: relative;
  width: 960px;
  height: 475px;

}
</style>
