<template>
  <el-row>
    <el-col :span="1">
      <router-link class="btn_top" to="/">
        <el-button>直播</el-button>
      </router-link>
    </el-col>
    <el-col :span="1">
      <router-link class="btn_top" to="/history">
        <el-button>浏览历史</el-button>
      </router-link>
    </el-col>
    <el-col :span="1">
      <router-link class="btn_top" to="/collect">
        <el-button>收藏</el-button>
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style scoped>
.el-row {
    text-align: left
}
</style>
