<template>
  <el-container class='wrapper'>
    <Live :liveInfoArr="collectLive" :width="liveWidth"></Live>
  </el-container>
</template>

<script>
import { getCollection } from "@/util/localStorage";
import Live from "@/components/Live";

export default {
  components: {
    Live: Live
  },
  data() {
    return {
      collectLive: [],
      liveWidth: window.innerWidth - 100
    };
  },
  mounted() {
    this.collectLive = getCollection();
  }
};
</script>

<style scoped>
.wrapper {
    padding: 20px 20px;
}
</style>
