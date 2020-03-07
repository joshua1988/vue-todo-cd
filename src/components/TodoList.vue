<template>
  <ul>
    <li v-for="(item, index) in list" v-bind:key="index">
      <span>{{ item }}</span>
      <button v-on:click="removeItem(item, index)">remove</button>
    </li>
  </ul>
</template>

<script>
import { bus } from '../utils/bus';

export default {
  // props: ['list'],
  props: {
    list: Array
  },
  // data() {
  //   return {
  //     todoItems: []
  //   };
  // },
  methods: {
    // fetchItems: function() {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var item = localStorage.key(i);
    //     this.todoItems.push(item);
    //   }
    // },
    removeItem: function(item, index) {
      this.$emit('remove-todo', item, index);
      // console.log("clicked", item, index);
      // NOTE: 아래 두 줄 로직이 App.vue로 가고, 이벤트 발생 시켜서 해당 로직을 실행
      // this.todoItems.splice(index, 1);
      // localStorage.removeItem(item);
    },
    removeItems: function() {
      this.todoItems = [];
    }
  },
  // created: function() {
  //   // console.log("created");
  //   // debugger
  //   this.fetchItems();
  // },
  beforeMount: function() {
    bus.$on('remove-all', this.removeItems);
    // console.log("before mount");
    // JSON.parse();
    // JSON.stringify();
    // window.addEventListener('scroll', function() {
    //   // ...
    // })
    // window.removeEventListener('scroll', )
  },
  beforeDestroy: function() {
    bus.$off('remove-all', this.removeItem);
  }
};
</script>

<style></style>
