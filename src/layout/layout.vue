<template>
  <el-container>
    <el-header>
      <the-top-bar></the-top-bar>
    </el-header>
    <el-container class="container">
      <router-view></router-view>
    </el-container>
  </el-container>
</template>


<script>
import TheTopBar from "../page/TheTopBar";
export default {
  components: {
    TheTopBar
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  padding: 0px;
  position: fixed;
  width: 100%;
  z-index: 10000;
}

.container {
  position: absolute;
  top: 60px;
}
</style>
