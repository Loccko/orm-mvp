import Vue from 'vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

const config = {
  uri: process.env.VUE_APP_GQL_ENDPOINT
}

const client = new ApolloClient(config)

const provider = new VueApollo({
  defaultClient: client
})

export default provider