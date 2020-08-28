<template>
<div>
  <div class="hostel df a-center b1">
    <div class="hostelTitle">推荐名宿</div>
    <div class="haveStyle">
      <div class="haveStyleItem b1" v-for="(item,index) in haveStyle" :key="index">
        <div> {{item.name}}</div>
        <div class="triangleBox">
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
  position: absolute;
}
.triangle {

  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid white;

}

.haveStyleItem {
  padding: 10px 5px;
  background: chartreuse;
}

.hostelTitle {
  margin-left: 20px;
  margin-right: 20px;
}

.haveStyle {
  display: flex;

}

.hostel {
  width: 960px;
  height: 45px;
}
</style>
