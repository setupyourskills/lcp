<template lang="pug">
div.faq-component
  details.faq-component__details
    summary.faq-component__question.font-m {{ props.question }}
    p.faq-component__answer.font-s(v-html="props.answer")
</template>

<script setup lang="ts">
import type { IFaqSection } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IFaqSection>(), {
  question: "Question",
  answer: "Answer",
  height: 200,
});
const height = ref(`${props.height}px`);

function calculateHeight() {
  let h = props.height;

  if (typeof window !== 'undefined') {
    if (window.matchMedia("(min-width: 700px)").matches) h = props.height - 60 * 2;
    else if (window.matchMedia("(min-width: 400px)").matches) h = props.height - 60;
  }

  return `${h}px`;
}

onMounted(() => {
  height.value = calculateHeight();

  const w700 = window.matchMedia('(min-width: 700px)');
  const w400 = window.matchMedia('(min-width: 400px)');

  const handler = () => height.value = calculateHeight();

  w700.addEventListener('change', handler);
  w400.addEventListener('change', handler);

  onUnmounted(() => {
    w700.removeEventListener('change', handler);
    w400.removeEventListener('change', handler);
  });
});
</script>

<style lang="sass" scoped>
.faq-component
  position: relative

  &__details
    @include transition
    border-radius: 0 25px 25px 25px
    border-bottom: 6px solid $accent2
    background-color: $second-background-color
    cursor: pointer

    &::details-content
      height: 0
      overflow: clip
      transition: all 0.5s ease, content-visibility 0.5s ease allow-discrete;

    &[open]::details-content
      height: v-bind(height)

    &[open]
      box-shadow: 4px 4px 4px 0px $secondary
      transform: translate(-3px, -3px)

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

    @media screen and (min-width: 600px)
      text-align: left

  summary::marker
    content: none
</style>
