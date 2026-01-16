<template lang="pug">
section.newsletter
  div.newsletter__frame
    div.newsletter__group.margin-space
      ComponentArticleHeader.newsletter__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
      div.newsletter__form
        ComponentInput.newsletter__input(placeholder="Email")
        ComponentButton.newsletter__button(title="S'abonner")
  div.newsletter__info
    p.font-xs(v-html="info.spam") 
    p.font-xs(v-html="info.confidential") 
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "Rejoignez <span class='font-accent'>la newsletter</span>",
  content: "<span class='font-bold'>Recevez</span> les dernières <span class='font-bold'>nouvelles</span> pour <span class='font-bold'>rester toujours informé !</span>",
};
const info = {
  spam: "<span class='font-accent font-bold font-normal'>🗹</span> Pas de Spam",
  confidential: "<span class='font-accent font-bold font-normal'>🗹</span> Votre Email reste confidentiel"
}
</script>

<style lang="sass" scoped>
.newsletter
  margin-top: $phi3

  &__title-component
    margin-top: $phi2

  &__frame
    border: $border-section-framed solid $accent2
    border-radius: 25px
    background-color: $element-background-color

  &__group
    padding-block: 0 $phi2

  &__form
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    margin-inline: auto
    gap: $gap-space

  &__input
    flex: 0 1 450px

  &__info
    display: flex
    justify-content: center
    flex-wrap: wrap
    align-items: center
    column-gap: $gap-space
</style>
