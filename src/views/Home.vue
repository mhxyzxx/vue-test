<template>
  <div>
    <!-- 合同状态 -->
    <SelectorContract @change="changeSelectorContract" />
    <!-- 到期时间 -->
    <ExpireTime @change="changeExpireTime" />
    <!-- 业主意向 -->
    <OwnerIntention @change="changeOwnerIntention" />
    <!-- 签约租金 -->
    <CheckboxMoney @change="changeMoneyChecbox" />

  </div>
</template>

<script>
import CheckboxMoney from '@/components/checkboxs/CheckboxMoney.vue'
import SelectorContract from '@/components/selectors/SelectorContract.vue'
import ExpireTime from '@/components/selectors/ExpireTime.vue'
import OwnerIntention from '@/components/selectors/OwnerIntention.vue'

export default {
  name: 'Home',
  components: {
    SelectorContract,
    CheckboxMoney,
    ExpireTime,
    OwnerIntention
  },
  methods: {
    changeMoneyChecbox (value) {
      console.log(this.cleanObj(value))
    },
    changeSelectorContract (item) {
      console.log(this.cleanObj(item))
    },
    changeExpireTime (item) {
      console.log(this.cleanObj(item))
    },
    changeOwnerIntention (item) {
      console.log(this.cleanObj(item))
    }

  }
}
</script>

<style lang="scss">
</style>
