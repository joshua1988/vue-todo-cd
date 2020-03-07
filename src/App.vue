<template>
  <!-- HTML -->
  <div>
    <todo-header v-bind:propsdata="num"></todo-header>
    <!-- <todo-list v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></todo-list> -->
    <todo-input v-on:add-todo="addTodoItem"></todo-input>
    <todo-list 
      v-bind:list="todoItems"
      v-on:remove-todo="removeTodoItem"
    ></todo-list>
    <!-- <todo-header></TodoHeader> -->
    <todo-footer v-on:clear="clearAllItems"></todo-footer>
  </div>
</template>

<script>
// 컴포넌트 로딩 단축키 이름 'vim'
// import 컴포넌트 이름 from '파일 경로'
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

// var TodoHeader = {
//   template: '<h1>Todo App</h1>'
// }

export default {
  // Javascript
  components: {
    TodoHeader,
    // 'TodoHeader': TodoHeader,
    // 'todo-header': TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
      num: 0
    }
  },
  methods: {
    fetchItems() {
      for (var i = 0; i < localStorage.length; i++) {
        var item = localStorage.key(i);
        this.todoItems.push(item);
      }
    },
    addTodoItem: function(value) {
      // 뷰 데이터 목록에 값을 1개 추가
      this.todoItems.push(value);
      // DB에 값을 저장
      localStorage.setItem(value, value);
    },
    removeTodoItem: function(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    },
    // TODO: removeTodoItem 메서드 구현 (할 일 아이템 remove 버튼 눌렀을 때 삭제하게끔 구현)
    clearAllItems: function() {
      // 뷰 데이터 목록 초기화
      this.todoItems = [];
      // DB(브라우저 저장소) 초기화
      localStorage.clear();
    },
  },
  created() {
    this.fetchItems();
  },
};

// new Vue({
//   components: {

//   }
// })
</script>

<style>
/* CSS */
</style>
