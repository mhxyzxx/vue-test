<template>
  <div>
    <Selector :title="title" :value="value" :list="list" @change="change" />
  </div>
</template>

<script>
import Selector from '@/components/Selector.vue'
export default {
  name: 'OwnerIntention',
  data () {
    return {
      title: '业主意向',
      value: '',
      list: [
        { label: '不限', value: '' },
        { label: '意向续约', value: '1' },
        { label: '不确定', value: '2' },
        { label: '意向退租', value: '3' }
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
