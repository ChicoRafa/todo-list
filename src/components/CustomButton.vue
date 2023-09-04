<template>
  <button
    :style="{ backgroundColor }"
    @click.prevent="$emit('click')"
    :class="{ circle: applyCircleClass }"
  >
    <slot />
  </button>
</template>

<script>
import { backgroundColor } from '../mixins/backgroundColor';

export default {
  mixins: [backgroundColor],
  props: {
    circle: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    applyCircleClass() {
      return this.circle;
    },
  },

  emits: ["click"],
};
</script>

<style scoped>
button {
  color: var(--text-color);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:disabled {
  opacity: 80%;
}

.circle {
  border-radius: 50%;
}
</style>
