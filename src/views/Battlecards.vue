<template>
  <div class="battlecards">
    <div v-if="!game.id" class="deck-select">
      <deck-select/>
    </div>
    <div v-if="game.id" class="active-game">
      <active-game/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DeckSelect from "@/components/DeckSelect.vue";
import ActiveGame from "@/components/ActiveGame.vue";

export default {
  name: "battlecards",
  components: {
    HelloWorld,
    DeckSelect,
    ActiveGame
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  }
};
</script>

