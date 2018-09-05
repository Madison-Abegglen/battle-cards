<template>
    <div class="end-game">
        <div class="row justify-content-center">
            <div v-if="game.players[0].hand.length == 0 && game.players[1].hand.length == 0">
                <h1>End Game <br> Tie</h1>
            </div>
            <div v-if="game.winner" class="col-sm-12">
                <h1>End Game <br> Winner is {{game.winner.name}}</h1>
            </div>
            <button @click="newGame">New Game</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "EndGame",
  computed: {
    game() {
      return this.$store.state.game;
    }
  },
  methods: {
    newGame() {
      this.$store.dispatch("newGame");
    }
  }
};
</script>

<style>
</style>
