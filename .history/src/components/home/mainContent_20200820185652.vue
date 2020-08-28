<template>
<div>
  <div class="mainContent b1">

    <div class="all b1">

      <div>全部分类</div>

      <div v-for="(item,index) in allList" :key="index">
        <div class="allImgList-box">

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
          imgUrl: "../../assets/img/1.png"
        },
        {
          imgUrl: "../../assets/img/2.png"
        },
        {
          imgUrl: "../../assets/img/3.png"
        },
        {
          imgUrl: "../../assets/img/4.png"
        },
        {
          imgUrl: "../../assets/img/5.png"
        },
        {
          imgUrl: "../../assets/img/6.png"
        },
        {
          imgUrl: "../../assets/img/7.png"
        },
        {
          imgUrl: "../../assets/img/8.png"
        },
        {
          imgUrl: "../../assets/img/9.png"
        },
        {
          imgUrl: "../../assets/img/10.png"
        },
        {
          imgUrl: "../../assets/img/11.png"
        },
        {
          imgUrl: "../../assets/img/12.png"
        },
        {
          imgUrl: "../../assets/img/13.png"
        },
        {
          imgUrl: "../../assets/img/14.png"
        },
        {
          imgUrl: "../../assets/img/15.png"
        },
        {
          imgUrl: "../../assets/img/16.png"
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
