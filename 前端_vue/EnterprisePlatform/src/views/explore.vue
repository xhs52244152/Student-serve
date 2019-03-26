<template>
  <div class="explore">
    <div class="com-box">
      <search></search>
      <investor></investor>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue"
import Investor from "../components/Investor.vue"
export default {
  components:{
    Search,
    Investor
  }
}
</script>

<style scoped>
.explore{background-color: #fff;border-top: 1px solid #ddd;padding: 20px 0;}
</style>