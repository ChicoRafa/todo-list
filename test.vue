<template>
    <Navbar />
  
    <main class="container">
      <Modal :show="editTodoForm.show">
        <template #header>
          <h2>Edit Todo</h2>
        </template>
  
        <template #content>
          <form class="edit-todo-form">
            <div><label>Todo Title</label></div>
            <input type="text" v-model="editTodoForm.todo.title" />
          </form>
        </template>
  
        <template #footer>
          <div class="edit-todo-modal-footer">
            <Btn class="edit-todo-submit-btn" @click="updateTodo">Submit</Btn>
            <Btn type="danger" @click="editTodoForm.show = false">Close</Btn>
          </div>
        </template>
      </Modal>
  
      <Alert
        message="Todo title is required"
        :show="showAlert"
        @close="showAlert = false"
      />
  
      <section>
        <AddTodoForm @submit="addTodo" />
      </section>
  
      <section>
        <Todo
          v-for="todo in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="removeTodo(todo.id)"
          @edit="showEditTodoForm(todo)"
        />
      </section>
    </main>
  </template>
  
  <script>
  import Alert from "./components/Alert.vue";
  import Navbar from "./components/Navbar.vue";
  import AddTodoForm from "./components/AddTodoForm.vue";
  import Todo from "./components/Todo.vue";
  import Modal from "./components/Modal.vue";
  import Btn from "./components/Btn.vue";
  
  export default {
    components: {
      Alert,
      Navbar,
      AddTodoForm,
      Todo,
      Modal,
      Btn,
    },
  
    data() {
      return {
        todoTitle: "",
        todos: [],
        showAlert: false,
        editTodoForm: {
          show: false,
          todo: {
            id: 0,
            title: "",
          },
        },
      };
    },
  
    methods: {
      addTodo(title) {
        if (title === "") {
          this.showAlert = true;
          return;
        }
        this.todos.push({
          title,
          id: Math.floor(Math.random() * 1000),
        });
      },
  
      showEditTodoForm(todo) {
        this.editTodoForm.show = true;
        this.editTodoForm.todo = { ...todo };
      },
  
      updateTodo() {
        const todo = this.todos.find(
          (todo) => todo.id === this.editTodoForm.todo.id
        );
        todo.title = this.editTodoForm.todo.title;
        this.editTodoForm.show = false;
      },
  
      removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
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
  