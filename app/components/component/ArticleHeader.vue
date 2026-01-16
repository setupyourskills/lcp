<template lang="pug">
div.title-component(:class="{ 'title-component--mark': props.mark }")
  h2.title-component__title.font-xl(v-html="props.title")
  p.title-component__content.font-m(v-html="props.content")
</template>

<script setup lang="ts">
import type { IArticleHeaderProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IArticleHeaderProps>(), {
  title: "Title",
  content: "Content",
  mark: true,
});
</script>

<style lang="sass" scoped>
.title-component
  text-align: center
  margin-block: $phi3 $phi2

  &__content
    margin-block: $phi-1 0

  &--mark::before
    content: ''
    position: absolute
    left: 0
    width: $phi-1
    height: $phi3
    background-color: $accent2
</style>
