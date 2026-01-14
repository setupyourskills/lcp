<template lang="pug">
input.input-component(:placeholder="props.placeholder")
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: "Default placeholder"
  },
})
</script>

<style lang="sass">
.input-component
  padding-block: $phi-1
  box-sizing: border-box;
  width: 100%
  text-indent: $phi1
  font-size: $phi1_5
  border: 4px solid $accent2
  border-radius: 25px
  background-color: $background-color

  &:focus,
  &:active
    border: 4px solid $accent1
    outline: none
    background-color: $element-background-color

  &::placeholder
    font-size: $phi1_5
    color: $secondary
</style>
