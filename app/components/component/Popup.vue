<template lang="pug">
div.popup(v-if="isPopupOpen")
  div.popup__container
    slot
    ComponentButton(title="Fermer" @click="closePopup()")
</template>

<script setup lang="ts">
import type { IPopupProps, IPopupsState } from "~/assets/types/interfaces.d.ts"

const { setPopupState, getPopupState } = usePopupsState();

const props = withDefaults(defineProps<IPopupProps>(), {
  popupName: "",
});

const isPopupOpen = computed(() => getPopupState(props.popupName as keyof IPopupsState));
const closePopup = () => setPopupState(props.popupName as keyof IPopupsState, false);
</script>

<style lang="sass" scoped>
.popup
  z-index: 2
  position: fixed
  inset-inline: 0
  bottom: 0
  margin-inline: auto
  min-width: 320px
  max-width: 1280px

.popup__container
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  inset: 0
  background-color: $element-background-color

  @media screen and (min-width: 600px)
    border-top: $border-section-framed solid $accent2

  @media screen and (min-width: 850px)
    @include frame
    margin-inline: $phi3
    margin-bottom: $phi3
</style>
