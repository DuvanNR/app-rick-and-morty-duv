<template>
  <div class="md:container md:mx-auto">

        <div class="flex place-content-center">
          <div class="w-1/5">
            <img class="w-full" src="../assets/Rick_and_Morty_logo.png" alt="Rick_and_Morty_logo">
          </div>
        </div>
        <br>

        <DetailCharacter :character="character" :episodes="episodes" />

  </div>

</template>

<script>

import { onBeforeMount, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import DetailCharacter from '@/components/DetailCharacter'

export default {
  name: 'Character',
  components: {
    DetailCharacter
  },
  setup() {
    const store = useStore();
    const route = useRoute()
    const id = route.params.id

    const character = computed(() => {
      return store.state.characterId
    })

    const episodes = computed(() => {
      return store.state.episodesCharacterId
    })

    onBeforeMount(() => {
      //store.dispatch('getCharacterId',  id)
    });

    onMounted(() => {
      store.dispatch('getCharacterId',  id)
    })


    return {
      character,
      episodes
    }
  }
}
</script>



<style>

</style>
