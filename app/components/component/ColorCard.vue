<template lang="pug">
div.color-card-component
  p.color-card-component__color-name.font-m {{ props.colorName }}
</template>

<script setup lang="ts">
import type { IColorCardProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IColorCardProps>(), {
  colorName: "Color",
});
</script>

<style lang="sass" scoped>
.color-card-component
  @include transition
  display: flex
  justify-content: center
  width: 120px
  border-radius: 25px
  background-color: $element-background-color

  &__color-name
    margin-block: 0 $phi1
    text-align: center

    @media screen and (min-width: 600px)
      width: 140px

    &::before
      content: ''
      display: block
      margin-inline: auto
      margin-block: $phi1
      width: $phi3
      aspect-ratio: 1 / 1;
      border-radius: 50%
      background-color: v-bind("props.colorName")
</style>
