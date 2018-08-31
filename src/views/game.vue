<template>
  <div class="game">
      <active-game v-if="game.id" />
  </div>
</template>

<script>
import ActiveGame from "@/components/ActiveGame.vue";

export default {
  name: "game",
  components: {
    ActiveGame
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