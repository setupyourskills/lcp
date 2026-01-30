<template lang="pug">
div.color-card-component
  div.color-card-component__component(
    @click="incColor"
    @contextmenu.prevent="decColor"
    :class="{ 'activate-element': counterColor }"
  )
    p.color-card-component__color-name.font-m {{ props.colorName }}

  p.color-card-component__label.font-deactivate.font-m(
    v-if="props.componentType === 'modal'"
    :class="{ 'font-accent font-bold': counterColor }"
    ) {{ counterColor ? `x ${counterColor}` : 0 }}
</template>

<script setup lang="ts">
import type { IColorCardProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IColorCardProps>(), {
  colorName: "red",
  componentType: "normal",
});

const { getCounterColorsState, increaseColor, decreaseColor } = useCounterColorsState();

const counterColor = computed(() => getCounterColorsState(props.colorName));

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
    background-color: $element-background-color

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
      width: $phi3
      aspect-ratio: 1 / 1;
      border-radius: 50%
      background-color: v-bind("props.colorName")

  &__label
    margin: 0
</style>
