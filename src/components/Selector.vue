<template>
  <div class="selector">
    <div class="title"> {{title || '合同信息'}}</div>
    <div class="selector_list">
      <div :class="['item', {'active':value === item.value}]" v-for="(item, index) in list" :key="index" @click="change(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: {
    title: [String, Number],
    value: String,
    list: Array
  },
  data () {
    return {

    }
  },
  methods: {
    change (item) {
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss">
.selector {
  width: 100%;
  display: flex;
  margin-top: 10px;
  .title {
    height: 20px;
    width: 90px;
    line-height: 20px;
    font-size: 14px;
    color: #2E2F31;
    font-weight: 600;
  }
  .selector_list {
    width: calc(100% - 90px);
    // flex-wrap: wrap;
    display: flex;
    .item {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: 400;
      color: #2E2F31;
      margin-right: 20px;
      cursor: pointer;
      user-select: none;
    }
    .active {
      color: #007bff;
    }
  }
}
</style>
