<template>
  <!-- <div class='wrapper'>
        <a :href="liveInfo.url" target="_blank">
            <img :src='liveInfo.img' class='liveImg' :alt='liveInfo.owner'>
        </a>
        <div>
            <div>{{liveInfo.owner}}</div>
            <div>{{liveInfo.name}}</div>
            <div>{{liveInfo.hot}}</div>
            <div>{{liveInfo.website}}</div>
        </div>
  </div>-->
  <el-container class="wrapper">
    <el-container class="live-img-wrapper">
      <a :href="liveInfo.url" target="_blank">
        <img :src="liveInfo.img" class="liveImg" :alt="liveInfo.owner">
      </a>
    </el-container>
    <el-container class="live-info-wrapper">
      <div class="liveOwner">{{liveInfo.owner}}</div>
      <div class="liveName">{{liveInfo.name}}</div>
      <div class="liveHot">人数: {{liveInfo.hot}}</div>
    </el-container>
  </el-container>
</template>

<script>
export default {
  props: {
    liveInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  text-align: left
}

.live-img-wrapper {
  flex: 5
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
  font-weight: bold
}
.liveName {
  flex: 2;
}
.liveHot {
  flex: 1;
  color: #0f6efd;
}
</style>
