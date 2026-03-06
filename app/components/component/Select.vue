<template lang="pug">
div.custom-select
  select.font-bold.font-s(v-model="selected")
    option(
      v-for="opt in options"
      :value="opt.name"
    ) {{ opt.label }}
</template>

<script setup lang="ts">
const props = defineProps<{
  options: {
    name: string;
    label: string;
  }[];
}>();

const selected = defineModel();
</script>

<style lang="sass" scoped>
.custom-select
  position: relative

  select
    box-sizing: border-box;
    width: 100%
    padding: $phi-1 $phi1_5
    appearance: none
    outline: none
    border: 4px solid $accent2
    border-radius: 15px
    background-color: $second-background-color
    cursor: pointer

  &::before,
  &::after
    --size: 0.4rem;
    content: "";
    position: absolute;
    right: 1.5rem;
    pointer-events: none;

  &::before
    top: 35%;
    border-inline: var(--size) solid transparent;
    border-bottom: var(--size) solid black;

  &::after
    top: 55%;
    border-inline: var(--size) solid transparent;
    border-top: var(--size) solid black;
</style>
