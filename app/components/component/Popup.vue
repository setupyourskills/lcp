<template lang="pug">
Transition
  div.popup.popup--appear(v-if="isDisplay")
    ComponentCloseModal(
      :componentName="props.popupName"
      componentType="popup"
    )
    div.popup__group.margin-space
      div.popup__group-title
        div.popup__icon
          slot(name="icon")
        h4.popup__title {{ props.title }}
      p.popup__content(v-html="props.content")
      slot
</template>

<script setup lang="ts">
const props = defineProps<{
  popupName: keyof IPopupsState;
  title: string;
  content: string;
}>();

const isDisplay = ref(false)

const { getPopupState } = usePopupsState();

const isPopupOpen = computed(() => getPopupState(props.popupName));

watch(isPopupOpen, (newVal) => {
  if (newVal) isDisplay.value = true
  else {
    const el = document.querySelector('.popup')

    if (el) {
      el.classList.remove('popup--appear')
      el.classList.add('popup--disappear')
      setTimeout(() => { isDisplay.value = false }, POPUP_DISAPPEAR_TIMEOUT)
    }
  }
});
</script>

<style lang="sass" scoped>
.popup
  z-index: 20
  position: fixed
  bottom: 0
  margin-inline: auto
  box-sizing: border-box;
  min-width: 320px
  max-width: 1280px
  border-top: $border-section-framed solid $accent2
  background-color: $element-background-color

  &--appear
    animation: popupFadeIn 0.5s forwards

  &--disappear
    animation: popupFadeOut 0.5s forwards

  &__group
    display: flex
    flex-direction: column
    justify-content: center
    margin-bottom: $phi2
    text-align: center

    @media screen and (min-width: 600px)
      text-align: left

    &-title
      display: flex
      flex-direction: column
      align-items: center

      @media screen and (min-width: 600px)
        flex-direction: row
        gap: $gap-space

  &__icon
    @include svg-icon
    margin-block: $phi2 $phi-2

  &__title
    margin-block: 0 $phi1

    @media screen and (min-width: 600px)
      margin-block: $phi2 $phi1

  &__content
    margin-block: 0 $phi2

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
