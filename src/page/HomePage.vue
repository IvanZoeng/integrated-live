<template>
  <el-container>
    <el-container class="side-wrapper">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="currCategory">
          <el-menu-item
            v-for="(item,index) in categoryKey"
            :key="index"
            @click="getCategory(item)"
            :index="item"
          >
            {{categoryMap[item]}}
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-container>
    <el-container class="main-wrapper">
      <el-main class='main'>
        <el-container v-show='currLives.length' class='website-select-wrapper'>
          <el-button @click='select("Douyu")' :type="isPrimary('Douyu')">斗鱼</el-button>
          <el-button @click='select("Huya")' :type="isPrimary('Huya')">虎牙</el-button>
          <el-button @click='select("Wangyi")' :type="isPrimary('Wangyi')">网易</el-button>
          <el-button @click='select("Bilibili")' :type="isPrimary('Bilibili')">BiliBili</el-button>
        </el-container>
        <el-container class='live-wrapper'>
          <Live :liveInfoArr="selectedLives" :width="liveWidth"></Live>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getAllCategories, getCategory } from "@/util/api";
import { loadCategory, saveCategory } from '@/util/localStorage'
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
      liveWidth: window.innerWidth - 200,
      currCategory: ''
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
    },
  },

  methods: {
    async getCategory(category) {
      saveCategory(category)
      this.currCategory = category
      this.selectedLives = [];
      this.currLives = await getCategory(category);
      this.filterWebsite(this.currWebsite)
      // console.log(this.currLives)
    },
    select(website) {
      this.selectedLives = []
      if (this.currWebsite === website) {
        this.currWebsite = "all";
        this.selectedLives = this.currLives;
      } else {
        this.currWebsite = website;
        this.filterWebsite(website)
      }
    },
    filterWebsite(website) {
      if(website === 'all') {
        this.selectedLives = this.currLives
        return
      }
      this.selectedLives = this.currLives.filter(
        item => item.website === website
      );
    }
  },

  async mounted() {
    this.categoryMap = await getAllCategories();
    this.currCategory = loadCategory() || 'hs'
    this.getCategory(this.currCategory)
  }
};
</script>

<style scoped>
.el-submenu,
.el-menu-item {
  text-align: left;
}
.website-select-wrapper {
  margin-bottom: 15px;
}

.side-wrapper {
  width: 200px;
  max-width: 200px;
}

.live-wrapper {
  display: flex;
  align-items: center;
}

</style>
