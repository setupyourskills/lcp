<template lang="pug">
section.newsletter
  div.newsletter__group
    ComponentArticleHeader.newsletter__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
    div.newsletter__form
      ComponentInput(placeholder="Email")
      ComponentButton(title="S'abonner")
  div.newsletter__info
    p  #[span.font-accent.font-bold.font-normal 🗹] Pas de Spam #[br] #[span.font-accent.font-bold.font-normal 🗹] Votre Email reste confidentiel 
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "Rejoignez <span class='font-accent'>la newsletter</span>",
  content: "<span class='font-bold'>Recevez</span> les dernières <span class='font-bold'>nouvelles</span> pour <span class='font-bold'>rester toujours informé !</span>",
};
</script>

<style lang="sass" scoped>
.newsletter
  margin-top: $phi3

  &__title-component
    margin-top: $phi2

  &__group
    padding-inline: $phi1
    padding-block: 0 $phi2
    border: $border-section-framed solid $accent2
    border-radius: 25px
    background-color: $element-background-color

  &__form
    display: flex
    flex-direction: column
    gap: $gap-space
    
  &__info
    text-align: center

    p
      margin-block: $phi-1
      font-size: $phi-0_5
      font-style: italic
</style>
