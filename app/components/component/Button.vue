<template lang="pug">
div.button-component
  p.button-component__title {{ props.title }}
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Default content"
  },
});
</script>

<style lang="sass">
.button-component
  text-align: center
  padding-block: $phi-1
  border-radius: 25px
  background-color: $accent1
  box-shadow: 4px 4px 4px 0px $secondary

  &__title
    margin: 0
    font-size: $phi1_5
    font-weight: bold
</style>
