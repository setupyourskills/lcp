<template lang="pug">
section.newsletter
  ComponentArticleHeader.newsletter__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "Rejoignez <span class='font-accent'>la newsletter</span>",
  content: "<span class='font-bold'>Recevez</span> les dernières <span class='font-bold'>nouvelles</span> pour <span class='font-bold'>rester toujours informé !</span>",
};
</script>

<style lang="sass" scoped>
.newsletter
  margin-top: $phi2
</style>
