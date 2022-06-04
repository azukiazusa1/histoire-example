<script lang="ts" setup>
import AppButton from "./AppButton.vue";
import { ref } from "vue";
import { hstEvent } from "histoire/client";

const label = ref("Hello World");
</script>

<template>
  <Story title="buttons" :layout="{ type: 'grid' }">
    <Variant title="default">
      <AppButton @click="hstEvent('click', $event)">{{ label }}</AppButton>
    </Variant>
    <Variant title="secondary">
      <AppButton color="secondary" @click="hstEvent('click', $event)">
        {{ label }}
      </AppButton>
    </Variant>
    <Variant title="disabled">
      <AppButton disabled @click="hstEvent('click', $event)">
        {{ label }}
      </AppButton>
    </Variant>

    <template #controls>
      <HstText v-model="label" title="label" />
    </template>
  </Story>
</template>

<docs lang="md">
# Buttons

This is a button.

## Props

| Name     | Type                         | Default   | Description                    |
| -------- | ---------------------------- | --------- | ------------------------------ |
| color    | "primary" &#124; "secondary" | "primary" | The color of the button        |
| disabled | boolean                      | false     | Whether the button is disabled |
</docs>
