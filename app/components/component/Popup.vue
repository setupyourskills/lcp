<template lang="pug">
div.popup.popup--appear(v-if="isDisplay")
  ComponentCloseModal(:componentName="props.popupName" componentType="popup")
  div.popup__group.margin-space
    h4.popup__title {{ props.title }}
    p.popup__content(v-html="props.content")
    slot
</template>

<script setup lang="ts">
import type { IPopupProps, IPopupsState } from "~/assets/types/interfaces.d.ts"

const { setPopupState, getPopupState } = usePopupsState();

const props = withDefaults(defineProps<IPopupProps>(), {
  popupName: "",
  title: "Title",
  content: "Content"
});

const isPopupOpen = computed(() => getPopupState(props.popupName as keyof IPopupsState));

const isDisplay = ref(false)

watch(isPopupOpen, (newVal) => {
  if (newVal) {
    isDisplay.value = true
    nextTick(() => { })
  } else {
    const el = document.querySelector('.popup')
    if (el) {
      el.classList.remove('popup--appear')
      el.classList.add('popup--disappear')
      setTimeout(() => { isDisplay.value = false }, 500)
    }
  }
});
</script>

<style lang="sass" scoped>
.popup
  z-index: 2
  position: fixed
  bottom: 0
  margin-inline: auto
  box-sizing: border-box;
  min-width: 320px
  max-width: 1280px
  border-top: $border-section-framed solid $accent2
  background-color: $element-background-color

  &__close
    position: absolute
    right: $phi1
    top: $phi1
    font-size: $phi2
    color: $accent1
    background: none
    border: none
    cursor: pointer

    @media screen and (min-width: 600px)
      right: $phi2

    @media screen and (min-width: 850px)
      right: $phi3
    
  &__group
    margin-bottom: $phi2
    text-align: center

    @media screen and (min-width: 600px)
      text-align: left

  &__title
    margin-inline: auto
    margin-block: $phi2 $phi1

  &__content
    margin-block: 0 $phi2

  &--appear
    animation: popupFadeIn 0.5s forwards

  &--disappear
    animation: popupFadeOut 0.5s forwards

@keyframes popupFadeOut
  from 
    transform: translateY(0) 
    opacity: 1
  to 
    transform: translateY(100%) 
    opacity: 0

@keyframes popupFadeIn
  from  
    transform: translateY(100%)
    opacity: 0
  to   
    transform: translateY(0) 
    opacity: 1
</style>
