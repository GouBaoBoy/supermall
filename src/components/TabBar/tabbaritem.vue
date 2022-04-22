<template>
  <div class="tabbar-item" @click="tabbarClick">
    <div v-if="!active"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-txt"></slot></div>
  </div>
</template>
<script>
import { createLogger } from "vuex";
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // active:false
    };
  },
  computed: {
    active() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.active ? { color: this.activeColor } : {};
    },
  },
  methods: {
    tabbarClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>