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
              <!-- TODO(component) -->
              <div
                class="grid gap-x-2 grid-cols-1 md:grid-cols-recent-payment py-4 border-b border-gray-100"
              >
                <div class="flex items-center">
                  <span
                    class="flex flex-none w-2 h-2 bg-primary rounded ring-2 ring-secondary"
                  ></span>
                  <span class="text-black text-sm ml-4 mx-2">Charge Back</span>
                </div>
                <div class="flex items-center">
                  <span class="flex flex-none w-2 h-2 bg-orange rounded"></span>
                  <span class="text-orange text-sm uppercase mx-2"
                    >Payment</span
                  >
                </div>
                <span class="flex items-center text-gray-400 text-sm"
                  >Mar 20, 2021</span
                >
                <span class="flex items-center text-red-400 text-sm font-bold"
                  >-$140,20</span
                >
                <div class="flex items-center">
                  <button
                    class="flex justify-center rounded-full bg-gray-100 w-6 h-6"
                  >
                    <span
                      class="text-gray-300 text-2xl tracking-wider leading-3"
                    >
                      ...
                    </span>
                  </button>
                </div>
              </div>
              <div
                class="grid gap-x-2 grid-cols-1 md:grid-cols-recent-payment py-4 border-b border-gray-100"
              >
                <div class="flex items-center">
                  <span
                    class="flex flex-none w-2 h-2 bg-primary rounded ring-2 ring-secondary"
                  ></span>
                  <span class="text-black text-sm mx-3"
                    >Information Requested for a payment</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="flex flex-none w-2 h-2 bg-blue rounded"></span>
                  <span class="text-blue text-sm uppercase ml-4 mr-2"
                    >Refund</span
                  >
                </div>
                <span class="flex items-center text-gray-400 text-sm"
                  >Mar 20, 2021</span
                >
                <span class="flex items-center text-green-400 text-sm font-bold"
                  >+$40,20</span
                >
                <div class="flex items-center">
                  <button
                    class="flex justify-center rounded-full bg-gray-100 w-6 h-6"
                  >
                    <span
                      class="text-gray-300 text-2xl tracking-wider leading-3"
                    >
                      ...
                    </span>
                  </button>
                </div>
              </div>
              <div
                class="grid gap-x-2 grid-cols-1 md:grid-cols-recent-payment py-4 border-b border-gray-100"
              >
                <div class="flex items-center">
                  <span
                    class="flex flex-none w-2 h-2 bg-primary rounded ring-2 ring-secondary"
                  ></span>
                  <span class="text-black text-sm ml-4 mx-3">Settled</span>
                </div>
                <div class="flex items-center">
                  <span class="flex flex-none w-2 h-2 bg-orange rounded"></span>
                  <span class="text-orange text-sm uppercase ml-2"
                    >Payment</span
                  >
                </div>
                <span class="flex items-center text-gray-400 text-sm"
                  >Mar 20, 2021</span
                >
                <span class="flex items-center text-red-400 text-sm font-bold"
                  >-$74,70</span
                >
                <div class="flex items-center">
                  <button
                    class="flex justify-center rounded-full bg-gray-100 w-6 h-6"
                  >
                    <span
                      class="text-gray-300 text-2xl tracking-wider leading-3"
                    >
                      ...
                    </span>
                  </button>
                </div>
              </div>
              <div
                class="grid gap-x-2 grid-cols-1 md:grid-cols-recent-payment py-4 border-b border-gray-100"
              >
                <div class="flex items-center">
                  <span
                    class="flex flex-none w-2 h-2 bg-primary rounded ring-2 ring-secondary"
                  ></span>
                  <span class="text-black text-sm ml-4 mx-2">Authorized</span>
                </div>
                <div class="flex items-center">
                  <span
                    class="flex flex-none w-2 h-2 bg-dark-purple rounded"
                  ></span>
                  <span class="text-dark-purple text-sm uppercase ml-2"
                    >Credit</span
                  >
                </div>
                <span class="flex items-center text-gray-400 text-sm"
                  >Mar 19, 2021</span
                >
                <span class="flex items-center text-red-400 text-sm font-bold"
                  >-$1,20</span
                >
                <div class="flex items-center">
                  <button
                    class="flex justify-center rounded-full bg-gray-100 w-6 h-6"
                  >
                    <span
                      class="text-gray-300 text-2xl tracking-wider leading-3"
                    >
                      ...
                    </span>
                  </button>
                </div>
              </div>
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
import PaymentDetail from '@/components/PaymentDetail.vue'
import { CardType } from '@/types/Card'

export default defineComponent({
  components: {
    AppHeader,
    Card,
    PaymentDetail,
  },
  setup() {
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

    return {
      cards,
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
