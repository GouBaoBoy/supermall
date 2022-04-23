<template>
  <div class="home">
    <nav-bar class="nav-home">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="titles" class="tab-control" @tabclick="tabclick"></tab-control>
    <goods-list :goods="showGoods"/>
    <ul>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
    </ul>
  </div>
</template>
<script>
import NavBar from "components/NavBar/navbar.vue";
import TabControl from "components/TabControl/TabControl.vue";
import GoodsList from "components/Goods/GoodsList.vue"

import HomeSwiper from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata,getHomeGoods } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop'
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
  },
  created() {
    //请求多个数据
    // 调用函数
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
      showGoods(){
          return this.goods[this.currentType].list
      }
  },
  methods: {
    //   事件点击相关方法
    tabclick(index){
        // console.log(index);
        switch(index){
            case 0:
                return this.currentType = 'pop'
                break
            case 1:
                return this.currentType = 'new'
                break
            case 2:
                return this.currentType = 'sell'
                break
        }
    },

    //   网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
            console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            // console.log( this.goods[type].list); 
        })
    }
  },
};
</script>
<style scoped>
.home {
  padding-top: 44px;
}
.nav-home {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
    /* 吸顶 */
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 1;
}
</style>