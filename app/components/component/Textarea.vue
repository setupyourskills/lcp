<template lang="pug">
textarea.textarea-component.font-l(v-model="textareaContent" :placeholder="props.placeholder")
</template>

<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
}>();

const textareaContent = defineModel();
</script>

<style lang="sass">
.textarea-component
  padding-block: $phi-1
  box-sizing: border-box;
  width: 100%
  text-indent: $phi1
  font-weight: normal !important
  border: 4px solid $accent2
  border-radius: 25px
  background-color: $background-color
  cursor: text

  &:focus,
  &:active
    border: 4px solid $accent1
    outline: none
    background-color: $second-background-color

  &::placeholder
    color: $secondary
</style>
