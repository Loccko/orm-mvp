import apollo from "@/App/_shared/plugins/apollo"

export default {
  async query(scheme, variables, fetchPolicy = 'no-cache'){
    const query = {
      query: scheme,
      variables,
      fetchPolicy
    }

    return (await apollo.defaultClient.query(query)).data
  }
}