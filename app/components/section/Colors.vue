<template lang="pug">
section.colors
  ComponentArticleHeader.colors__title-component(:title="articleHeader.title" :content="articleHeader.content")
  div.colors__group
    ComponentColorCard.colors__color-card-component(
      v-for="(color, idx) in colors"
      :key="idx"
      :color-name="color"
    )
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "<span class='font-accent'>9 couleurs</span> et des millions d'idées !",
  content: "<span class='font-bold'>Sélectionnez</span> les couleurs <span class='font-bold'> parfaites</span> pour <span class='font-bold'> vos projets uniques !</span>",
};
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
    text-align: center
    max-width: 150px
</style>
