<template lang="pug">
div.modal(v-if="isModalOpen")
  div.modal__container(ref="refModalContainer")
    slot
    ComponentButton(title="Fermer" @click="closeModal()")
</template>

<script setup lang="ts">
import type { IModalProps, IModalsState } from "~/assets/types/interfaces.d.ts"

const { setModalState, getModalState } = useModalsState();

const props = withDefaults(defineProps<IModalProps>(), {
  modalName: "",
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

.modal__container
  display: flex
  flex-direction: column
  align-items: center
  position: absolute
  inset: 0
  background-color: $element-background-color
  overflow-y: auto

  @media screen and (min-width: 600px)
    inset-block: $phi3
    border-block: $border-section-framed solid $accent2

  @media screen and (min-width: 850px)
    @include frame
    inset-inline: $phi3
</style>
