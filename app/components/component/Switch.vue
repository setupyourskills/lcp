<template lang="pug">
div.switch-component
  div.switch-component__container(@click="handleSwitchButton" :class="{ 'switch-component__container--back-on': props.modelValue, 'switch-component__container--deactivated': props.deactivated, }")
    button.switch-component__button(:class="{ 'switch-component__button--on' : props.modelValue, 'switch-component__button--deactivated': props.deactivated, }")
  div.switch-component__label.font-m {{ props.label }}
</template>

<script setup lang="ts">
import type { ISwitchProps } from '~/assets/types/interfaces.d.ts'

const props = withDefaults(defineProps<ISwitchProps>(), {
  label: 'Label',
  modelValue: false,
  deactivated: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const handleSwitchButton = () => {
  if (props.deactivated) return;

  const newVal = !props.modelValue;
  emit('update:modelValue', newVal);
};
</script>

<style lang="sass">
.switch-component
  display: flex
  justify-content: left
  align-items: center
  gap: $gap_space

  &__container
    position: relative
    width: 56px
    height: 28px
    border-radius: 25px
    background-color: $deactivate-button-text
    cursor: pointer

    &--back-on
      background-color: $accent2

    &--deactivated
      background-color: $deactivate
      cursor: default

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

    &--deactivated
      background-color: $deactivate-button-text
      cursor: default
</style>
