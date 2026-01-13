<template lang="pug">
div.title-component(:class="{ 'title-component--mark': props.mark }")
  h2.title-component__title(v-html="props.title")
  p.title-component__content(v-html="props.content")
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Default title"
  },
  content: {
    type: String,
    default: "Default content"
  },
  mark: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="sass" scoped>
.title-component
  text-align: center

  &--mark::before
    content: ''
    position: absolute
    left: 0
    width: $phi1_5
    height: $phi3
    background-color: $accent2

  &__title
    margin-block: 0
    font-size: $phi2_5

  &__content
    margin-block: $phi-1 0
    font-size: $phi1_5
</style>
