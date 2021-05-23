import gql from "graphql-tag";

const queries = {
  allContinents: gql`
    query {
      continents {
        code
        name
        countries {
          code
          name
          native
          phone
          currency
        }
      }
    }
  `,
  allCountries: gql`
    query {
      countries {
        code
        name
        phone
        continent {
          name
          code
        }
        capital
        currency
      }
    }
  `,
};

export default {
  queries,
};
