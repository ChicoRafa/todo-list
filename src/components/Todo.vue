<template>
  <div class="todo">
    <p>{{ title }}</p>
    <div>
      <CustomButton
        circle
        type="secondary"
        @click="$emit('edit')"
        class="custom-todo-btn edit-todo-btn"
      >
        <Pencil/>
        </CustomButton
      >
      <CustomButton
        circle
        type="danger"
        @click="$emit('remove')"
        class="custom-todo-btn"
      >
        &times;
        </CustomButton
      >
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import Pencil from "./icons/pencil.vue";

export default {
  components: { CustomButton, Pencil },
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  emits: ["remove", "edit"],
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

.todo > div{
    display: flex;
}

.custom-todo-btn {
  height: 40px;
  width: 40px;
  font-size: 30px;
}
.edit-todo-btn{
    margin-right: 5px;
}
</style>
