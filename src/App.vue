<template>
  <div>
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/mainTabBar.vue';
export default {
  components: {
    MainTabBar
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
