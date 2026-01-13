<template lang="pug">
div.testimonial-card-component
  p.testimonial-card-component__content {{ props.content }}
  div.testimonial-card-component__user
    div.testimonial-card-component__avatar {{ props.avatar }}
    div.testimonial-card-component__details
      span.testimonial-card-component__name {{ props.name }}
      span.testimonial-card-component__country {{ props.country }}
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    default: "Default content"
  },
  avatar: {
    type: String,
    default: "Default avatar"
  },
  name: {
    type: String,
    default: "Default userName"
  },
  country: {
    type: String,
    default: "Default country"
  }
})
</script>

<style lang="sass" scoped>
.testimonial-card-component
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  padding: 0 $phi1
  border-radius: 25px 25px 25px 0
  background-color: $element-background-color
  box-shadow: 4px 4px 4px 0px $secondary

  &__content
    margin-inline: $phi1
    margin-block: $phi1 0
    text-align: center
    font-size: $phi-0_75
    font-style: italic

    &::after
      content: ''
      display: block
      margin-inline: auto
      margin-top: $phi-1
      width: $phi3
      height: 6px
      background-color: $accent2

  &__user
    display: grid
    grid-template-columns: 20% 80%
    gap: $phi2
    margin-block: $phi1

  &__avatar
    aspect-ratio: 1 / 1;
    width: $phi3
    border: 3px solid $secondary
    border-radius: 50%

  &__details
    display: flex
    flex-direction: column

  &__name
    font-weight: bold

  &__country
    font-size: $phi-0_5
</style>
