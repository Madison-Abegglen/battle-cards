<template>
  <div class="home">
    <h1>Battle <img alt="Vue logo" src="../assets/logo.png"> Cards</h1>
  <div class="row">
     <div class="col-4" v-for="card in activeGame.cards" :key="card.id">
       <h2>{{card.name}}</h2>
       <img :src="card.imgUrl" alt="">
     </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "start",
  components: {
    HelloWorld
  },
  computed: {
    activeGame() {
      return this.$store.state.activeGame;
    }
  }
};
</script>

