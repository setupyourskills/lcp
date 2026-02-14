<template lang="pug">
section.testimonials
  ComponentArticleHeader.testimonials__title-component(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
  div.testimonials__group
    ComponentTestimonialCard.testimonials__testimonial-card(
      v-for="testimonial in component_testimonial_card"
      :key="testimonial"
      :content="JSON.parse(testimonial.component_content)[lang]"
      :avatar="testimonial.component_avatar"
      :name="JSON.parse(testimonial.component_name)[lang]"
      :country="JSON.parse(testimonial.component_country)[lang]"
    )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/testimonials_view");

const { component_article_header, component_testimonial_card } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.testimonials

  &__group
    @include flexbox-wrap
</style>
