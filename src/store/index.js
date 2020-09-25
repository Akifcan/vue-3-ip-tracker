import { createStore } from 'vuex'

export default createStore({
  state: {
    ipInfo: null
  },
  getters: {
    ipInfo: state => state.ipInfo
  },
  mutations: {
    setIpInfo: (state, payload) => state.ipInfo = payload
  },
  actions: {
    async getIpAddressInfo(vuexContext, payload){
      const response = await fetch(payload == undefined ? 'https://ipinfo.io/geo' : `https://ipinfo.io/${payload}/geo`)
      const data = await response.json()
      const location = data.loc.split(',')
      vuexContext.commit('setIpInfo', {...data, lat: parseFloat(location[0]), lng: parseFloat(location[1])})
    }
  }
})
