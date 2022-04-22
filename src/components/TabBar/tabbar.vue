<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.tabbar{
    height: 49px;
    background: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>