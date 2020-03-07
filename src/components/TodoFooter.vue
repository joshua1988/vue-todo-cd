<template>
  <div>
    <h1>Footer</h1>
    <button v-on:click="clearItems">clear all</button>
  </div>
</template>

<script>
// import { bus } from '../utils/bus';

export default {
  methods: {
    clearItems: function() {
      localStorage.clear();
      this.$emit('clear');
      // bus.$emit('remove-all');
    }
  }
};
</script>

<style></style>
