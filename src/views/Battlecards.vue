<template>
  <div class="battlecards">
    <div v-if="!game.id" class="deck-select">
      <deck-select/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DeckSelect from "@/components/DeckSelect.vue";

export default {
  name: "battlecards",
  components: {
    DeckSelect
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  }
};
</script>

