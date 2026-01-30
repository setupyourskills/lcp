<template lang="pug">
div.modal(v-if="isModalOpen")
  div.modal__container(ref="refModalContainer")
    ComponentCloseModal(:componentName="props.modalName" componentType="modal")
    div.modal__icon
      slot(name="icon")
    h2.modal__title.font-xl {{ props.title }}
    p.modal__content.font-m(v-html="props.content")
    slot
</template>

<script setup lang="ts">
import type { IModalProps, IModalsState } from "~/assets/types/interfaces.d.ts"

const { setModalState, getModalState } = useModalsState();

const props = withDefaults(defineProps<IModalProps>(), {
  modalName: "",
  title: "Title",
  content: "Content"
});

const refModalContainer = ref<HTMLElement | null>(null);
const isModalOpen = computed(() => getModalState(props.modalName as keyof IModalsState));
const closeModal = () => setModalState(props.modalName as keyof IModalsState, false);

const handleClickOutsideModal = (e: MouseEvent) => {
  if (!refModalContainer.value) return

  const clickedInsideModal = refModalContainer.value.contains(e.target as Node)

  if (!clickedInsideModal) closeModal();
}

watch(isModalOpen, async (open) => {
  if (!open) return
  await nextTick();

  document.addEventListener('mousedown', handleClickOutsideModal)

  return () => document.removeEventListener('mousedown', handleClickOutsideModal)
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
  overflow-y: auto

  &__close
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
    margin-block: $phi3 $phi2

  &__title
    margin-block: 0 $phi-1

  &__content
    margin-block: 0 $phi2
</style>
