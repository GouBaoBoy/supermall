<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ 'tab-control-item': true, active: current === index }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.current = index;
      this.$emit('tabclick',index)
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>