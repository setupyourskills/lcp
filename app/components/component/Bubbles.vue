<template lang="pug">
div.bubbles-component
  div.bubbles-component__bubble(
    v-for="color in ['green', 'red', 'yellow']"
    :key="color"
    :class="`bubbles-component__bubble--${color}-${props.section}`"
  )
</template>

<script setup lang="ts">
const props = defineProps<{
  section: "purchase" | "footer";
}>();
</script>

<style lang="sass">
.bubbles-component

  &__bubble
    position: absolute
    aspect-ratio: 1/1
    border-radius: 50%

    &--green-purchase
      top: 140px
      right: -100px
      width: 200px
      background-color: $green-bubble

      @media screen and (min-width: 900px)
        position: absolute
        top: 540px
        left: -130px

    &--red-purchase,
    &--red-footer
      top: -160px
      left: -240px
      width: 330px
      background-color: $red-bubble

    &--green-footer
      top: 200px
      right: -120px
      width: 200px
      background-color: $green-bubble

    &--yellow-footer
      bottom: -125px
      left: -250px
      width: 330px
      background-color: $yellow-bubble
</style>
