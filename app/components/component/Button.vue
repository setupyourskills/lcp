<template lang="pug">
div.button-component
  p.button-component__title.font-l {{ props.title }}
</template>

<script setup lang="ts">
import type { IButtonProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IButtonProps>(), {
  title: "Title",
});
</script>

<style lang="sass">
.button-component
  text-align: center
  padding-block: $phi-1
  border-radius: 25px
  background-color: $accent1
  box-shadow: 4px 4px 4px 0px $secondary
  width: 240px

  &__title
    font-weight: bold
</style>
