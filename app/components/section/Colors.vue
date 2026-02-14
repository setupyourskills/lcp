<template lang="pug">
section.colors
  ComponentArticleHeader(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
  div.colors__group
    ComponentColorCard.colors__color-card(
      v-for="color in component_color_card"
      :key="color"
      :color-name="color.component_name"
      :color-label="JSON.parse(color.component_content)[lang]"
    )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/colors_view");

const { component_article_header, component_color_card } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.colors 

  &__group
    @include flexbox-wrap
    margin-inline: auto

    @media screen and (min-width: 600px)
      width: 480px

    @media screen and (min-width: 850px)
      width: 750px
</style>
