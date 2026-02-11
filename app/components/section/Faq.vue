<template lang="pug">
section.faq
  ComponentArticleHeader.faq__title-component(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="component_article_header.component_name"
    :content="component_article_header.component_content"
  )
  ComponentFaq.faq__faq-component(
  v-for="item in component_faq"
  :key="item"
  :question="item.component_name"
  :answer="item.component_content"
  :height="item.component_number"
  )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { getLanguage } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/faq_view?lang=${getLanguage()}`
);

const { component_article_header, component_faq } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.faq

  &__faq-component
    margin-bottom: $gap_space
</style>
