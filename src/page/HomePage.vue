<template>
  <el-container>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-menu-item
            v-for="(item,index) in categoryKey"
            :key="index"
            @click="getCategory(item)"
          >{{categoryMap[item]}}</el-menu-item>
          <el-submenu index="1">
            <template slot="title">其他游戏</template>
            <el-menu-item>1</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
    <el-container>
      <el-main>
        <Live :liveInfoArr='currLives'></Live>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getAllCategories, getCategory } from "@/util/api";
import Live from '@/components/Live'

export default {
  components: {
    "Live": Live
  },
  data() {
    return {
      categoryMap: {},
      currLives: [],
    };
  },
  computed: {
    categoryKey() {
      return Object.keys(this.categoryMap)
    }
  },

  methods: {
    async getCategory(category) {
      this.currLives = []
      this.currLives = await getCategory(category)
      console.log(this.currLives)
    }
  },

  async mounted() {
    this.categoryMap = await getAllCategories();
  }
};
</script>

<style scoped>
.el-submenu,
.el-menu-item {
  text-align: left;
}
</style>
