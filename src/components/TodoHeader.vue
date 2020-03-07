<template>
  <h1>할 일 관리 앱</h1>
</template>

<script>
export default {
  props: ['num'],
  // render: function(createElement) {
  //   return createElement('h1', 'Todo App');
  // }
  created() {
    this.num = this.num + 1;
    // var h1 = document.querySelector('h1');
    // console.log('created', h1);
  },
  beforeMount () {
    // var h1 = document.querySelector('h1');
    // console.log('before mount', h1);
  },
  mounted () {
    // var h1 = document.querySelector('h1');
    // console.log('mounted', h1);
  },
}

// document.querySelector('#btn');
// $('#btn').click(function() {
//   console.log('hi');
// })

</script>

<style scoped>
h1 {
  color: blue;
}
</style>