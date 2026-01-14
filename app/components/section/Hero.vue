<template lang="pug">
section.hero
  div.hero__group
    h1.hero__title La Couleur au service de vos gravures
    p.hero__subtitle Sublimez vos gravures lasers avec nos poudres de couleurs vibrantes, durables et faciles à utiliser.
    ComponentButton(title="Commander")
  NuxtImg.hero__image(src="hero.webp")
</template>

<style lang="sass" scoped>
.hero 
  border-bottom: $border-section-separator solid $accent2

  &__group
    position: absolute
    text-align: center
    margin-inline: $phi1
    line-height: 1.2

  &__title
    margin-block: $phi1 $phi1
    font-size: $phi2

  &__subtitle
    margin-block: 0 $phi2
    font-size: $phi1

  &__image
    display: block
    width: 100%
</style>
