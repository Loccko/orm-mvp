<template>
  <div class="home-page">
    <h1>Home page</h1>

    <div class="countries-list">
      <div class="title">Countries:</div>
      <div v-if="GET_COUNTRIES && GET_COUNTRIES.length > 0" class="list">
        <div
          v-for="country of GET_COUNTRIES"
          :key="country.code"
          class="item"
          @click="initCountryEdit(country)"
        >
          <input
            type="text"
            v-if="targetCountry == country.code"
            v-model="contryName"
            v-on-clickaway="close"
          />
          <span v-else>{{ country.name }}</span>
        </div>
      </div>
    </div>

    <div class="continents-list">
      <div class="title">Continents:</div>
      <div v-if="GET_CONTINENTS && GET_CONTINENTS.length > 0">
        <div v-for="continent of GET_CONTINENTS" :key="'c-'+continent.code">
          <div class="continent" @click="expandCountriesList(continent)">
            {{ continent.name }} +
          </div>
          <div class="continents-countries" v-if="expandedContinent == continent.code">
            <div class="country" v-for="country of continent.countries" :key="'country-'+country.code">
              <span>{{ country.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppStore from "@/store";
import { mixin as clickaway } from "vue-clickaway";
import CountriesAPI from "@/App/_shared/services/CountriesAPI";
import CountryModel from "@/App/_shared/interfaces/orm/models/country"
import ContinentModel from "@/App/_shared/interfaces/orm/models/continent"

export default {
  mixins: [clickaway],
  async beforeRouteEnter(to, from, next) {
    const continents = await CountriesAPI.getAll();
    const countries = await CountriesAPI.getAllCountries();
    console.log(continents, countries);

    ContinentModel.insert({data: continents})
    CountryModel.insert({data: countries})
    
  
    next();
  },
  data: () => ({
    targetCountry: null,
    contryName: null,
    expandedContinent: null,

    GET_CONTINENTS: ContinentModel.all(),
    GET_COUNTRIES: CountryModel.all(),
  }),
  methods: {
    initCountryEdit(country) {
      this.targetCountry = country.code;
      this.contryName = country.name;
    },
    async close() {
      const initialName = this.GET_COUNTRIES[
        this.GET_COUNTRIES.findIndex(
          (country) => country.code == this.targetCountry
        )
      ].name;
      if (this.contryName != initialName) {
        await this.$store.dispatch("EDIT_COUNTRY_NAME", {
          target: this.targetCountry,
          name: this.contryName,
        });
      }
      this.targetCountry = null;
      this.contryName = null;
    },
    expandCountriesList(continent) {
      this.expandedContinent = continent.code 
    },
  },
};
</script>

<style scoped lang="scss" src="./style.scss"></style>
