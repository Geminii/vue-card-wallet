<template>
  <div class="shadow-card p-8 mt-9 m-auto lg:ml-0" style="max-width: 324px">
    <div class="border-b border-gray-100 pb-5 text-center">
      <ProfileIcon />
      <h3>Adison Rosser</h3>
      <span class="block text-xs text-dark-purple">Mar 20, 2021</span>
    </div>

    <div class="border-b border-gray-100 py-5 text-center">
      <span class="block text-xs text-dark-purple">Amount Due</span>
      <span class="block font-bold text-blue">$250.00</span>
      <span class="block text-xs text-dark-purple">Visa $250.00</span>
    </div>

    <div class="border-b border-gray-100 py-5 text-center">
      <span class="block text-xs text-dark-purple">Billing Plan</span>
      <span class="block text-dark-purple font-medium">Company Start</span>

      <div class="bg-gray-100 mt-4 rounded-md p-3">
        <p class="flex items-center justify-center mr-2 text-xxs text-gray-400">
          <InformationIcon />
          <span>5 team members ($8 / Month each)</span>
        </p>
        <div class="flex justify-center">
          <ul class="text-xxs text-gray-400 list-disc text-left">
            <li>100 GB Extra storage ($25.00)</li>
            <li>8 extra hours ($2 / hour)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-100 py-5">
      <div class="grid grid-cols-3 gap-x-6">
        <div>
          <span class="text-xxs text-dark-purple block">Billing Plan</span>
          <span class="text-xxs font-bold block">275 New North</span>
          <span class="text-xxs font-bold block">Road, London</span>
        </div>
        <div>
          <span class="text-xxs text-dark-purple block">Invoice Number</span>
          <span class="text-xxs font-bold block">49682</span>
        </div>
        <div>
          <span class="text-xxs text-dark-purple block">Due Date</span>
          <span class="text-xxs font-bold block">15 March, 2020</span>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-end pt-5">
      <div class="mr-16">
        <span class="block text-right text-xxs"
          >Subtotal : <strong>$250.00</strong></span
        >
        <span class="block text-right text-xxs"
          >Tax: <strong>$25.00</strong></span
        >
      </div>
      <span class="block text-xxs"
        >Amount Due (USD) : <strong>$275.00</strong></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileIcon from '@/components/Icons/ProfileIcon.vue'
import InformationIcon from '@/components/Icons/InformationIcon.vue'

export default defineComponent({
  name: 'PaymentDetail',
  components: {
    ProfileIcon,
    InformationIcon,
  },
  setup() {},
})
</script>
