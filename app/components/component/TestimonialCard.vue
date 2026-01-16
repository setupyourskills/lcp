<template lang="pug">
div.testimonial-card-component
  p.testimonial-card-component__content.font-s {{ props.content }}
  div.testimonial-card-component__user
    div.testimonial-card-component__avatar {{ props.avatar }}
    div.testimonial-card-component__details
      span.testimonial-card-component__name.font-m {{ props.name }}
      span.testimonial-card-component__country.font-s {{ props.country }}
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
  width: 230px
  padding: $phi1
  border-radius: 25px 25px 25px 0
  background-color: $element-background-color
  box-shadow: 4px 4px 4px 0px $secondary

  &__content
    text-align: center

  &__user
    display: grid
    grid-template-columns: 20% 80%
    gap: $phi2_5
    margin-block: $phi1 0

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
</style>
