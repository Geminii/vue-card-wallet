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

      <a href="https://github.com/Geminii/vue-card-wallet" target="_blank">
        <GithubIcon class="ml-3 w-6 h-6 text-gray-300 hover:text-gray-400" />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'
import BellIcon from '@/components/Icons/BellIcon.vue'
import UserIcon from '@/components/Icons/UserIcon.vue'
import GithubIcon from '@/components/Icons/GithubIcon.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    Logo,
    BellIcon,
    UserIcon,
    GithubIcon,
  },
})
</script>
