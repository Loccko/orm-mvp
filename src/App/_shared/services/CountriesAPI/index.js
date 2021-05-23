import schemes  from "./gql";
import GraphQLApi from "@/App/_shared/interfaces/graphql";

export default {
  async getAll() {
    return await GraphQLApi.query(schemes.queries.allContinents);
  },
  async getAllCountries(){
    return await GraphQLApi.query(schemes.queries.allCountries);
  }
};
