<template>
 <div class="hostel">
 <div>推荐名宿</div>
  <div v-for="(item,index) in haveStyle" :key="index">
    <div> {{item}}</div>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       haveStyle:[
         {
           name:"约会聚餐"
         },
         {
           name:"丽人spa"
         },
         {
           name:"电影演出"
         },
         {
           name:"品质出游"
         },
         {
           name:"全部"
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

<style scoped lang='scss'>

</style>