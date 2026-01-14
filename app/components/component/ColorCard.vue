<template lang="pug">
div.color-card-component
  p.color-card-component__color-name {{ props.colorName }}
</template>

<script setup lang="ts">
const props = defineProps({
  colorName: {
    type: String,
    default: "Color name"
  }
})
</script>

<style lang="sass" scoped>
.color-card-component
  background-color: $element-background-color
  border-radius: 25px
  box-shadow: 4px 4px 4px 0px $secondary

  &__color-name
    text-align: center
    padding-inline: $phi1

    &::before
      content: ''
      display: block
      margin-block: $phi1
      width: $phi3
      aspect-ratio: 1 / 1;
      background-color: v-bind("props.colorName")
      border-radius: 50%
</style>
