<template>
<div class="container">
  <div class="box">

    <div class="byProvince df  a-center">
      <div>
        按省份选择:
      </div>

      <div class="chooseProvince">
        <el-input @focus="appearFlag" @blur="loseBlur" readonly v-model="inputProvence" suffix-icon="el-icon-caret-bottom" placeholder="省份"></el-input>
        <div v-if="inputFlag.seletProvinceFlag" class="chooseProvinceDetail">
          <div class="triangle"></div>
          <div class="triangleWhite"></div>
          <div class="provinceTitle">省份</div>
          <div class="df j-around">
            <div>
              <div ref="provinceList" :class="{'orangeFlag':orangeFlag===index}" class="provinceList-item" @click="seletProvince(item,index)" v-for="(item,index) in provinceList.slice(0,13)" :key="index">
                {{item.name}}
              </div>
            </div>
            <div>
              <div ref="provinceList" :class="{'orangeFlag':orangeFlag===index+30}" class="provinceList-item " @click="seletProvince(item,index+30)" v-for="(item,index) in provinceList.slice(13,26)" :key="index">
                {{item.name}}
              </div>
            </div>
            <div>
              <div class="provinceList-item" :class="{'orangeFlag':orangeFlag===index+100}" @click="seletProvince(item,index+100)" v-for="(item,index) in provinceList.slice(26)" :key="index">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chooseCity">

        <el-input readonly :disabled="disableFlag" v-model="inputCity" suffix-icon="el-icon-caret-bottom" placeholder="城市"></el-input>
        <div v-if="inputFlag.seletCityFlag" class="chooseCityDetail b1">
          <div class="triangleCity"></div>
          <div class="triangleWhiteCity"></div>
          <div class="provinceTitle">城市</div>
          <div class="">

            <div class="cityDeatail b1">
              你好啊
            </div>
            <div class="cityDeatail b1">
              你好啊
            </div>
            <div class="cityDeatail b1">
              你好啊
            </div>

          </div>
        </div>

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
      timer: "",
      inputFlag: {
        seletProvinceFlag: false,
        seletCityFlag: true,

      },
      orangeFlag: "",
      cityList: [],

    }
  },
  methods: {

    group(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
      }
      return newArray;
    },

    loseBlur() {
      this.timer = setTimeout(() => {
        this.inputFlag.seletProvinceFlag = false
        if (!this.inputFlag.seletProvinceFlag) {

          clearTimeout(this.timer)

        }
      }, 100);

    },

    appearFlag() {

      this.inputFlag.seletProvinceFlag = true

    },

    seletProvince(item, index) {

      this.orangeFlag = index
      this.inputProvence = item.name
      this.inputFlag.seletProvinceFlag = false
      this.disableFlag = false
      // this.cityList = 
      let id = item.id * 1
      this.$api.getAllProvinceCity(id).then(res => {
        console.log(res);
        this.cityList = res.data.city
        console.log(this.cityList);
      }).catch(err => {
        console.log(err);
      })

    },

    getProvinceData() {
      this.$api.getAllProvince().then(res => {

        this.provinceList = res.data.province

        // this.provinceList.map((item, index) => {
        //   let huizu = '回族自治区'

        //   if (item.name.includes('回族自治区')) {
        //     item.name = item.name.slice(0, 2)
        //   } else if (item.name.includes('维吾尔自治区')) {
        //     item.name = item.name.slice(0, 2)
        //   } else if (item.name.includes('特别行政区')) {
        //     item.name = item.name.slice(0, 2)
        //   } else if (item.name.includes('内蒙古自治区')) {
        //     item.name = item.name.slice(0, 3)
        //   } else if (item.name.includes('自治区')) {
        //     item.name = item.name.slice(0, 2)
        //   }

        // })
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
.cityDeatail {
  padding: 10px;
  white-space: nowrap;
  margin: 0px 10px;
  font-size: 12px;
}

.chooseCityBox {
  width: 100%;
}

.chooseCityDetail {
  position: absolute;
  top: 50px;
  padding: 6px;
}

.orangeFlag {
  background: orange;
}

.provinceList-item {
  line-height: 24px;
  padding: 0px 8px;
  border-radius: 10px;
}

.provinceList-item:hover {
  background: rgb(211, 206, 206);
  cursor: pointer;
}

.triangle {
  position: absolute;
  top: -3%;
  left: 20%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid gray;

}

.triangleCity {
  position: absolute;
  top: -6.4%;
  left: 20%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid gray;
}

.triangleWhiteCity {
  position: absolute;
  top: -5.4%;
  left: 20%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid white;
}

.triangleWhite {
  position: absolute;
  top: -2.8%;
  left: 20%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid white;
}

.chooseProvinceDetail {
  width: 120%;
  position: absolute;
  top: 50px;
  left: 0;
  font-size: 12px;
  color: #666666;
  background: white;
  box-shadow: 0 0 2px gray;
}

.provinceTitle {
  margin-left: 8px;
  color: gray;
  font-size: 16px;
  line-height: 24px;

}

.derecteSearchtext {
  margin-left: 70px;
  margin-right: 20px;
}

.inp {
  color: black !important;
}

.chooseProvince {
  width: 21%;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;

}

.derecteSearch {
  width: 21%;
}

.chooseCity {
  width: 21%;
  position: relative;
}

.box {
  box-shadow: 0 0 5px gray;
  padding: 20px;
  font-size: 14px;
}

.byProvince {

  width: 960px;

}
</style>
