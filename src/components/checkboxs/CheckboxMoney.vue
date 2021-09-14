<template>
  <div>
    <Checkbox :title="title" :values="values" :list="list" @change="change"/>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue'
export default {
  name: 'checkboxMoney',
  data () {
    return {
      title: '签约租金',
      values: [],
      list: [
        { label: '1500元以下', value: '1' },
        { label: '1500-3000元', value: '2' },
        { label: '3000-5000元', value: '3' },
        { label: '5000-8000元', value: '4' },
        { label: '8000元以上', value: '5' }
      ]
    }
  },
  components: {
    Checkbox
  },
  methods: {
    change (item) {
      const selectIndex = this.values.indexOf(item)
      if (selectIndex > -1) {
        this.values.splice(selectIndex, 1)
      } else {
        this.values.push(item)
      }
      this.$emit('change', this.values)
    }
  }
}
</script>

<style>
</style>
