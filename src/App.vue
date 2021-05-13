<template>
  <main class="flex items-center justify-center xl:h-screen">
    <div
      class="m-6 pt-7 pb-16 px-4 lg:px-12 xl:px-20 bg-white rounded-3xl shadow-card"
    >
      <AppHeader />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-20 mt-14">
        <!-- Credit Card -->
        <div class="lg:col-span-2">
          <h2 class="font-bold text-2xl text-black leading-9">
            Your Credit Card
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 mt-9 gap-8">
            <CardList :cards="cards" />
          </div>

          <div class="mt-12">
            <h3 class="text-lg">
              Recent Payment
              <button
                class="ml-2 bg-gray-200 text-primary rounded-full px-2 py-0.5 text-xs"
                @click="addRecentPayment"
              >
                Add
              </button>
            </h3>

            <div class="mt-4">
              <RecentPayments :recentPayments="recentPayments" />
            </div>
          </div>
        </div>

        <!-- Payment Detail -->
        <div class="mt-8 lg:mt-0 lg:col-span-1">
          <h2 class="font-bold text-2xl text-black leading-9">
            Payment Detail
          </h2>

          <PaymentDetail />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import CardList from '@/components/CardList.vue'
import RecentPayments from '@/components/RecentPayments.vue'
import PaymentDetail from '@/components/PaymentDetail.vue'
import { CardType } from '@/types/Card'
import { PaymentAction, RecentPayment } from '@/types/RecentPayment'

export default defineComponent({
  components: {
    AppHeader,
    CardList,
    RecentPayments,
    PaymentDetail,
  },
  setup() {
    // TODO(Initialize data from file or API ?!)
    const cards = reactive<CardType[]>([])
    const recentPayments = reactive<RecentPayment[]>([
      {
        id: 1,
        name: 'Charge Back',
        action: 'payment',
        date: 'Mar 20, 2021',
        amount: '-$140,20',
      },
      {
        id: 2,
        name: 'Information Requested for a payment',
        action: 'refund',
        date: 'Mar 20, 2021',
        amount: '+$40,20',
      },
      {
        id: 3,
        name: 'Settled',
        action: 'payment',
        date: 'Mar 20, 2021',
        amount: '-$74,70',
      },
      {
        id: 4,
        name: 'Authorized',
        action: 'credit',
        date: 'Mar 19, 2021',
        amount: '-$1,20',
      },
    ])

    const addRecentPayment = () => {
      const nextId =
        Math.max(...recentPayments.map((recentPayment) => recentPayment.id)) + 1

      recentPayments.unshift({
        id: nextId,
        name: 'Charge Comes Back',
        action: 'payment',
        date: 'Mar 21, 2021',
        amount: '-$200',
      })
    }

    return {
      cards,
      recentPayments,
      addRecentPayment,
    }
  },
})
</script>
