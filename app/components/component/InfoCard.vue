<template lang="pug">
div.info-card-component
  h3.info-card-component__title {{ props.title }}
  p.info-card-component__content(v-html="props.content")
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
  }
});
</script>

<style lang="sass" scoped>
.info-card-component
  text-align: center

  &--number::before
    content: ''

  &__title
    margin-block: 0
    font-size: $phi1_5
    
  &__title::after
    content: ''
    display: block
    margin-inline: auto
    margin-block: $phi-1
    width: $phi3
    height: 6px
    background-color: $accent2

  &__content
    margin-block: 0
    font-style: italic
</style>
