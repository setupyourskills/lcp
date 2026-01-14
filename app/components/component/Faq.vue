<template lang="pug">
div.faq-component
  details.faq-component__details
    summary.faq-component__question {{ props.question }}
    p.faq-component__answer(v-html="props.answer")
</template>

<script setup lang="ts">
const props = defineProps({
  question: {
    type: String,
    default: "Default question"
  },
  answer: {
    type: String,
    default: "Default question"
  }
});
</script>

<style lang="sass" scoped>
.faq-component
  position: relative

  &__details
    border-bottom: 4px solid $accent2
    border-top-right-radius: 25px
    background-color: $element-background-color

    &[open]
      border-radius: 0 25px 25px 25px

    &[open] summary::before
      content: "-"
      font-size: $phi2
      font-weight: bold
      color: $accent1

  &__question
    display: flex
    align-items: center
    padding-block: $phi-1
    padding-inline: $phi1_5 $phi3
    font-size: $phi1
    font-weight: bold

    &::before
      content: '+'
      position: absolute
      right: $phi1
      font-size: $phi2
      color: $accent1

  &__answer 
    text-align: center
    margin-inline: $phi1_5
    font-style: italic

  summary::marker
    content: none
</style>

