<template lang="pug">
section.faq
  ComponentArticleHeader.faq__title-component(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
  ComponentFaq.faq__faq-component(
  v-for="item in component_faq"
  :key="item"
  :question="JSON.parse(item.component_name)[lang]"
  :answer="JSON.parse(item.component_content)[lang]"
  )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/faq_view");

const { component_article_header, component_faq } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.faq

  &__faq-component
    margin-bottom: $gap_space
</style>
