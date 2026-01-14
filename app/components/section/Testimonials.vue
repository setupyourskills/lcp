<template lang="pug">
section.testimonials
  ComponentArticleHeader.testimonials__title-component(:title="articleHeader.title" :content="articleHeader.content")
  div.testimonials__group
    ComponentTestimonialCard.testimonials__testimonial-card-component(
      v-for="testimonial in testimonials"
      :key="testimonial"
      :content="testimonial.content"
      :avatar="testimonial.avatar"
      :name="testimonial.name"
      :country="testimonial.country"
    )
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "Les <span class='font-accent'>avis</span> de nos clients",
  content: "Votre <span class='font-bold'>satisfaction</span> est <span class='font-bold'>notre priorité !</span>",
};
const testimonials = [
  {
    content: "Merci beaucoup pour ces belles couleurs ! Je les utilise maintenant dans toutes mes gravures !",
    avatar: "",
    name: "Yang Peng",
    country: "Taïwan",
  },
  {
    content: "Il faut un petit temps d'adaptation mais ça vaut le coup car ça ajoute une véritable touche vivante à mes produits.",
    avatar: "",
    name: "Léa Morelli",
    country: "France",
  },
  {
    content: "Merci, j'apprécie vraiment les quantités disponibles et bien protégées dans leur boîte, c'est assez facile d'emploi !",
    avatar: "",
    name: "John Welds",
    country: "USA",
  },
];
</script>

<style lang="sass" scoped>
.testimonials

  &__group
    display: flex
    flex-direction: column
    gap: $gap_space
</style>
