<template>
  <div class="todo">
    <p>{{ todo.title }}</p>
    <p>{{ todo.description }}</p>
    <p>{{ todo.date }}</p>
    <div>
      <CustomButton
        circle
        variant="secondary"
        @click="$emit('edit')"
        class="custom-todo-btn edit-todo-btn"
      >
        <Pencil />
      </CustomButton>
      <CustomButton
        circle
        variant="danger"
        @click="$emit('remove')"
        class="custom-todo-btn"
      >
        &times;
      </CustomButton>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./CustomButton.vue";
import Pencil from "./icons/pencil.vue";

defineProps({
  todo: {
    required: true,
    type: Object,
  },
});
defineEmits(["remove", "edit"]);
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

.todo > div {
  display: flex;
}

.custom-todo-btn {
  height: 40px;
  width: 40px;
  font-size: 30px;
}
.edit-todo-btn {
  margin-right: 5px;
}

@media (max-width: 680px) {
  .todo {
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
