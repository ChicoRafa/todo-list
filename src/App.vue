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
      <div v-for="todo in todos" v-bind:key="todo.key" class="todo">
        <p>{{ todo }}</p>
        <div>
          <button @click="removeTodo(todo)" class="remove-todo-btn">
            &times;
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import AddTodoForm from "./components/AddTodoForm.vue";
import Alert from "./components/Alert.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Alert, Navbar, AddTodoForm },
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
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--accent-color);
  margin-top: 30px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
}

.remove-todo-btn {
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  font-size: 30px;
  color: var(--text-color);
  background: var(--danger-color);
  cursor: pointer;
}
</style>
