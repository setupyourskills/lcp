<template lang="pug">
input.input-component.font-l(v-model="inputContent" :placeholder="props.placeholder")
</template>

<script setup lang="ts">
import type { IInputProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IInputProps>(), {
  placeholder: "Placeholder",
});

const inputContent = defineModel();
</script>

<style lang="sass">
.input-component
  padding-block: $phi-1
  box-sizing: border-box;
  width: 100%
  text-indent: $phi1
  font-weight: normal !important
  border: 4px solid $accent2
  border-radius: 25px
  background-color: $background-color

  &:focus,
  &:active
    border: 4px solid $accent1
    outline: none
    background-color: $element-background-color

  &::placeholder
    color: $secondary
</style>
