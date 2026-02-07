<template lang="pug">
div.switch-component(@click="handleSwitchButton" :class="{ 'switch-component--back-on' : buttonState }")
  button.switch-component__button(:class="{ 'switch-component__button--on' : buttonState }")
</template>

<script setup lang="ts">
const emit = defineEmits();

const buttonState = ref(false)

const handleSwitchButton = () => {
  buttonState.value = !buttonState.value

  emit("update:modelValue", buttonState.value);
}
</script>

<style lang="sass">
.switch-component
  position: relative
  width: 56px
  height: 28px
  border-radius: 25px
  background-color: $deactivate-button-text
  cursor: pointer

  &--back-on
    background-color: $accent2

  &__button
    position: absolute
    top: 4px
    left: 4px
    width: 20px
    height: 20px
    border: none
    border-radius: 50%
    background-color: $accent1
    transition: transform .1s ease-out
    cursor: pointer

    &--on
      transform: translate(28px, 0)
      transition: transform .1s ease-out
</style>
