<template lang="pug">
button.button-component.font-l(
  :disabled="props.redirect"
  :class="{ 'deactivate-big-button': props.redirect }"
) {{ props.redirect ? props.redirectLabel : props.title }}
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  redirect?: boolean;
  redirectLabel?: string;
}>();
</script>

<style lang="sass">
.button-component
  @include transition
  padding: $phi1 $phi3
  min-width: 240px
  border: none
  border-radius: 25px
  border-bottom: 6px solid $accent1
  background-color: $accent2
  cursor: pointer

  &:active
    background-color: $accent1
    box-shadow: none
    transform: translate(0, 0)
    transition: none
</style>
