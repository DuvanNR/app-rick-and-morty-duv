import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    characterId: [],
    charactersFilter: [],
    episodesCharacterId: [],
    page: 1,
    pages: 1,
    countReg: 1,
    orderReg: true,
    paramsFilter: {
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      pager: true
    }
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharacterId(state, payload) {
      console.log({ payload });
      state.characterId = payload
    },
    setEpisodesCharacterId(state, payload) {
      state.episodesCharacterId = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    },
    setPage(state, payload) {
      state.page = payload
    },
    setparamsFilter(state, payload) {
      state.paramsFilter = payload
    }
  },
  actions: {
    async getCharacters({dispatch, commit, state}, paramsFilter) {
      try {
        paramsFilter = state.paramsFilter;
        let {page: recPage} = paramsFilter;
        let { name, status, species, type, gender, pager} = paramsFilter;

        // validar paginar para evitar error de filtros
        (pager) ? recPage : recPage = 1;

        // validar que no se pagine menor a 1 ni mayor a ultima pagina
        (recPage <= 0 || recPage > state.pages) ? recPage  = state.page : recPage;

        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${ recPage }&name=${ name }&status=${ status }&species=${ species }&type=${ type }&gender=${ gender }`)

        if (!response.ok)  throw  'Error peticion Characters';

        const data = await response.json()

        state.pages = data.info.pages;
        state.countReg = data.info.count;
        commit('setCharacters', data.results);
        commit('setCharactersFilter', data.results);
        commit('setPage', recPage);
        commit('setparamsFilter', paramsFilter);

        dispatch('OrderByParams', state.orderReg);
      } catch (error) {
        console.error(error)
      }
    },
    async getCharacterId({dispatch, commit, state}, id = 0) {
      try {

        const response = await fetch(`https://rickandmortyapi.com/api/character/${ id }`)

        if (!response.ok)  throw  'Error peticion Characters';

        const data = await response.json();

        //usar map para obtener solo el numero del la url que  viene como string
        const episodesIds = (data.episode).map(function(el) {
            return el.replace(/[^0-9]/ig,"");
        });

        dispatch('getEpisodeCharacterId', episodesIds);
        commit('setCharacterId', data);

      } catch (error) {
        console.error(error)
      }
    },
    async getEpisodeCharacterId({commit, state}, ids = 0) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${ ids.toString() }`)

        if (!response.ok)  throw  'Error peticion Episodes';

        const data = await response.json();

        //se valida la data.length con valor de 1 para evitar bugs con el objeto
        commit( 'setEpisodesCharacterId', (data.length > 1) ? data : {data} );

      } catch (error) {
        console.error(error)
      }
    },
    OrderByParams({commit, state}, type = true) {
      const order = state.characters.sort((a, b) => (type) ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
      commit('setCharactersFilter', order);
      state.orderReg = type;
    }

  },
  modules: {
  }
})
