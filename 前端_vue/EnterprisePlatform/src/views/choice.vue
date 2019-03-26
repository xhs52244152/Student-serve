<template>
  <div class="choice">
    <div class="com-box">
      <search></search>
      <product></product>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue"
import Product from "../components/Product.vue"
export default {
  components:{
    Search,
    Product
  }
}
</script>

<style scoped>
.choice{background-color: #fff;border-top: 1px solid #ddd;padding: 20px 0;}
</style>