<template>
<div>
  <div class="hostel b1">
    <div>推荐名宿</div>
    <div class="haveStyle">
      <div v-for="(item,index) in haveStyle" :key="index">
        <div> {{item.name}}</div>
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
.haveStyle{
  display: flex;

}
.hostel {
  width: 900px;
  height: 45px;
}
</style>
