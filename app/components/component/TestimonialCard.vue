<template lang="pug">
div.testimonial-card-component
  p.testimonial-card-component__content.font-s {{ props.content }}
  div.testimonial-card-component__user
    div.testimonial-card-component__avatar.font-bold.font-l
      span {{ props.avatar }}
    div.testimonial-card-component__details
      p.testimonial-card-component__name.font-bold.font-m {{ props.name }}
      p.testimonial-card-component__country.font-xs {{ props.country }}
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string;
  avatar: string;
  name: string;
  country: string;
}>();
</script>

<style lang="sass" scoped>
.testimonial-card-component
  @include transition
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 230px
  padding: $phi1
  border-radius: 25px 25px 25px 0
  border-bottom: 6px solid $accent2
  background-color: $second-background-color

  &__content
    text-align: center
    font-style: italic

  &__user
    display: grid
    grid-template-columns: 20% 80%
    gap: $phi2_5
    margin-block: $phi1 0

  &__avatar
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto
    aspect-ratio: 1 / 1;
    width: $phi3
    border: 4px solid $accent2
    border-radius: 50%
    background-color: $element-background-color
    color: $accent1

  &__name
    margin: 0

  &__country
    font-style: italic
</style>
