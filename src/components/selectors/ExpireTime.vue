<template>
  <div>
    <Selector :title="title" :value="value" :list="list" @change="change"/>
  </div>
</template>

<script>
import Selector from '@/components/Selector.vue'
export default {
  name: 'ExpireTime',
  data () {
    return {
      title: '到期时间',
      value: '',
      list: [
        { label: '不限', value: '' },
        { label: '一周', value: '1' },
        { label: '半个月', value: '2' },
        { label: '八月份', value: '3' },
        { label: '九月份', value: '4' },
        { label: '十月份', value: '5' },
        { label: '十一月份', value: '6' }
      ]
    }
  },
  components: {
    Selector
  },
  methods: {
    change (item) {
      this.value = item.value
      this.$emit('change', this.list)
    }
  }
}
</script>

<style>
</style>
