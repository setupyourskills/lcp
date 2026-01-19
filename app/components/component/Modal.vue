<template lang="pug">
div.modal(v-if="getModalState(props.modalName)")
  div.modal__container
    slot
    ComponentButton(title="Fermer" @click="setModalState(props.modalName, false)")
</template>

<script setup lang="ts">
import type { IModalProps } from "~/assets/types/interfaces.d.ts"

const { setModalState, getModalState } = useModalsState();

const props = withDefaults(defineProps<IModalProps>(), {
  modalName: "",
});
</script>

<style lang="sass" scoped>
.modal
  z-index: 2
  position: fixed
  inset: 0
  margin-inline: auto
  min-width: 320px
  max-width: 1280px
  background-color: rgba(0,0,0,.25)
  backdrop-filter: blur(6px)

.modal__container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: absolute
  inset: 0
  background-color: $element-background-color

  @media screen and (min-width: 600px)
    inset-block: $phi3
    border-block: $border-section-framed solid $accent2

  @media screen and (min-width: 850px)
    @include frame
    inset-inline: $phi3
</style>
