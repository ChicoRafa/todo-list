<template>
  <div ref="modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="header">{{ title }}</h1>
      </div>
      <div class="modal-body">
        <form class="add-form">
          <div>
            <label>Todo Title</label>
          </div>
          <input type="text" v-model="todo.title" />
          <div>
            <label>Todo Description</label>
          </div>
          <input type="text" v-model="todo.description" />
          <div>
            <label>Todo Date</label>
          </div>
          <input type="date" v-model="todo.date" />
          <div class="submit-button-container">
            <CustomButton
              class="submit-button"
              :disabled="isLoading"
              @click.prevent="$emit('submit', todo)"
            >
              <Spinner v-if="isLoading" />
              <span v-else>Submit</span>
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "@/components/CustomButton.vue";
import Spinner from "@/components/Spinner.vue";
import { reactive } from "vue";

const props = defineProps({
  title: {
    default: "Todo Form",
  },

  data: {
    type: Object,
    default: () => ({
      title: "",
      description: "",
      date: null,
    }),
  },
  isLoading: {
    default: false,
  },
});

const todo = reactive({ ...props.data });

defineEmits(["submit"]);
</script>

<style scoped>
.header {
  padding: 10px;
}
.modal {
  background-color: var(--navbar-color);
  border-radius: 15px;
}
.modal-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.add-form input {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  flex: 1;
}

.submit-button-container {
  display: flex;
  justify-content: flex-end;
}
.submit-button {
  padding: 10px;
}
</style>
