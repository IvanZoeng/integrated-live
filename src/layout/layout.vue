<template>
  <el-container style="height: 500px; border: 1px solid #eee">
      <el-header>
          <the-top-bar></the-top-bar>
      </el-header>
      <router-view></router-view>
  </el-container>
</template>


<script>
import TheTopBar from '../page/TheTopBar'
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
}

.el-aside {
  color: #333;
}

.el-header {
    padding: 0px;
}
</style>
