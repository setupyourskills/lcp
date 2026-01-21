<template lang="pug">
div.modal(v-if="isOpen")
  div.modal__container(ref="refModalContainer")
    slot
    ComponentButton(title="Fermer" @click="close()")
</template>

<script setup lang="ts">
import type { IModalProps, IModalsState } from "~/assets/types/interfaces.d.ts"

const { setModalState, getModalState } = useModalsState();

const props = withDefaults(defineProps<IModalProps>(), {
  modalName: "",
});

const refModalContainer = ref<HTMLElement | null>(null);
const isOpen = computed(() => getModalState(props.modalName as keyof IModalsState));
const close = () => setModalState(props.modalName as keyof IModalsState, false)

const handleClickOutside = (e: MouseEvent) => {
  if (!refModalContainer.value) return

  const clickedInside = refModalContainer.value.contains(e.target as Node)

  if (!clickedInside) close();
}

watch(isOpen, async (open) => {
  if (!open) return
    await nextTick();

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
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
