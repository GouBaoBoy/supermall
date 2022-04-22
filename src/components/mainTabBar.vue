<template>
    <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img
          slot="item-active-icon"
          src="~assets/img/tabbar/home_active.svg"
        />
        <div slot="item-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" />
        <img
          slot="item-active-icon"
          src="~assets/img/tabbar/category_active.svg"
        />
        <div slot="item-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
        <img
          slot="item-active-icon"
          src="~assets/img/tabbar/shopcart_active.svg"
        />
        <div slot="item-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img
          slot="item-active-icon"
          src="~assets/img/tabbar/profile_active.svg"
        />
        <div slot="item-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
    </div>
</template>
<script>
import TabBar from "components/TabBar/tabbar.vue";
import TabBarItem from "components/TabBar/tabbaritem.vue";
export default {
    components:{
        TabBar,TabBarItem
    }
}
</script>