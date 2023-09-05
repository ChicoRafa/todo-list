<template>
  <button
    :style="{ backgroundColor }"
    @click.prevent="$emit('click')"
    :class="{ circle: applyCircleClass }"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useBackgroundColor, backgroundColorProps } from "../composables/backgroundColor";
const props = defineProps({
  circle: {
    default: false,
    type: Boolean,
  },
  ...backgroundColorProps, //Spread to reutilize in the object above
});
const applyCircleClass = computed(() => props.circle);
const backgroundColor = useBackgroundColor(props);
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
