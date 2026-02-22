<template lang="pug">
div.custom-select
  select.font-s(v-model="selected")
    option(
      v-for="opt in options"
      :value="opt.name"
    ) {{ opt.label }}
</template>

<script setup lang="ts">
import type { ISelectProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<ISelectProps>(), {
  options: () => [
    { name: "en", label: "English" },
    { name: "fr", label: "Français" },
    { name: "zht", label: "繁体中文" },
    { name: "zhs", label: "简体中文" }
  ],
});

const selected = defineModel();
</script>

<style lang="sass" scoped>
.custom-select
  position: relative

  select
    box-sizing: border-box;
    appearance: none
    width: 100%
    padding: $phi-1 $phi1_5
    background-color: $second-background-color
    border: 4px solid $accent2
    outline: none
    border-radius: 15px
    cursor: pointer
    font-weight: bold

  &::before
    content: "⏶"
    position: absolute
    top: 1px
    right: $phi1_5
    color: $accent1
    font-size: $phi1_5
    pointer-events: none

  &::after
    content: "⏷"
    position: absolute
    bottom: 1px
    right: $phi1_5
    color: $accent1
    font-size: $phi1_5
    pointer-events: none
</style>
