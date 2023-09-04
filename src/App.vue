<template>
  <Navbar />

  <main class="container">
    <Modal :show="editTodoForm.show" @close="editTodoForm.show = false">
      <template #header>
        <h2>Edit Todo</h2>
        <Alert
          message="Todo cannot be empty"
          :show="showAlert"
          @close="showAlert = false"
          type="danger"
        />
      </template>

      <template #content>
        <form class="edit-todo-form">
          <div><label>Todo Title</label></div>
          <input
            @keydown.enter.prevent="updateTodo"
            type="text"
            v-model="editTodoForm.todo.title"
          />
        </form>
      </template>

      <template #footer>
        <div class="edit-todo-modal-footer">
          <CustomButton class="edit-todo-submit-btn" @click="updateTodo"
            >Submit</CustomButton
          >
          <CustomButton type="danger" @click="editTodoForm.show = false"
            >Close</CustomButton
          >
        </div>
      </template>
    </Modal>
    <Alert
      :message="alert.message"
      :show="alert.show"
      @close="alert.show = false"
      :type="alert.type"
    />
    <section>
      <AddTodoForm :isLoading="isPostingTodo" @submit="addTodo" />
    </section>

    <section>
      <Spinner v-if="isLoading" class="spinner" />
      <div v-else>
        <Todo
          v-for="todo in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="removeTodo(todo.id)"
          @edit="showEditTodoForm(todo)"
        />
      </div>
    </section>
  </main>
</template>

<script>
import AddTodoForm from "./components/AddTodoForm.vue";
import Alert from "./components/Alert.vue";
import CustomButton from "./components/CustomButton.vue";
import Modal from "./components/Modal.vue";
import Navbar from "./components/Navbar.vue";
import Todo from "./components/Todo.vue";
import axios from "axios";
import Spinner from "./components/Spinner.vue";
export default {
  components: {
    Alert,
    Navbar,
    AddTodoForm,
    Todo,
    Modal,
    CustomButton,
    Spinner,
  },
  data() {
    return {
      todoTitle: "",
      todos: [],
      alert: {
        show: false,
        message: "",
        type: "danger",
      },
      isLoading: false,
      isPostingTodo: false,
      editTodoForm: {
        show: false,
        todo: {
          id: 0,
          title: "",
        },
      },
    };
  },

  created() {
    this.fetchTodos();
  },

  methods: {
    async fetchTodos() {
      this.isLoading = true;
      try {
        const res = await axios.get("http://localhost:8080/todos");
        this.todos = await res.data;
      } catch (e) {
        this.showAlert("Failed loading todos");
      }
      this.isLoading = false;
    },

    showAlert(message, type = "danger") {
      this.alert.show = true;
      this.alert.message = message;
      this.alert.type = type;
    },

    async addTodo(title) {
      if (title === "") {
        this.showAlert("Todo title is required", "info");
        return;
      }
      this.isPostingTodo = true;
      const res = await axios.post("http://localhost:8080/todos", { title });
      this.isPostingTodo = false;
      this.todos.push(res.data);
    },

    showEditTodoForm(todo) {
      this.editTodoForm.show = true;
      this.editTodoForm.todo = { ...todo };
    },

    updateTodo() {
      const todo = this.todos.find(
        (todo) => todo.id === this.editTodoForm.todo.id
      );
      if (this.editTodoForm.todo.title === "") {
        this.showAlert = true;
        return;
      } else {
        todo.title = this.editTodoForm.todo.title;
        this.editTodoForm.show = false;
      }
    },

    async removeTodo(id) {
      await axios.delete(`http://localhost:8080/todos/${id}`);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped>
.spinner {
  margin: auto;
  margin-top: 10px;
}
.edit-todo-form > input {
  width: 100%;
  height: 30px;
  border: 1px solid var(--accent-color);
}
.edit-todo-modal-footer {
  display: flex;
  justify-content: end;
  padding: 10px;
}
.edit-todo-submit-btn {
  margin-right: 5px;
}
</style>
