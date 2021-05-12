<template>
  <transition-group name="bounce" tag="div">
    <div
      v-for="(recentPayment, paymentIndex) in payments"
      :key="recentPayment.id"
      class="grid gap-x-2 grid-cols-1 md:grid-cols-recent-payment py-4 border-b border-gray-100"
    >
      <div class="flex items-center">
        <span
          class="flex flex-none w-2 h-2 bg-primary rounded ring-2 ring-secondary"
        ></span>
        <span class="text-black text-sm ml-4 mx-2">{{
          recentPayment.name
        }}</span>
      </div>
      <div class="flex items-center">
        <span
          class="flex flex-none w-2 h-2 rounded"
          :class="`bg-${actionColor(recentPayment.action)}`"
        ></span>
        <span
          class="text-sm uppercase mx-2"
          :class="`text-${actionColor(recentPayment.action)}`"
          >{{ recentPayment.action }}</span
        >
      </div>
      <span class="flex items-center text-gray-400 text-sm">{{
        recentPayment.date
      }}</span>
      <span
        class="flex items-center text-sm font-bold"
        :class="`text-${amountColor(recentPayment.amount)}-400`"
        >{{ recentPayment.amount }}</span
      >
      <div class="flex items-center relative">
        <DropdownAction :item="recentPayment" @delete="deleteRecentPayment" />
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { RecentPayment, PaymentAction } from '@/types/RecentPayment'
import { defineComponent, PropType, ref } from 'vue'
import DropdownAction from '@/components/DropdownAction.vue'

export default defineComponent({
  name: 'RecentPayments',
  components: {
    DropdownAction,
  },
  props: {
    recentPayments: {
      type: Array as PropType<RecentPayment[]>,
      required: true,
    },
  },
  setup({ recentPayments }) {
    let payments = ref<RecentPayment[]>(recentPayments)
    const actionColor = (action: PaymentAction) => {
      return {
        payment: 'orange',
        refund: 'blue',
        credit: 'dark-purple',
      }[action]
    }
    const amountColor = (amount: string) => {
      return amount.includes('-') ? 'red' : 'green'
    }

    const deleteRecentPayment = (recentPayment: RecentPayment) => {
      const paymentIndex = payments.value.findIndex(
        (p: RecentPayment) => p.id === recentPayment.id
      )
      payments.value.splice(paymentIndex, 1)
    }

    return {
      payments,
      actionColor,
      amountColor,
      deleteRecentPayment,
    }
  },
})
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
.bounce-leave-active {
  animation: bounce-in 0.7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
