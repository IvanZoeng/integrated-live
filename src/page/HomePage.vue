<template>
  <el-container>
    <el-container class="side-wrapper">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-menu-item
            v-for="(item,index) in categoryKey"
            :key="index"
            @click="getCategory(item)"
          >{{categoryMap[item]}}</el-menu-item>
          <el-submenu index="1" style='display:none'>
            <template slot="title">其他游戏</template>
            <el-menu-item>1</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
    <el-container class="main-wrapper">
      <el-main>
        <el-container v-if='currLives.length' class='website-select-wrapper'>
          <el-button @click='select("Douyu")' :type="isPrimary('Douyu')">斗鱼</el-button>
          <el-button @click='select("Huya")' :type="isPrimary('Huya')">虎牙</el-button>
          <el-button @click='select("Wangyi")' :type="isPrimary('Wangyi')">网易</el-button>
          <el-button @click='select("Bilibili")' :type="isPrimary('Bilibili')">BiliBili</el-button>
        </el-container>
        <Live :liveInfoArr="selectedLives" :width="liveWidth"></Live>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getAllCategories, getCategory } from "@/util/api";
import Live from "@/components/Live";

export default {
  components: {
    Live: Live
  },
  data() {
    return {
      categoryMap: {},
      currLives: [],
      selectedLives: [],
      currWebsite: "all",
      liveWidth: window.innerWidth - 200
    };
  },
  computed: {
    categoryKey() {
      return Object.keys(this.categoryMap);
    },
    isPrimary() {
      return (website) => {
        return website === this.currWebsite ? 'primary' : ''
      }
    }
  },

  methods: {
    async getCategory(category) {
      this.currLives = [];
      this.selectedLives = [];
      this.currLives = await getCategory(category);
      this.selectedLives = this.currLives;
      // console.log(this.currLives)
    },
    select(website) {
      this.selectedLives = []
      if (this.currWebsite === website) {
        this.currWebsite = "all";
        this.selectedLives = this.currLives;
      } else {
        this.currWebsite = website;
        this.selectedLives = this.currLives.filter(
          item => item.website === website
        );
      }
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
.website-select-wrapper {
  margin-bottom: 15px
}

/* .side-wrapper,
.main-wrapper {
  overflow-y: scroll;
  height: calc(100% - 60px)
}
.side-wrapper::-webkit-scrollbar {display:none} */
</style>
