<template>
    <div class="endGame container">
        <div class="row justify-content-center">
            <h1>End Game</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: "EndGame",
  computed: {
    game() {
      return this.$store.state.game;
    },
    player0() {
      return this.$store.state.game.players[0];
    },
    player1() {
      return this.$store.state.game.players[1];
    }
  },
  methods: {
    winnerResult() {}
  }
};
</script>

<style>
</style>
