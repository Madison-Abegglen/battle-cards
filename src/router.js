import Vue from 'vue'
import Router from 'vue-router'
import battlecards from './views/Battlecards.vue'
import game from './views/game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'battlecards',
      component: battlecards
    }, {
      path: '/game/:gameId',
      name: 'game',
      props: true,
      component: game
    }
  ]
})
