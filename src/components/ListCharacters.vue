<template>
  <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
    <div class="container">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 xl:w-1/3 px-4" v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CardCharacter from '@/components/CardCharacter'
export default {
  name: 'Characters',
  components: {
    CardCharacter
  },
  setup() {
    const store = useStore()

    const paramsFilter = store.state.paramsFilter;
    paramsFilter.page = 1;

    const characters = computed(() => {
      return store.state.charactersFilter
    })
    onMounted(() => {
      store.dispatch('getCharacters',  paramsFilter)
    })
    return {
      characters,
      paramsFilter
    }
  }
}
</script>

<style>

</style>