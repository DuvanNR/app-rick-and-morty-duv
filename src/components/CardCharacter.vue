<template>
    <div class="bg-white rounded-lg overflow-hidden mb-10">
      <router-link :to="{ name: 'character', params: { id: character.id } }">
        <img
          :src="character.image"
          :alt="character.name"
          class="w-full"
          />
        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 class="font-semibold
                text-dark text-xl
                sm:text-[22px]
                md:text-xl
                lg:text-[22px]
                xl:text-xl
                2xl:text-[22px]
                mb-4
                block
                hover:text-primary
                ">
              {{ character.name }}
          </h3>
          <p class="text-base text-body-color leading-relaxed mb-7">
              {{ character.status }} - {{ character.species }} <br>
              {{ character.gender }} <br>
              {{ character.location.name }} <br>
              Comentarios: <span>{{ total }}</span>
          </p>
        </div>
      </router-link>
    </div>
</template>

<script>
import { filterCommentsId } from '../assets/js/customStorage'
export default {
  props: ['character'],
  setup(props) {

    //Obtener total comentarios
    const id = props.character.id;
    const itemsComments = filterCommentsId(id);
    const total = itemsComments.length;

    return {
      total
    }
  }

}
</script>

<style>

</style>