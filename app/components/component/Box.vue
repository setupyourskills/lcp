<template lang="pug">
div.box-component(
  @click="setPspState(props.boxName)"
  :class="{ 'activate-element': getPspState(props.boxName)}"
)
  p.box-component__content.font-m {{ props.boxName }}
</template>

<script setup lang="ts">
import type { IBoxProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IBoxProps>(), {
  boxName: "stripe",
});

const { getPspState, setPspState } = usePspsState();
</script>

<style lang="sass" scoped>
.box-component
  @include transition
  display: flex
  justify-content: center
  margin-block: 0
  padding-inline: $phi1
  min-width: 120px
  border-radius: 15px
  border: 3px solid $accent2
  background-color: $second-background-color
  cursor: pointer

  &__content
    margin: $phi-2
</style>
