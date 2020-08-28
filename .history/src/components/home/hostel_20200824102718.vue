<template>
<div>
  <div class="hostel df a-center ">
    <div class="hostelTitle">推荐名宿</div>
    <div class="haveStyle">
      <div class="haveStyleItem" @mouseleave="triangleMouseLeave(item,index)" @mouseenter="triangleMouseEneter(item,index)" v-for="(item,index) in haveStyle" :key="index">
        <div> {{item.name}}</div>
        <div v-if="index===triangleFlag" class="triangleBox ">
          <div class="triangle"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="hostelContent">
  
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
      haveStyle: [{
          name: "约会聚餐",
          title: "美食"
        },
        {
          name: "丽人spa",
          title: "丽人"
        },
        {
          name: "电影演出",
          title: "电影"
        },
        {
          name: "品质出游",
          title: "旅游"
        },
        {
          name: "全部",
          title: "景点"
        }
      ],
      triangleFlag: -1,
      hostelContent:[
        
      ],

    }
  },
  methods: {
    triangleMouseEneter(item, index) {
      this.triangleFlag = index
      console.log(item.name);
      this.$api.getKeyWordSearch(this.positionCity, item.title).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    triangleMouseLeave(item, index) {
      this.triangleFlag = -1
    }

  },
  mounted() {

  },
  watch: {

  },
  computed: {
    positionCity() {
      return this.$store.state.positionCity
    }

  }
}
</script>

<style lang="scss" scoped>
.triangleBox {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
}

.triangle {

  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 14px solid white;

}

.haveStyleItem {
  position: relative;
  padding: 15px 10px;

}

.haveStyleItem:hover {
  cursor: pointer;
}

.hostelTitle {
  margin-left: 20px;
  margin-right: 20px;
}

.haveStyle {
  display: flex;

}

.hostel {
  background: #F2BE47;
  width: 960px;
  height: 45px;
}
</style>
