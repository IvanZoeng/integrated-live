<template>
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
    <el-main>
      <live :liveInfo="test_data"></live>
    </el-main>
  </el-container>
</template>

<script>
import { getAllCategories, getCategory } from "@/util/api";
import Live from "../components/Live";

export default {
  components: {
    live: Live
  },
  data() {
    return {
      categoryMap: {},
      currLives: [],
      test_data: {
        hot: 6622376,
        img: "https://rpic.douyucdn.cn/asrpic/190506/288016_1751.png/dy1",
        name: "MSI入围淘汰赛TLvsPVB",
        owner: "英雄联盟赛事",
        url: "http://www.douyu.com/288016",
        website: "Douyu"
      }
    };
  },
  computed: {
    categoryKey() {
      return Object.keys(this.categoryMap);
    },
    test_datas() {
      return Array(20).fill(test_data)
    }
  },

  methods: {
    async getCategory(category) {
      this.currLives = await getCategory(category);
      console.log(this.currLives);
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
