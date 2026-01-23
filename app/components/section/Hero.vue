<template lang="pug">
section.hero
  div.hero__group.margin-space
    h1.hero__title(v-html="hero.title") 
    p.hero__subtitle(v-html="hero.subtitle")
    ComponentButton.hero__button-component(title="Commander" @click="setModalState('purchase', true)")
  NuxtImg.hero__image(src="hero.webp")
</template>

<script setup lang="ts">
import type { HeroSection } from "~/assets/types/types.d.ts"

const hero: HeroSection = {
  title: "La <span class='font-title-accent'>Couleur</span> au service de vos gravures !",
  subtitle: "Sublimez vos gravures lasers avec nos poudres de couleurs intenses, durables et faciles à utiliser.",
};

const { setModalState } = useModalsState();
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
</style>
