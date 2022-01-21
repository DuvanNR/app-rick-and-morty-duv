<template>
  <div class="box">
      <div class="box-wrapper">

        <div class="flex p-3">
          <div class="bg-white border-gray-200">
              <div class="inline-flex">
                <label class="radio capitalize text-center self-center py-2 px-4 cursor-pointer hover:opacity-75">Status:</label>
                <select name="" @change="filter()" v-model="filterStatus" id="" class="text-sm outline-none focus:outline-none bg-transparent">
                  <option value="" selected>All</option>
                  <option v-for="(status, index) in itemsStatus" :key="index">
                    {{ status }}
                  </option>
                </select>
              </div>
          </div>

          <div class="bg-white ml-2 border-gray-200">
              <div class="inline-flex">
                <label class="radio capitalize text-center self-center py-2 px-4 cursor-pointer hover:opacity-75">Gender:</label>
                <select name="" @change="filter()" v-model="filterGender" id="" class="text-sm outline-none focus:outline-none bg-transparent">
                  <option value="" selected>All</option>
                  <option v-for="(gender, index) in itemsGender" :key="index">
                    {{ gender }}
                  </option>
                </select>
              </div>
          </div>

        </div>

        <div class=" bg-white rounded flex items-center w-full p-3 lg:m-3 md:m-3 shadow-sm border border-gray-200">
          <input type="search"
          name=""
          id=""
          @keyup="filter()"
          :placeholder="`Buscar por ${ filterText }`"
          v-model="name"
          class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          >
          <div class="select">
            <select name="" v-model="filterText" id="" class="text-sm outline-none focus:outline-none bg-transparent">
              <option value="name">Name</option>
              <option value="species">Species</option>
              <option value="type">Type</option>
              </select>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {

  setup() {
    const name = ref('')
    const store = useStore()
    const filterText = ref('name');
    const filterStatus = ref('');
    const filterGender = ref('');
    const filterSpecies = ref('');
    const filterType = ref('');

    const paramsFilter = store.state.paramsFilter;
    paramsFilter.page = 1;

    const itemsStatus = ['Alive', 'Dead', 'Unknown'];
    const itemsGender = ['Female', 'Male', 'Genderless', 'Unknown'];

    const filter = () => {
      paramsFilter.name = name.value;
      paramsFilter.status = filterStatus.value;
      paramsFilter.species = filterSpecies.value;
      paramsFilter.type = filterType.value;
      paramsFilter.gender = filterGender.value;
      paramsFilter.pager = false;

      console.log({ paramsFilter });
      store.dispatch('getCharacters', paramsFilter);
    }

    return {
      name,
      filterText,
      filterStatus,
      filterGender,
      filter,
      paramsFilter,
      itemsStatus,
      itemsGender
    }
  }
}
</script>

<style >

</style>