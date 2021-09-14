<template>
  <div class="checkbox">
    <div class="title">
      {{title || '签约信息'}}
    </div>
    <div class="checkbox_list">
      <div class="item" :class="{active: values.indexOf(item) > -1}" v-for="(item, index) in list" :key="index" @click="change(item)">{{item.label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    title: [String, Number],
    values: Array,
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
.checkbox {
  width: 100%;
  display: flex;
  margin-top: 10px;
  .title {
    height: 20px;
    width: 90px;
    line-height: 20px;
    font-size: 14px;
    color: #2e2f31;
    font-weight: 600;
  }
  .checkbox_list {
    width: calc(100% - 90px);
    display: flex;
    .item {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #2e2f31;
      font-weight: 400;
      padding-left: 24px;
      position: relative;
      margin-right: 20px;
      cursor: pointer;
      user-select: none;
      &:before {
        content: '';
        width: 16px;
        height: 16px;
        font-size: 14px;
        line-height: 16px;
        border: 1px solid #dcdee0;
        border-radius: 2px;
        background: #ffff;
        position: absolute;
        top: 0;
        left: 0;
      }
      &.active {
        color: #007bff;
        &:before {
          content: '✔';
          width: 16px;
          height: 16px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          line-height: 16px;
          border: 1px solid #007bff;
          border-radius: 2px;
          background: #007bff;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
