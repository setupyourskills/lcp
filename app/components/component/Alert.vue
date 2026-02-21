<template lang="pug">
div.alert.alert--appear(v-if="isDisplay")
  div.alert__container
    div.alert__icon
      slot(name="icon")
    p.alert__content.font-s(v-html="getAlertContent()")
</template>

<script setup lang="ts">
import type { IAlertProps, IPopupsState } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IAlertProps>(), {
  alertName: "alertInfo",
});

const isDisplay = ref(false);

const { getPopupState, setPopupState, getAlertContent } = usePopupsState();

const isAlertOpen = computed(() => getPopupState(props.alertName));

const OPEN_POPUP_TIMEOUT = 2000;

watch(isAlertOpen, (newVal) => {
  if (newVal) {
    isDisplay.value = true

    setTimeout(() => {
     setPopupState(props.alertName, false);
    }, OPEN_POPUP_TIMEOUT);
  } else {
    const el = document.querySelector('.alert')
    if (el) {
      el.classList.remove('alert--appear')
      el.classList.add('alert--disappear')
      setTimeout(() => { isDisplay.value = false }, 500)
    }
  }
});
</script>

<style lang="sass" scoped>
.alert
  z-index: 20
  position: fixed
  top: $phi1
  max-width: 320px
  border-radius: 25px
  border-bottom: $border-section-framed solid $accent2
  box-shadow: 4px 4px 4px 0px $secondary
  background-color: $element-background-color

  @media screen and (min-width: 600px)
    max-width: 75vw

  &__container
    display: flex
    flex-direction: column
    align-items: center
    margin: $phi1

  &__icon
    width: $phi2
    margin-block: 0

  &__content
    margin: 0
    text-align: left

  &--appear
    animation: alertFadeIn 0.5s forwards

  &--disappear
    animation: alertFadeOut 0.5s forwards

@keyframes alertFadeOut
  from 
    transform: translateY(0) 
    opacity: 1
  to 
    transform: translateX(-100%) 
    opacity: 0

@keyframes alertFadeIn
  from  
    transform: translateX(-100%)
    opacity: 0
  to   
    transform: translateY(0) 
    opacity: 1
</style>
