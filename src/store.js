import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeGame: {
      cards: [{
        id: 1,
        name: "card one",
        imgUrl: "https://placehold.it/200x200"
      },
      {
        id: 2,
        name: "card two",
        imgUrl: "https://placehold.it/200x200"
      },
      {
        id: 3,
        name: "card three",
        imgUrl: "https://placehold.it/200x200"
      }]
    }
  },
  mutations: {

  },
  actions: {

  }
})
