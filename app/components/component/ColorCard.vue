<template lang="pug">
div.color-card-component
  div.color-card-component__component(
    @click="incColor"
    @contextmenu.prevent="decColor"
    :class="{ 'activate-element': props.componentType === 'modal' && counterColor, 'activate-button': props.componentType === 'modal'}"
  )
    p.color-card-component__color-name.font-m {{ props.colorName }}

  div.color-card-component__counter-group.font-m(v-if="props.componentType === 'modal'")
    div.color-card-component__moins(
      @click="decColor"
      :class="counterColor ? 'font-default-color activate-button' : 'deactivate-small-button'"
      ) -
    div.color-card-component__number(
    :class="!counterColor ? 'font-deactivate' : isQuantityEven() ? 'font-validate-color' : 'font-alert-color'"
     ) {{ counterColor ? `${counterColor}` : 0 }}
    div.color-card-component__plus(@click="incColor") +
</template>

<script setup lang="ts">
import type { IColorCardProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IColorCardProps>(), {
  colorName: "red",
  componentType: "normal",
});

const { isQuantityEven, getCounterColorsCookie, increaseColor, decreaseColor } = useCounterColorsCookie();

const counterColor = computed(() => getCounterColorsCookie(props.colorName));

const incColor = () => {
  if (props.componentType === "modal") {
    increaseColor(props.colorName);
  }
};

const decColor = () => {
  if (props.componentType === "modal" && counterColor.value) {
    decreaseColor(props.colorName);
  }
};
</script>

<style lang="sass" scoped>
.color-card-component

  &__component
    @include transition
    display: flex
    justify-content: center
    width: 120px
    border-radius: 25px
    border-bottom: 6px solid $accent2
    background-color: $second-background-color

  &__color-name
    margin-block: 0 $phi1
    text-align: center

    @media screen and (min-width: 600px)
      width: 140px

    &::before
      content: ''
      display: block
      margin-inline: auto
      margin-block: $phi1
      box-sizing: border-box;
      width: $phi3
      aspect-ratio: 1 / 1;
      border-radius: 50%
      border: 4px solid $second-background-color
      background-color: v-bind("props.colorName")

  &__counter-group
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
    margin-top: $phi-2
    font-weight: bold
    border-radius: 10px
    border: 3px solid $accent2
    background-color: $second-background-color

  &__number
    flex: 2
    margin: auto
    border-inline: 2px solid $accent2

  &__moins,
  &__plus
    flex: 1

  &__plus
    cursor: pointer
</style>
