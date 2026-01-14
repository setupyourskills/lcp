<template lang="pug">
div.info-card-component.info-card-component--number
  div.info-card-component__number(v-if="props.number") {{ props.number }}
  h3.info-card-component__title {{ props.title }}
  p.info-card-component__content(v-html="props.content")
</template>

<script setup lang="ts">
const props = defineProps({
  number: {
    type: String,
    default: ""
  },
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

  &__number
    display: flex
    justify-content: center
    align-items: center
    margin-inline: auto
    margin-block: 0 $phi1
    aspect-ratio: 1 / 1;
    width: $phi3
    font-size: $phi1_5
    font-weight: bold
    border-radius: 50%
    background-color: $accent2

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
    font-size: $phi-0_75
    font-style: italic
</style>
