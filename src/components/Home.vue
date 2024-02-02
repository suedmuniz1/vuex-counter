<template>
  <div class="counter" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
  </div>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.counterSquared }}
  </div>
  <div>
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <button @click="$store.dispatch('clearCounter')">Clear</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
  <div>Color:</div>
  <input v-model="colorCode" type="text" placeholder="Enter a color..." />
</template>

<script>
  export default {
    name: "HomeComponent",
    computed: {
      colorCode: {
        get() {
          return this.$store.state.colorCode;
        },
        set(newColor) {
          this.$store.dispatch("updateColorCode", newColor);
        },
      },
    },
  };
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    font-size: 20px;
  }

  button {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0 10px;
  }

  .counter {
    font-size: 60px;
    margin: 20px 0;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
</style>
