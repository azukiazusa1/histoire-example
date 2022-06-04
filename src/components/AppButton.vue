<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    color?: "primary" | "secondary";
    disabled?: boolean;
  }>(),
  {
    color: "primary",
    disabled: false,
  }
);

const colorClasses = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-blue-500 hover:bg-blue-700";
    case "secondary":
      return "bg-gray-500 hover:bg-gray-700";
  }
});

const disabledClasses = computed(() => {
  if (props.disabled) {
    return "opacity-50 cursor-not-allowed";
  } else {
    return "";
  }
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const onClick = (e: MouseEvent) => {
  emit("click", e);
};
</script>

<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    :class="`${disabledClasses} ${colorClasses}`"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>
