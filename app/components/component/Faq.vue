<template lang="pug">
div.faq-component
  details
    summary
      span {{ props.question }}
  div.content
    p(v-html="props.answer")
</template>

<script setup lang="ts">
import type { IFaqSection } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IFaqSection>(), {
  question: "Question",
  answer: "Answer",
});
</script>

<style lang="sass" scoped>
.faq-component
  position: relative
  cursor: pointer

  details
    border-radius: 25px 25px 0 0
    border-top: 6px solid $accent2
    background-color: $second-background-color
    overflow: hidden
    transition: border-top .5s ease-out

    &:hover
      border-top: 6px solid $accent1
      transition: border-top .4s ease-out

  summary
    display: block
    align-items: center
    padding-block: $phi-1
    padding-inline: $phi1_5 $phi3
    font-weight: bold

  summary::-webkit-details-marker
    display: none

  summary::marker
    content: none

  span
    position: relative
    display: flex
    align-items: center

  span::before
    content: '+'
    position: absolute
    right: -$phi1
    font-size: $phi2
    color: $accent1

  div.content
    text-align: center
    box-sizing: border-box
    max-height: 0
    border-radius: 0 0 25px 25px
    background-color: $second-background-color
    overflow: hidden
    padding-inline: $phi1_5
    transition: max-height 400ms ease-out

    @media screen and (min-width: 600px)
      text-align: left

  details[open] + div.content
    max-height: 300px
    box-shadow: 4px 4px 4px 0px $secondary
    transform: translate(-3px, -3px)
    transition: max-height 400ms ease-out
    background-color: $accent2

  details[open] span::before
    content: "-"
    font-size: $phi2
    font-weight: bold
    color: $accent1

  details[open] 
    box-shadow: 4px 4px 4px 0px $secondary
    transform: translate(-3px, -3px)
    background-color: $accent2
</style>
