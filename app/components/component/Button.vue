<template lang="pug">
button.button-component.font-l {{ props.title }}
</template>

<script setup lang="ts">
import type { IButtonProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IButtonProps>(), {
  title: "Title",
});
</script>

<style lang="sass">
.button-component
  @include transition
  padding-inline: $phi3
  padding-block: $phi1
  min-width: 240px
  border: none
  border-radius: 25px
  border-bottom: 6px solid $accent1
  background-color: $accent2
  cursor: pointer

  &:active
    background-color: $accent1
    box-shadow: none
    transform: translate(0, 0)
    transition: none
</style>
