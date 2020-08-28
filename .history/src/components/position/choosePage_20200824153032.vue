<template>
<div class="container">
  <div class="box">

    <div class="byProvince df  a-center">
      <div>
        按省份选择:
      </div>
      <div class="chooseProvince">
        <el-input readonly v-model="inputProvence" suffix-icon="el-icon-caret-bottom" placeholder="省份"></el-input>
        <div class="chooseProvinceDetail b1">
          <div>省份</div>
          <div class="df j-around">
            <div>
              <div v-for="(item,index) in provinceList.slice(0,13)" :key="index">
                {{item.name}}
              </div>
            </div>
            <div>
              <div v-for="(item,index) in provinceList.slice(13,26)" :key="index">
                {{item.name}}
              </div>
            </div>
             <div>
              <div v-for="(item,index) in provinceList.slice(26)" :key="index">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chooseCity">
        <el-input readonly :disabled="disableFlag" v-model="inputCity" suffix-icon="el-icon-caret-bottom" placeholder="城市"></el-input>
      </div>

      <div class="derecteSearchtext">直接搜索:</div>
      <div class="derecteSearch">
        <el-input readonly v-model="derecteSearch" placeholder="请输入城市名字或拼音"></el-input>
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

      inputProvence: "",
      inputCity: "",
      derecteSearch: '',
      disableFlag: true,
      provinceList: [],

    }
  },
  methods: {
    getProvinceData() {
      this.$api.getAllProvince().then(res => {

        this.provinceList = res.data.province
        this.provinceList.map((item,index) =>{
          let huizu = '回族自治区'
          item.map((item,index)=>{
            
            if(item.name.includes('huizu')){
              
            }
          })
        })
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }

  },
  mounted() {
    this.getProvinceData()

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.chooseProvinceDetail{
  font-size: 12px;
}
.derecteSearchtext {
  margin-left: 70px;
  margin-right: 20px;
}

.inp {
  color: black !important;
}

.chooseProvince {
  width: 24%;
  margin-left: 20px;
  margin-right: 20px;

}

.derecteSearch {
  width: 24%;
}

.chooseCity {
  width: 24%;
}

.box {
  box-shadow: 0 0 5px gray;
  padding: 20px;
}

.byProvince {

  width: 960px;

}
</style>
