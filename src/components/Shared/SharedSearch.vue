<script setup>
import { ref, computed } from 'vue';

import IconSearch from '../Icons/IconSearch.vue'

const model = defineModel()

const emit = defineEmits(['seach'])

const isActive = ref(false)

const onFcous = () => {
  isActive.value = true
}

const onBlur = () => {
    isActive.value = false
}

const searchClases = computed(() => ({'search--active': isActive.value}))
 
</script>

<template>
   <form @submit.prevent="() => {
    emit('seach')
   }">

    <div class="search" :class="searchClases" v-bind="$attrs">
      <input
        v-model="model"
        class="search__input"
        type="text"
        placeholder="Buscar"
        @focus="onFcous"
        @blur="onBlur"
      />
      <button class="search__submit" type="submit" v-bind="$attrs">
        <IconSearch />
      </button>
    </div>
  </form>
</template>

<style scoped>
.search {
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 0.5rem;
}

.search--active {
  border-width: 1px;
  border-color: var(--color-background-primary);
}

.search__input {
  width: 100%;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
}

.search__input:focus {
  outline: none;
}

.search__submit {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem;
  background-color: var(--color-background-primary);
  color: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
}

.search__submit > svg {
  width: 1.125rem;
  height: 1.125rem;
}
</style>
