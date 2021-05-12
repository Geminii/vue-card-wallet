<template>
  <button
    class="relative rounded-full bg-gray-100 w-6 h-6"
    @click="toggleDetail = !toggleDetail"
  >
    <span
      class="absolute top-0 -right-0.5 leading-3 w-6 text-gray-300 text-2xl tracking-wider"
    >
      ...
    </span>
  </button>
  <ul
    v-if="toggleDetail"
    class="absolute top-8 right-0 bg-white border rounded-md shadow-md p-2 w-36 z-10"
  >
    <li class="block text-sm opacity-50 cursor-not-allowed mb-1">
      Show more detail
    </li>
    <li
      class="text-sm cursor-pointer mb-1 tracking-wider hover:text-primary"
      @click.prevent="deleteItem"
    >
      Delete
    </li>
  </ul>
</template>

<script lang="ts">
import { RecentPayment } from '@/types/RecentPayment'
import { defineComponent, onUpdated, PropType, ref } from 'vue'

export default defineComponent({
  name: 'DropdownAction',
  props: {
    item: {
      type: Object as PropType<RecentPayment>,
      required: true,
    },
  },
  emits: ['delete'],
  setup({ item }, { emit }) {
    const toggleDetail = ref(false)
    const deleteItem = () => {
      toggleDetail.value = false

      setTimeout(() => {
        emit('delete', item)
      }, 250)
    }

    return { toggleDetail, deleteItem }
  },
})
</script>
