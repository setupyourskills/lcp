<template lang="pug">
section.testimonials
  ComponentArticleHeader.testimonials__title-component(:title="articleHeader.title" :content="articleHeader.content")
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "Les <span class='font-accent'>avis</span> de nos clients",
  content: "Votre <span class='font-bold'>satisfaction</span> est <span class='font-bold'>notre priorité !</span>",
};
</script>
<style lang="sass" scoped>
.testimonials
  margin-top: $phi3
</style>
