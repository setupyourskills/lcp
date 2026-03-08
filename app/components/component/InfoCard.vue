<template lang="pug">
div.info-card-component.info-card-component--number(:class="{ 'info-card-component--transition': props.transition }")
  div.info-card-component__number.font-l(v-if="props.number") {{ props.number }}
  h3.info-card-component__title.font-l {{ props.title }}
  p.info-card-component__content.font-s(v-clean-html="props.content")
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  number?: number | null;
  title: string;
  content: string;
  style?: string;
  transition?: boolean;
}>(), {
  transition: true
});
</script>

<style lang="sass" scoped>
.info-card-component
  text-align: center
  width: 260px

  &--transition
    border-radius: 25px
    transition: background-color .2s ease-out

    &:hover
      background-color: $second-background-color

  &__number
    display: flex
    justify-content: center
    align-items: center
    margin-inline: auto
    margin-block: $phi-1 $phi1
    aspect-ratio: 1 / 1;
    width: $phi3
    border-radius: 50%
    background-color: $accent2

  &__title::after
    content: ''
    display: block
    margin: $phi-1 auto
    width: $phi3
    height: 6px
    background-color: $accent2

  &__content
    font-style: v-bind("props.style")
    padding: 0 $phi-1 $phi-1
</style>
