<template>
  <div>
    <Selector :title="title" :value="value" :list="list" @change="change"/>
  </div>
</template>

<script>
import Selector from '@/components/Selector.vue'
export default {
  name: 'selectorContract',
  data () {
    return {
      title: '合同状态',
      value: '',
      list: [
        { label: '不限', value: '' },
        { label: '未续约', value: '1' },
        { label: '待续约', value: '2' },
        { label: '已续约', value: '3' }
      ]
    }
  },
  components: {
    Selector
  },
  methods: {
    change (item) {
      this.value = item.value
      this.$emit('change', item)
    }
  }
}
</script>

<style>
</style>
