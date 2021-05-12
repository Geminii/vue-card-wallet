<template>
  <header class="flex items-center justify-between">
    <Logo />

    <div class="actions flex">
      <div class="relative">
        <BellIcon />
        <span class="absolute flex h-2 w-2 top-0 right-1">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"
          ></span>
        </span>
      </div>

      <UserIcon />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'
import BellIcon from '@/components/Icons/BellIcon.vue'
import UserIcon from '@/components/Icons/UserIcon.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    Logo,
    BellIcon,
    UserIcon,
  },
})
</script>
