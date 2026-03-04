<template lang="pug">
div.box-component(
  @click="setPspState(props.boxName)"
  :class="{ 'activate-element': getPspState(props.boxName)}"
)
  div.box-component__logo
    NuxtImg(:src="`${props.boxName}.webp`")
</template>

<script setup lang="ts">
const props = defineProps<{
  boxName: string;
}>();

const { getPspState, setPspState } = usePspsState();
</script>

<style lang="sass" scoped>
.box-component
  @include transition
  display: flex
  justify-content: center
  align-items: center
  padding: $phi1
  min-width: 200px
  border-radius: 15px
  border-bottom: 6px solid $accent2
  background-color: $second-background-color
  cursor: pointer

  &__logo
    display: flex
    justify-content: center
    align-items: center

    img
      height: $phi1_5

.activate-element
  cursor: default

  &:hover
    border-color: $accent2
</style>
