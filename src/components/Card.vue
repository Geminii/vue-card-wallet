<template>
  <div class="card rounded-3xl text-white">
    <div class="px-5 pt-11 pb-7 border-b border-gray-100 border-opacity-20">
      <div class="flex items-center justify-between">
        <ExchangeIcon class="filter brightness-150" />

        <VisaIcon
          v-if="card.category === 'visa'"
          class="filter brightness-150"
        />
        <MastercardIcon
          v-if="card.category === 'mastercard'"
          class="w-12 h-8 filter contrast-75"
        />
      </div>
      <div class="flex items-center justify-between mt-4">
        <div>
          <span class="text-xs">Number</span>
          <div class="opacity-30">
            <span>****</span>
            <span class="ml-2">****</span>
            <span class="ml-2">{{ prevDigits }}</span>
            <span class="ml-2">{{ lastDigits }}</span>
          </div>
        </div>

        <ChipIcon class="filter brightness-150" />
      </div>
    </div>

    <div class="flex items-center justify-between text-sm p-5">
      <span class="font-bold">{{ card.owner }}</span>
      <div>
        <span class="block text-xs">End date</span>
        <span>{{ card.expiration }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CardType } from '@/types/Card'
import ExchangeIcon from '@/components/Icons/ExchangeIcon.vue'
import VisaIcon from '@/components/Icons/VisaIcon.vue'
import MastercardIcon from '@/components/Icons/MastercardIcon.vue'
import ChipIcon from '@/components/Icons/ChipIcon.vue'

export default defineComponent({
  name: 'Card',
  components: {
    ExchangeIcon,
    VisaIcon,
    MastercardIcon,
    ChipIcon,
  },
  props: {
    card: {
      type: Object as PropType<CardType>,
      required: true,
    },
  },
  setup({ card }) {
    const { num } = card
    const prevDigits = num.toString().slice(-8, -4)
    const lastDigits = num.toString().slice(-4)

    return {
      prevDigits,
      lastDigits,
    }
  },
})
</script>

<style scoped>
.card {
  max-width: 364px;
  background: linear-gradient(
    134deg,
    hsla(253, 77%, 64%, 1),
    hsla(334, 74%, 74%, 1)
  );
}
</style>
