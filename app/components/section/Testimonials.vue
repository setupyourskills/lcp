<template lang="pug">
section.testimonials
  ComponentArticleHeader(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
  div.testimonials__group
    ComponentTestimonialCard(
      v-for="testimonial in component_testimonial_card"
      :key="testimonial"
      :content="JSON.parse(testimonial.component_content)[lang]"
      :avatar="testimonial.component_avatar"
      :name="JSON.parse(testimonial.component_name)[lang]"
      :country="JSON.parse(testimonial.component_country)[lang]"
    )
</template>

<script setup lang="ts">
const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<ISectionFullRow[]>("/api/view/testimonials_view");

const { component_article_header, component_testimonial_card } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.testimonials

  &__group
    @include flexbox-wrap
</style>
