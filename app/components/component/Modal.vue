<template lang="pug">
Transition
  div.modal(
    v-if="isModalOpen"
    :class="{ 'modal--activated': isModalOpen }"
  )
    div.modal__container
      ComponentCloseModal(
        :componentName="props.modalName"
        componentType="modal"
      )
      div.modal__icon
        slot(name="icon")
      h2.modal__title.font-xl {{ props.title }}
      p.modal__content.font-m(v-html="props.content")
      slot
</template>

<script setup lang="ts">
const props = defineProps<{
  modalName: keyof IModalsState;
  title: string;
  content: string;
}>();

const { getModalState } = useModalsState();

const isModalOpen = computed(() => getModalState(props.modalName));
</script>

<style lang="sass" scoped>
.modal
  z-index: 19
  position: fixed
  inset: 0
  margin-inline: auto
  min-width: 320px
  max-width: 1280px
  background-color: rgba(0,0,0,.25)
  backdrop-filter: blur(6px)
  overflow-y: auto

  &__container
    position: absolute
    text-align: center
    padding-inline: $phi1
    padding-block: 0 $phi3
    border-bottom: $border-section-framed solid $accent2
    background-color: $element-background-color

    @media screen and (min-width: 600px)
      margin-top: $phi3
      padding-inline: $phi2
      border-block: $border-section-framed solid $accent2

    @media screen and (min-width: 850px)
      @include frame
      inset-inline: $phi3
      padding-inline: $phi3

  &__icon
    @include svg-icon
    margin-block: $phi3 $phi2
    margin-inline: auto

  &__title
    margin-block: 0 $phi-1

  &__content
    margin-block: 0 $phi2
</style>
