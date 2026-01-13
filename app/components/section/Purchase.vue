<template lang="pug">
section.purchase
  ComponentArticleHeader.purchase__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "<span class='font-accent'>Commander</span> le lot Duo",
  content: "<span class='font-bold'>Béneficier</span> de la <span class='font-bold'>couleur</span> pour <span class='font-bold'>plus de créativité !</span>",
};
</script>

<style lang="sass" scoped>
.purchase
  margin-top: $phi3
</style>
