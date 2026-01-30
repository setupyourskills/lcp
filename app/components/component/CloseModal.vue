<template lang="pug">
div.close-modal
  button.close-modal__button(@click="closeComponent(props.componentType)") ✖
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
</style>
