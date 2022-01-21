<template>
    <div class="flex mt-6 place-content-center text-white">
        <p>Paginas: {{ pages }} - Registros: {{ countReg }}</p>
    </div>
    <div class="flex mt-6 place-content-center">
        <button  @click="changePag((pageCurrent - 1))" class="bg-dgreenRaM text-white block rounded-sm font-bold py-2 px-2 flex items-center">
            <i class="mdi mdi-arrow-left-thick mdi-24px mx-1"></i>
            Anterior
        </button>
        <input
        v-model.number="pageCurrent"
        name="pageCurrent"
        class="w-24 block text-center rounded-sm font-bold py-2 px-2 flex items-center outline-none"
        @change="changePag((pageCurrent))"
        ><br/>
        <button  @click="changePag((pageCurrent + 1))" class="bg-dgreenRaM text-white block rounded-sm font-bold py-2 px-2 flex items-center">
            Siguiente
            <i class="mdi mdi-arrow-right-thick mdi-24px mx-1"></i>
        </button>

    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {

  setup() {

    const store = useStore()
    let pageCurrent = ref(store.state.page);
    let page = 1;
    let pages = ref(store.state.pages);
    let countReg = ref(store.state.countReg);

    const paramsFilter = store.state.paramsFilter;

    const changePag = (page) => {
      console.log(store.state.pages, page);
      (page <= 0 || page > (store.state.pages)) ? page = store.state.page : page;
      pageCurrent.value = page;
      paramsFilter.page = page;
      paramsFilter.pager = true;
      store.dispatch('getCharacters', paramsFilter);
      getInfoPager();
    }

    const getInfoPager = (time = 0) => {
        setTimeout(() => {
             pages.value = store.state.pages;
             countReg.value = store.state.countReg;
        }, time);
    }

    onMounted(() => {
      getInfoPager(3000);
    })

    return {
      pageCurrent,
      changePag,
      page,
      pages,
      countReg,
      getInfoPager
    }

  }
}
</script>

<style>

</style>