import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import ORMInterface from '@/App/_shared/interfaces/orm'

export default new Vuex.Store({
  plugins:[ORMInterface]
});
