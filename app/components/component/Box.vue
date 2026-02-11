<template lang="pug">
div.box-component(
  @click="setPspState(props.boxName)"
  :class="{ 'activate-element': getPspState(props.boxName)}"
)
  div.box-component__logo
    NuxtImg.box-component__logo-img(:src="`${props.boxName}.png`")
  p.box-component__content.font-s {{ props.showName }}
</template>

<script setup lang="ts">
import type { IBoxProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IBoxProps>(), {
  boxName: "paypal",
  showName: "Paypal",
});

const { getPspState, setPspState } = usePspsState();
</script>

<style lang="sass" scoped>
.box-component
  @include transition
  display: flex
  justify-content: center
  align-items: center
  margin-block: 0
  padding-inline: $phi1
  width: 160px
  height: 62px
  border-radius: 15px
  border-bottom: 6px solid $accent2
  background-color: $second-background-color
  cursor: pointer

  &__logo
    display: flex
    justify-content: center
    align-items: center
    padding: $phi-2

  &__logo-img
    height: 25px

  &__content
    line-height: $phi1_5
</style>
