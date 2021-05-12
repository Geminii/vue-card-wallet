<template>
  <div
    v-for="recentPayment in recentPayments"
    class="grid gap-x-2 grid-cols-1 md:grid-cols-recent-payment py-4 border-b border-gray-100"
  >
    <div class="flex items-center">
      <span
        class="flex flex-none w-2 h-2 bg-primary rounded ring-2 ring-secondary"
      ></span>
      <span class="text-black text-sm ml-4 mx-2">{{ recentPayment.name }}</span>
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
    <div class="flex items-center">
      <button class="flex justify-center rounded-full bg-gray-100 w-6 h-6">
        <span class="text-gray-300 text-2xl tracking-wider leading-3">
          ...
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { RecentPayment, PaymentAction } from '@/types/RecentPayment'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'RecentPayments',
  props: {
    recentPayments: {
      type: Array as PropType<RecentPayment[]>,
    },
  },
  setup() {
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

    return {
      actionColor,
      amountColor,
    }
  },
})
</script>
