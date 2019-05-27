<template>
  <el-container class="wrapper">
    <el-container class="live-img-wrapper">
      <!-- <a :href="liveInfo.url" target="_blank"> -->
      <img :src="liveInfo.img" class="liveImg" :alt="liveInfo.owner" @click="click">
      <!-- </a> -->
    </el-container>
    <el-container class="live-info-wrapper">
      <div class="liveOwner">{{liveInfo.owner}}</div>
      <div class="liveName">{{liveInfo.name}}</div>
      <div class="liveHot">人数: {{liveInfo.hot}}</div>
      <!-- <el-button @click='collect'>关注</el-button> -->
    </el-container>
  </el-container>
</template>

<script>
import { addHistory, addCollection } from "@/util/localStorage";

export default {
  props: {
    liveInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    click() {
      window.open(this.liveInfo.url);
      addHistory(this.liveInfo);
    }
    // collect() {
    //   addCollection(this.liveInfo)
    // }
  }
};
</script>

<style scoped>
.wrapper {
  width: 200px;
  height: 240px;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.live-img-wrapper {
  flex: 5;
}
.liveImg {
  height: 100%;
  width: 100%;
}
.live-info-wrapper {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.liveOwner {
  flex: 1;
  font-size: 18px;
  font-weight: bold;
}
.liveName {
  flex: 2;
}
.liveHot {
  flex: 1;
  color: #0f6efd;
}
</style>
