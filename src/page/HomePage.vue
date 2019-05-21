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
        <el-row v-for="(i, index) in eachRow" :key="index" :gutter="gutter">
          <el-col :span="span" v-for="n in eachRow[i]" :key="n">
            <live :liveInfo="currLives[index*livesEachRow+(n-1)]"></live>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
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
      showingWidth: window.innerWidth - 200 - 40
    };
  },
  computed: {
    categoryKey() {
      return Object.keys(this.categoryMap)
    },
    livesEachRow() {
      return Math.floor((this.showingWidth - 50) / 200)
    },
    span() {
      return (200 / this.showingWidth) * 24
    },
    gutter() {
      return (this.showingWidth - 200 * this.livesEachRow) / this.livesEachRow
    },
    rows() {
      return Math.ceil(this.currLives.length / this.livesEachRow)
    },
    eachRow() {
      let rows = Array(this.rows).fill(this.livesEachRow)
      rows[rows.length - 1] = this.currLives.length - (rows.length - 1) * this.livesEachRow
      return rows
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
    window.addEventListener("resize", () => {
      this.showingWidth = window.innerWidth - 200 - 40
    });
  }
};
</script>

<style scoped>
.el-submenu,
.el-menu-item {
  text-align: left;
}
</style>
