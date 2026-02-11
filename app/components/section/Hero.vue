<template lang="pug">
section.hero
  div.hero__group.margin-space
    h1.hero__title(v-html="component_article_header.component_name") 
    p.hero__subtitle(v-html="component_article_header.component_content")
    ComponentButton.hero__button-component(:title="component_button.component_name" @click="setModalState('purchase', true)")
  NuxtImg.hero__image(:src="component_image.component_name")
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { setModalState } = useModalsState();
const { getLanguage } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/hero_view?lang=${getLanguage()}`
);

const {
  component_article_header,
  component_button,
  component_image,
} = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.hero 
  border-bottom: $border-section-separator solid $accent2

  &__group
    position: absolute
    text-align: center
    line-height: 1.2

    @media screen and (min-width: 600px)
      text-align: left

    @media screen and (min-width: 1024px)
      margin-top: 60px

  &__title

    @media screen and (min-width: 850px)
      width: 80%

  &__subtitle

    @media screen and (min-width: 650px)
      width: 70%

    @media screen and (min-width: 850px)
      width: 65%

  &__image
    display: block
    width: 100%
    height: 640px
    object-position: right bottom
    object-fit: cover

    @media screen and (min-width: 1024px)
      height: 800px

  &__button-component:hover
    box-shadow: 4px 4px 4px 0px gray
</style>
