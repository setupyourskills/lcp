<template lang="pug">
div.faq-component
  details.faq-component__details
    summary.faq-component__question.font-m {{ props.question }}
    p.faq-component__answer.font-s(v-html="props.answer")
</template>

<script setup lang="ts">
import type { IFaqProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IFaqProps>(), {
  question: "Question",
  answer: "Answer",
});
</script>

<style lang="sass" scoped>
.faq-component
  position: relative

  &__details
    border-bottom: 4px solid $accent2
    border-top-right-radius: 25px
    background-color: $element-background-color
    cursor: pointer

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
    margin-block: $phi1

    @media screen and (min-width: 600px)
      text-align: left

  summary::marker
    content: none
</style>

