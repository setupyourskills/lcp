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
import type { ArticleHeader } from "~/assets/types/types.d.ts";
import type { InfoNewsletterSection } from "~/assets/types/types.d.ts";

const articleHeader: ArticleHeader = {
  title: "Rejoignez <span class='font-accent'>la newsletter</span>",
  content: "<span class='font-bold'>Recevez</span> les dernières <span class='font-bold'>nouvelles</span> pour <span class='font-bold'>rester toujours informé !</span>",
};
const info: InfoNewsletterSection = {
  spam: "<span class='font-accent font-bold font-normal'>🗹</span> Pas de Spam",
  confidential: "<span class='font-accent font-bold font-normal'>🗹</span> Votre Email reste confidentiel"
};
</script>

<style lang="sass" scoped>
.newsletter
  margin-top: $phi3

  &__title-component
    margin-top: $phi2

  &__frame
    @include frame
    
    @media screen and (min-width: calc(1280px - 2*$phi3))
      margin-inline: auto
      width: calc(1280px - 2*$phi3)

  &__group
    padding-block: 0 $phi2

  &__form
    @include flexbox-wrap
    flex-direction: row
    margin-inline: auto

  &__input
    flex: 0 1 450px

  &__info
    @include flexbox-wrap
    align-items: center
    row-gap: 0
    column-gap: $gap-space
</style>
