<template>
  <div>
    <nav-bar class="nav-home">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>
<script>
import NavBar from "components/NavBar/navbar.vue";
import HomeSwiper from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
    //请求多个数据
    // 调用函数
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
<style scoped>
.nav-home {
  background: var(--color-tint);
  color: #fff;
}
</style>