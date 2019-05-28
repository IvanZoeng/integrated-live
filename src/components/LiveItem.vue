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
      <div>{{liveInfo.website}}</div>
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
  width: 210px;
  height: 320px;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  border: 2px rgba(155,155,155,0.5) solid;
  border-radius: 5px;
  padding: 2px 5px 10px 5px;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px #888888;
}

.live-img-wrapper {
  flex: 5;
}
.liveImg {
  height: 100%;
  width: 100%;
  border-radius: 5px
}
.live-info-wrapper {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.liveOwner {
  flex: 1;
  font-size: 16px;
  font-weight: bold;
}
.liveName {
  font-size: 14px;
  flex: 2;
}
.liveHot {
  font-size: 14px;
  flex: 1;
  color: #0f6efd;
}
</style>
