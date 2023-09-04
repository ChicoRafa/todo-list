<template>
  <form class="add-todo-form">
    <input v-model="todoTitle" type="text" placeholder="Todo Title" />
    <div>
      <CustomButton
        :disabled="isLoading"
        @click="
          $emit('submit', todoTitle);
          todoTitle = '';
        ">
        <Spinner v-if="isLoading" />
        <span v-else>Add Todo</span>
        </CustomButton>
    </div>
  </form>
</template>
<script>
import CustomButton from "./CustomButton.vue";
import Spinner from "./Spinner.vue";

export default {
  components: { CustomButton, Spinner },
  props: {
    isLoading: {
      default: false,
      type: Boolean,
    },
  },
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
