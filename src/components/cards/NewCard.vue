<template>
  <div class="card rounded-3xl border-2 border-dashed">
    <div class="px-5 pt-6 pb-7 border-b border-gray-100 border-opacity-20">
      <div class="flex items-center justify-between">
        <ExchangeIcon />

        <div>
          <VisaIcon v-if="card.category === 'visa'" />
          <MastercardIcon
            v-if="card.category === 'mastercard'"
            class="w-12 h-8 filter contrast-75"
          />
        </div>
      </div>
      <div class="flex items-center justify-between mt-4">
        <div>
          <span class="text-xs">Number</span>
          <div class="opacity-30">
            <input
              type="text"
              v-model="card.num"
              class="font-bold"
              required
              minlength="19"
              maxlength="19"
            />
          </div>
        </div>

        <ChipIcon />
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row md:items-center justify-between text-sm p-5"
    >
      <div>
        <label for="owner" class="block text-xs">Owner:</label>
        <input
          id="owner"
          type="text"
          v-model="card.owner"
          class="w-38 lg:w-32 xl:w-48"
          minlength="4"
          required
        />
      </div>
      <div class="mt-4 md:mt-0">
        <span class="block text-xs">End date</span>
        <input
          type="text"
          v-model="card.expiration"
          class="w-16"
          required
          minlength="5"
          maxlength="5"
        />
      </div>
    </div>

    <div class="flex justify-center pt-2 pb-4">
      <button
        class="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        @click="addCard"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { CardType } from '@/types/Card'
import { defineComponent, reactive, watchEffect } from 'vue'
import ExchangeIcon from '@/components/Icons/ExchangeIcon.vue'
import VisaIcon from '@/components/Icons/VisaIcon.vue'
import MastercardIcon from '@/components/Icons/MastercardIcon.vue'
import ChipIcon from '@/components/Icons/ChipIcon.vue'

export default defineComponent({
  name: 'NewCard',
  components: {
    ExchangeIcon,
    VisaIcon,
    MastercardIcon,
    ChipIcon,
  },
  emits: ['add'],
  setup(props, { emit }) {
    const card = reactive<CardType>({
      num: '1234123412341234',
      category: 'visa',
      owner: 'John D.',
      expiration: '01/22',
    })

    const formatNumber = () => {
      card.num = card.num
        .replace(/[^0-9.]/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim()
    }

    const formatExpiration = () => {
      card.expiration = card.expiration
        .replace(/[^0-9.]/g, '')
        .replace(/(.{2})/g, '$1/')
        .slice(0, -1)
    }

    watchEffect((card) => {
      formatNumber()
      formatExpiration()
    })

    const addCard = () => {
      emit('add', card)
    }

    return {
      card,
      addCard,
    }
  },
})
</script>

<style scoped>
input  {
  @apply border rounded-sm border-gray-200 text-dark-purple px-1 focus:outline-none focus:ring-1 focus:ring-dark-purple focus:ring-opacity-75;
}
</style>
