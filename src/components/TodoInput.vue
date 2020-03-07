<template>
  <div>
    <input type="text" v-model="inputText">
    <!-- <input type="text" 
      v-on:input="changeText" 
      v-bind:value="testData" /> -->
    <button v-on:click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputText: '',
      testData: '',
    };
  },
  methods: {
    addItem: function() {
      var value = this.inputText;
      // localStorage.setItem(value, value);
      this.$emit('add-todo', value);
      this.clearInput();
    },
    clearInput: function() {
      this.inputText = '';
    }
    // changeText: function(event) {
    //   console.log('entered', event.target.value);
    //   this.testData = event.target.value;
    // },
  },
};
</script>

<style></style>
