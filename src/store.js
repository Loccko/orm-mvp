import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import CountriesAPI from "@/App/_shared/services/CountriesAPI";

export default new Vuex.Store({
  state: {
    continents: null,
    countries: null,
  },
  getters: {
    GET_CONTINENTS: (state) => state.continents,
    GET_COUNTRIES: (state) => state.countries,
  },
  actions: {
    async FETCH_ALL_CONTINENTS(context) {
      const response = await CountriesAPI.getAll();
      context.commit("SET_ALL_CONTINENTS", response.continents);
    },
    async FETCH_ALL_COUNTRIES(context) {
      const response = await CountriesAPI.getAllCountries();
      context.commit("SET_ALL_COUNTRIES", response.countries);
    },
    EDIT_COUNTRY_NAME(context, { target, name }) {
      context.commit("EDIT_COUNTRY_NAME", { target, name });
    },
  },
  mutations: {
    SET_ALL_CONTINENTS(state, continents) {
      state.continents = continents;
    },
    SET_ALL_COUNTRIES(state, countries) {
      state.countries = countries;
    },
    EDIT_COUNTRY_NAME(state, { target, name }) {
      const index = state.countries.findIndex(
        (country) => country.code == target
      );
      if (index >= 0) {
        Vue.set(state.countries[index], 'name', name);
      }
    },
  },
  modules: {},
});
