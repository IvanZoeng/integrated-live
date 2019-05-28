<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
    class="wrapper"
  >
    <el-menu-item index="1">直播</el-menu-item>
    <el-menu-item index="2">历史</el-menu-item>
    <!-- <el-menu-item index="3">收藏</el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
  computed: {
    activeMenu() {
      return [
        '',
        'HomePage',
        'HistoryPage'
      ].indexOf(this.$route.name).toString()
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(['', 'live', 'history', 'collect'][key])
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 0px
}
.el-row {
  text-align: left;
  height: 60px;
  width: 100%;
}
</style>
