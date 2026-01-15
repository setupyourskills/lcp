<template lang="pug">
div.bubbles-component
  div.bubbles-component__bubble(
    v-for="color in ['green', 'red', 'yellow']"
    :key="color"
    :class="`bubbles-component--${color}-${props.section}`"
  )
</template>

<script setup lang="ts">
const props = defineProps({
  section: {
    type: String,
    default: "purchase"
  }
});
</script>

<style lang="sass">
.bubbles-component

  &__bubble
    z-index: 0
    position: absolute
    aspect-ratio: 1/1
    border-radius: 50%

  &--green-purchase,
  &--green-footer
    background-color: $green-bubble
    width: 40%

  &--red-purchase,
  &--red-footer
    width: 80%
    background-color: $red-bubble

  &--yellow-purchase,
  &--yellow-footer
    width: 130%
    background-color: $yellow-bubble

  &--green-purchase
    transform: translate(215%, 400%)

  &--red-purchase
    transform: translate(-70%, 85%)

  &--yellow-purchase
    transform: translate(-10%, 200%)

  &--green-footer
    transform: translate(215%, 355%)

  &--red-footer
    transform: translate(-65%, -50%)

  &--yellow-footer
    transform: translate(-75%, 145%)
</style>
