<template lang="pug">
section.hero
  div.hero__group.margin-space
    h1.hero__title La Couleur au service de vos gravures
    p.hero__subtitle Sublimez vos gravures lasers avec nos poudres de couleurs vibrantes, durables et faciles à utiliser.
    ComponentButton.hero__button-component(title="Commander")
  NuxtImg.hero__image(src="hero.webp")
</template>

<style lang="sass" scoped>
.hero 
  border-bottom: $border-section-separator solid $accent2

  &__group
    position: absolute
    text-align: center
    line-height: 1.2

    @media screen and (min-width: 600px)
      align-items: start

  &__title

    @media screen and (min-width: 850px)
      width: 80%

  &__subtitle

    @media screen and (min-width: 650px)
      width: 70%

    @media screen and (min-width: 850px)
      width: 65%

  &__button-component
    margin-inline: auto

    @media screen and (min-width: 600px)
      margin-inline: 0

  &__image
    display: block
    width: 100%
    height: 640px
    object-position: right bottom
    object-fit: cover
</style>
