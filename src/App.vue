<template>
<Navbar/>

  <main class="container">
    <Alert
      message="Todo title is required"
      :show="showAlert"
      @close="showAlert = false"
      type="info"
    />
    <section>
      <AddTodoForm @submit="addTodo"/>
    </section>

    <section>
      <Todo :todos="todos" @submit="removeTodo"/>
    </section>
  </main>
</template>

<script>
import AddTodoForm from "./components/AddTodoForm.vue";
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
import Todo from './components/Todo.vue';
export default {
  components: { Alert, Navbar, AddTodoForm, Todo },
  data() {
    return {
      todoTitle: "",
      todos: [],
      showAlert: false,
    };
  },

  methods: {
    addTodo(title) {
      if (title === "") {
        this.showAlert = true;
      } else {
        this.todos.push(title);
      }
    },

    removeTodo(todoTitle) {
      this.todos = this.todos.filter((todo) => todo !== todoTitle);
    },
  },
};
</script>

<style scoped>

</style>
