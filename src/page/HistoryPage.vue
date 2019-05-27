<template>
  <el-container class='wrapper'>
    <Live :liveInfoArr="historyLive" :width="liveWidth"></Live>
  </el-container>
</template>

<script>
import { getHistory } from "@/util/localStorage";
import Live from "@/components/Live";

export default {
  components: {
    Live: Live
  },
  data() {
    return {
      historyLive: [],
      liveWidth: window.innerWidth - 100
    };
  },
  mounted() {
    this.historyLive = getHistory();
  }
};
</script>

<style scoped>
.wrapper {
    padding: 20px 20px;
}
</style>
