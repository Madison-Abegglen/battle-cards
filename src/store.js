import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards/',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    playerChoice: {},
    opponentChoice: {}
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setPlayerChoice(state, data) {
      state.playerChoice = data
    },
    setOpponentChoice(state, data) {
      state.opponentChoice = data
    }
  },
  actions: {
    startGame({ commit, dispatch }, name) {
      let gameConfig = {
        playerName: name,
        opponents: 1,
        set: 4
      }
      api.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
          router.push({ name: 'game', params: { gameId: res.data.id } })
        })
    },
    getGame({ commit, dispatch }, id) {
      api.get(id)
        .then(res => {
          commit("setGame", res.data.data)
        })
    },
    attack({ dispatch }, attackObj) {
      api.put(attackObj.gameId, attackObj)
        .then(res => {
          dispatch("getGame", attackObj.gameId)
        })
    },
    opponentChoice({ commit }, card) {
      commit('setOpponentChoice', card)
    },
    playerChoice({ commit }, card) {
      commit('setPlayerChoice', card)
    }
  }
})
