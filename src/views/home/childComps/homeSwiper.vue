<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image">
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper, SwiperItem} from 'components/swiper'
// import Swiper from '@/components/swiper/Swiper.vue'
// import SwiperItem from '@/components/swiper/SwiperItem.vue'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{

        }
    },
}
</script>