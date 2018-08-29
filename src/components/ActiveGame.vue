<template>
    <div class="activeGame">
        {{game}}
    </div>
</template>


<script>
export default {
  name: "ActiveGame",
  computed: {
    game() {
      return this.$store.state.game;
    }
  }
};
</script>

<style>
</style>
