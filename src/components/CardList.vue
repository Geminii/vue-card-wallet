<template>
  <Card
    v-if="cards.length"
    v-for="card in cards"
    :key="card.id"
    :card="card"
  ></Card>
  <NewCard v-if="cards.length < 2" @add="addCard" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Card from '@/components/Card.vue'
import NewCard from '@/components/cards/NewCard.vue'
import { CardType } from '@/types/Card'

export default defineComponent({
  components: {
    Card,
    NewCard,
  },
  props: {
    cards: {
      type: Array as PropType<CardType[]>,
      required: true,
    },
  },
  setup({ cards }) {
    const addCard = (card: CardType) => {
      cards.unshift(card)
    }

    return {
      addCard,
    }
  },
})
</script>
