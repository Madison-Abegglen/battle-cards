<template>
  <div class="game">
      <active-game v-if="game.id && !game.winner" />
      <end-game v-else /> 
  </div>
</template>

<script>
import ActiveGame from "@/components/ActiveGame.vue";
import EndGame from "@/components/EndGame.vue";

export default {
  name: "game",
  components: {
    ActiveGame,
    EndGame
  },
  props: ["gameId"],
  mounted() {
    if (this.gameId && !this.$store.state.game.id) {
      this.$store.dispatch("getGame", this.gameId);
    }
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  }
};
</script>