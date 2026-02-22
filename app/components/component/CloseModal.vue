<template lang="pug">
div.close-modal
  button.close-modal__button(@click="closeComponent(props.componentType)")
    div.close-modal__icon
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z")
</template>

<script setup lang="ts">
import type { ICloseComponentProps, IModalsState, IPopupsState } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<ICloseComponentProps>(), {
  componentType: "modal",
  componentName: "",
});

const { setModalState } = useModalsState();
const { setPopupState } = usePopupsState();

const closeComponent = (componentType: string) => {
  if (componentType === "modal") setModalState(props.componentName as keyof IModalsState, false);
  else if (componentType === "popup") setPopupState(props.componentName as keyof IPopupsState, false);
};
</script>

<style lang="sass" scoped>
.close-modal

  &__button
    position: absolute
    right: $phi1
    top: $phi1
    font-size: $phi2
    color: $accent1
    background: none
    border: none
    cursor: pointer

    @media screen and (min-width: 600px)
      top: $phi2
      right: $phi2

  &__icon
    fill: $accent1
    width: 60px
</style>
