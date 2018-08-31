<template>
    <div class="activeGame container">
            <div class="player1 row justify-content-start">
                <div class="col-12">
                    <h2>{{player1.name}}</h2>
                </div>
                <div v-for="card in player1.hand" class="card col-sm-2" :key="card.id" @click="setOpponentCard(card)">
                    <div v-if="card.visible">
                        <p>HP: {{card.health}} <br> DF:{{card.defense}}</p>
                        <img :src="card.img" alt="">
                        <p>Attack: {{card.attack}}</p>
                        <h4>{{card.name}}</h4>
                    </div>
                    <div v-else>
                        <img src="https://img00.deviantart.net/f5b0/i/2017/142/a/a/fantasy_card_back__4_by_gameliberty-db0fi11.png" alt="">
                    </div>
                </div>
            </div> 
            <div v-if="playerCard.id && opponentCard.id">
                <button @click="attack">Start Round!</button>
            </div>  
            <div class="player0 row justify-content-end">
                <div v-for="card in player0.hand" class="card col-sm-2" :key="card.id" @click="setPlayerCard(card)"> 
                    <p>HP: {{card.health}} <br>DF: {{card.defense}}</p>
                    <img :src="card.img" alt="">
                    <p>Attack: {{card.attack}}</p>
                    <h4>{{card.name}}</h4>
                </div>
                <div class="col-12">
                    <h2>{{player0.name}}</h2>
                </div>
            </div>
    </div>
</template>


<script>
export default {
  name: "ActiveGame",
  computed: {
    game() {
      return this.$store.state.game;
    },
    player0() {
      return this.$store.state.game.players[0];
    },
    player1() {
      return this.$store.state.game.players[1];
    },
    playerCard() {
      return this.$store.state.playerChoice;
    },
    opponentCard() {
      return this.$store.state.opponentChoice;
    }
  },
  methods: {
    setPlayerCard(card) {
      this.$store.dispatch("playerChoice", card);
    },
    setOpponentCard(card) {
      this.$store.dispatch("opponentChoice", card);
    },
    attack() {
      let attackObj = {
        playerId: this.player0.id,
        playerCardId: this.playerCard.id,
        opponentId: this.player1.id,
        opponentCardId: this.opponentCard.id,
        gameId: this.game.id
      };
      this.$store.dispatch("attack", attackObj);
    }
  }
};
</script>

<style>
</style>
