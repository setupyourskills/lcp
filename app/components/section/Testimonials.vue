<template lang="pug">
section.testimonials
  ComponentArticleHeader.testimonials__title-component(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="component_article_header.component_name"
    :content="component_article_header.component_content"
  )
  div.testimonials__group
    ComponentTestimonialCard.testimonials__testimonial-card(
      v-for="testimonial in component_testimonial_card"
      :key="testimonial"
      :content="testimonial.component_content"
      :avatar="testimonial.component_avatar"
      :name="testimonial.component_name"
      :country="testimonial.component_country"
    )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { getLanguage } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/testimonials_view?lang=${getLanguage()}`
);

const { component_article_header, component_testimonial_card } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.testimonials

  &__group
    @include flexbox-wrap
</style>
