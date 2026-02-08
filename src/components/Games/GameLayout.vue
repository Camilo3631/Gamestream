<script setup>
import { useSlots, ref } from 'vue';
import SharedSearch from '../Shared/SharedSearch.vue';

const slots = useSlots()

const searchInput = ref('')

const emit =  defineEmits(['setGameView'])

const { games } = defineProps({
  games: {
    type: Array,
    required: true
  }
})

console.log(games)

const onSearch = () => {
  
   const  termSearch = searchInput.value.toLocaleLowerCase()

  if (termSearch.trim() === '') {
    emit('setGameView', games)
    return
  }
 
  const filteredGames = games.filter((game) => {
  //  return searchInput.value.toLocaleLowerCase().includes(game.title.toLocaleLowerCase())
  //  const  termSearch = searchInput.value.toLocaleLowerCase()
    return game.title.toLowerCase().includes(termSearch)
  })

  emit('setGameView', filteredGames)
}

</script>

<template>
  <section>

    

    <slot name="title"/>

    <h2 v-if="slots.title === undefined">Recent games</h2>

    <div class="game-layout">

       <SharedSearch @seach="onSearch" v-model="searchInput" class="my-class" id="search-from"/>

      <slot />


    </div>
  </section>
</template>

<style scoped>
.game-layout {

  display: grid;
  gap: 2rem;
  margin: 1rem auto;
  max-width: 90%;
}


</style>
