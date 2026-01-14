<template lang="pug">
section.colors
  ComponentArticleHeader(:title="articleHeader.title" :content="articleHeader.content")
  div.colors__group
    ComponentColorCard.colors__color-card-component(
      v-for="color in colors"
      :key="color"
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

  &__group
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: $gap_space
</style>
