<template lang="pug">
div.box-component(
  @click="setPspState(props.boxName)"
  :class="{ 'activate-element': getPspState(props.boxName)}"
)
  div.box-component__logo
    NuxtImg.box-component__logo-img(:src="`${props.boxName}.png`")
</template>

<script setup lang="ts">
import type { IBoxProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IBoxProps>(), {
  boxName: "paypal",
});

const { getPspState, setPspState } = usePspsState();
</script>

<style lang="sass" scoped>
.box-component
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
  transition: border-bottom .4s ease-out, background-color .2s ease-out, transform .2s ease-out, box-shadow .25s ease-out

  &:hover
    transition: border-bottom .4s ease-out, background-color .2s ease-out, transform .2s ease-out, box-shadow .25s ease-out
    box-shadow: 4px 4px 4px 0px $secondary
    transform: translate(-3px, -3px)

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
