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
            <Card v-for="card in cards" :key="card.id" :card="card"></Card>
          </div>

          <div class="mt-12">
            <h3 class="text-lg">Recent Payment</h3>

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
import Card from '@/components/Card.vue'
import RecentPayments from '@/components/RecentPayments.vue'
import PaymentDetail from '@/components/PaymentDetail.vue'
import { CardType } from '@/types/Card'
import { RecentPayment } from '@/types/RecentPayment'

export default defineComponent({
  components: {
    AppHeader,
    Card,
    RecentPayments,
    PaymentDetail,
  },
  setup() {
    // TODO(Initialize data from file or API ?!)
    const cards = reactive<CardType[]>([
      {
        id: 1,
        category: 'visa',
        num: 1234123222240034,
        owner: 'Craig S.',
        expiration: '09/25',
      },
      {
        id: 2,
        category: 'mastercard',
        num: 1234123400020329,
        owner: 'Doe J.',
        expiration: '09/21',
      },
    ])
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

    return {
      cards,
      recentPayments,
    }
  },
})
</script>

<style>
.card {
  max-width: 364px;
  background: linear-gradient(
    134deg,
    hsla(253, 77%, 64%, 1),
    hsla(334, 74%, 74%, 1)
  );
}
</style>
