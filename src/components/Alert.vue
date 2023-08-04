<template>
  <div
    v-if="show"
    class="alert"
    :style="{backgroundColor}"
  >
    <div>{{ message }}</div>
    <div @click="$emit('close')" class="close-alert">&times;</div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      required: true,
      type: String,
    },
    show: {
      required: true,
      type: Boolean,
    },
    type: {
      default: "danger",
      validator(value) {
        return ["warning", "danger", "info"].includes(value);
      },
    },
  },

  computed: {
    backgroundColor(){
        const options = {
            danger: "var(--danger-color)",
            warning: "var(--warning-color)",
            info: "var(--info-color)"
        }
        return options[this.type];
    }
  },

  emits: ["close"],
};
</script>
<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
  height: 50px;
}

.close-alert {
  border: none;
  font-size: 50px;
  color: var(--text-color);
  cursor: pointer;
}
</style>
