<template>
  <el-container direction="vertical">
    <el-row v-for="(i, index) in eachRow" :key="index" :gutter="gutter">
      <el-col :span="span" v-for="n in eachRow[index]" :key="n">
        <live :liveInfo="liveInfoArr[index*livesEachRow+(n-1)]"></live>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import LiveItem from "../components/LiveItem";
import throttle from '@/util/throttle'

export default {
  components: {
    live: LiveItem
  },
  props: {
    liveInfoArr: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showingWidth: this.width - 40 - 40,
      deltaFromWindowWidth: window.innerWidth - this.width
    };
  },
  computed: {
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
      return Math.ceil(this.liveInfoArr.length / this.livesEachRow)
    },
    eachRow() {
      let rows = Array(this.rows).fill(this.livesEachRow)
      rows[rows.length - 1] = this.liveInfoArr.length - (rows.length - 1) * this.livesEachRow
      return rows
    }
  },
  mounted() {
    window.addEventListener("resize", throttle(() => {
      this.showingWidth = window.innerWidth - this.deltaFromWindowWidth - 40 - 40
    }));
  },
};
</script>

<style>
</style>
