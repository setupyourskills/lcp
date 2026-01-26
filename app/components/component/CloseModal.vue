<template lang="pug">
div.close-modal
  button.close-modal__button(@click="closeModal()") ✖
</template>

<script setup lang="ts">
import type { ICloseModalProps, IModalsState } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<ICloseModalProps>(), {
  modalName: "",
});

const { setModalState } = useModalsState();

const closeModal = () => {
  setModalState(props.modalName as keyof IModalsState, false);
};
</script>

<style lang="sass" scoped>
.close-modal

  &__button
    position: absolute
    right: $phi1
    top: $phi2
    font-size: $phi2
    color: $accent1
    background: none
    border: none
    cursor: pointer

    @media screen and (min-width: 600px)
      right: $phi2

    @media screen and (min-width: 850px)
      right: $phi3
</style>
