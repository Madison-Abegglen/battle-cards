<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>Battle <img alt="Vue logo" src="../assets/logo.png"> Cards</h1>
      <h2>Welcome...</h2>
      <div class="row">
        <div class="col-sm-12">
            <form v-on:submit.prevent="startGame">
                <input type="text" name="playerName" v-model="playerName" placeholder="Enter Player Name">
                <button type="submit">Start Game</button>
            </form>
        <!-- <h2>{{}}</h2>
        <img :src="" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeckSelect",
  data() {
    return {
      playerName: "",
      activeDeck: {}
    };
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", this.playerName);
    }
  }
};
</script>

<style>
</style>

