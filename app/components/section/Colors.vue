<template lang="pug">
section.colors
  ComponentTitle.colors__title-component
    template(#title) #[span.font-accent 9 couleurs] et des millions d'idées !
    template(#content) #[span.font-bold Sélectionnez] les couleurs #[span.font-bold parfaites] pour #[span.font-bold vos projets uniques !]
  div.colors__group
    ComponentColorCard.colors__color-card-component(
      v-for="(color, idx) in colors"
      :key="idx"
      :color-name="color"
    )
</template>

<script setup lang="ts">
const colors: string[] = [
  "red",
  "blue",
  "green",
  "purple",
  "gold",
  "orange",
  "white",
  "yellow",
  "black",
];
</script>

<style lang="sass" scoped>
.colors 
  margin-top: $phi3

  &__group
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: $phi1_5
    margin-inline: auto
    margin-top: $phi2
    width: 300px

  &__color-card-component
    flex: 0 1 28%
    padding: 1rem
    text-align: center
    max-width: 150px
</style>
