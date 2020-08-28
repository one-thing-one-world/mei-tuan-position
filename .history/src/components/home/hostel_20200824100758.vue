<template>
<div>
  <div class="hostel df a-center b1">
    <div class="hostelTitle">推荐名宿</div>
    <div class="haveStyle">
      <div class="haveStyleItem " v-for="(item,index) in haveStyle" :key="index">
        <div> {{item.name}}</div>
        <div class="triangleBox b1">
          <div class="triangle"></div>
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
      haveStyle: [{
          name: "约会聚餐"
        },
        {
          name: "丽人spa"
        },
        {
          name: "电影演出"
        },
        {
          name: "品质出游"
        },
        {
          name: "全部"
        }
      ]

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
.triangleBox{
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
