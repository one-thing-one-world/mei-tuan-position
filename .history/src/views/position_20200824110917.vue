<template>
 <div>
<div class="search">
<search></search>
</div>

<div>
<div class="choosePage"><choosePage></choosePage></div>
</div>

 </div>
</template>

<script>
import search from '../components/position/search'
import choosePage from '../components/position/choosePage'
 export default {
   name: '',
   props: {
   },
   components: {
     search,
     choosePage,

   },
   data () {
     return {

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
.search{
  width:100%;
  display:flex;
  justify-content:center;
}
.choosePage{
   width:100%;
  display:flex;
  justify-content:center;
}
</style>