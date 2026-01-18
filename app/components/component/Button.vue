<template lang="pug">
button.button-component.font-l {{ props.title }}
</template>

<script setup lang="ts">
import type { IButtonProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IButtonProps>(), {
  title: "Title",
});
</script>

<style lang="sass">
.button-component
  padding-inline: $phi3
  padding-block: $phi1
  min-width: 240px
  border: none
  border-radius: 25px
  background-color: $accent1
  box-shadow: 4px 4px 4px 0px $secondary
  cursor: pointer
</style>
