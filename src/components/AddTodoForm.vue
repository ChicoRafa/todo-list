<template>
  <form class="add-todo-form">
    <input v-model="todoTitle" type="text" placeholder="Todo Title" />
    <div>
      <CustomButton
        @click="
          $emit('submit', todoTitle);
          todoTitle = '';
        "
        >Add Todo</CustomButton
      >
    </div>
  </form>
</template>
<script>
import CustomButton from "./CustomButton.vue";

export default {
  components: { CustomButton },
  data() {
    return {
      todoTitle: "",
    };
  },
  emits: ["submit"],
};
</script>
<style scoped>
.add-todo-form {
  display: flex;
  justify-content: space-between;
}

.add-todo-form input {
  width: 80%;
  border: solid 2px var(--accent-color);
}

.add-todo-form button {
  height: 50px;
}
</style>
