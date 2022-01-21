<template>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

    <div class="w-1/5 grid grid-cols-1 gap-6 mb-6 mx-auto">
        <router-link
        :to="{ name: 'characters' }"
        class="place-content-center bg-white tracking-wide text-gray-800 font-bold rounded border-b-2  border-blue-500 shadow-md py-2 px-6 inline-flex items-center"
        >
           <i class="mdi mdi-arrow-left-thick mr-3 "></i> Volver
        </router-link>
    </div>

    <div class="grid grid-cols-1 gap-6 mb-6">
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div class="w-full md:w-2/5 h-80">
                <img 
                class="object-center object-cover w-full h-full" 
                :src="character.image"
                :alt="character.name">
            </div>
            <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p class="text-xl text-gray-700 font-bold text-center">{{ character.name }}</p>
                <p class="text-base text-gray-700 font-normal">
                  Status: {{ character.status }}
                  --
                  Gender: {{ character.gender }}
                  --
                  Species: {{ character.species }}</p>
                <p class="text-base leading-relaxed text-gray-500 font-normal"></p>
                <div>
                  <div>
                    <textarea v-model="txtComment" id="description"  placeholder="Escribir comentario" class="w-full  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                    <button
                    class="place-content-center text-white tracking-wide font-bold rounded border-b-2 bg-dgreenRaM border-dgreenRaMshadow-md py-2 px-6 inline-flex items-center"
                     @click="saveComment(itemsComments)"
                    >
                      <i class="mdi mdi-note-plus mr-3 "></i> Agregar Comentario
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div class="w-full text-left p-6  space-y-2">
                <p class="text-xl text-gray-700 font-bold text-center">Espisodios</p>
                <!-- start  -->
                <div 
                class="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30"
                v-for="(episode, index) in episodes" :key="index">
                  <div class="p-3 border-l-8 border-dgreenRaM">
                      <div class="">
                        <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> Episode </span> {{ episode.episode }}</div>
                        <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500 pr"> Name </span> {{ episode.name }}</div>
                        <div class="text-sm leading-5 font-semibold">{{ episode.air_date }}</div>
                      </div>
                  </div>
                </div>
                <!-- end -->
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div class="w-full text-left p-6  space-y-2">
                <p class="text-xl text-gray-700 font-bold text-center">Comentarios</p>
                <!-- start  -->
                <div id="contComments">
                  <div 
                  class="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30"
                  v-for="(comment, index) in itemsComments" :key="index" >
                    <div class="p-3 border-l-8 border-dgreenRaM">
                        <div class="">
                          <div class="text-sm leading-5 font-semibold"><span class="text-xs leading-4 font-normal text-gray-500"> </span> {{ comment['comment'] }}</div>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- end -->
            </div>
        </div>
    </div>
</section>

</template>

<script>

import { onMounted, onUpdated, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { saveLocalStorage, showLocalStorage, filterCommentsId, createHtmlComment } from '../assets/js/customStorage'

export default {
  props: {
    character: Object,
    episodes: Object
  },
  setup() {

    const store = useStore();
    const route = useRoute()
    const txtComment = ref('')
    const id = route.params.id

    let itemsComments = filterCommentsId(id);

    const saveComment = () => {
      const commentsSaved = showLocalStorage();
      const comment = ( { id: id, comment: txtComment.value } );
      if(comment){
        commentsSaved.push(comment);
        saveLocalStorage(commentsSaved);
        setComments(txtComment.value);
      }
    }

    const setComments = (txtComment) => {
      const divContComments = document.querySelector('#contComments');
        const div = document.createElement('div');
        div.innerHTML = createHtmlComment(txtComment);
        divContComments.append( div.firstElementChild );
    }

    onMounted(() => {
    })

    return {
      itemsComments,
      saveComment,
      txtComment
    }
  }
}
</script>

<style>

</style>