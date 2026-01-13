<template lang="pug">
section.faq
  ComponentArticleHeader.faq__title-component(:title="articleHeader.title" :content="articleHeader.content")
  div.faq__group
    ComponentFaq.faq__faq-component(
    v-for="item in faq"
    :key="item"
    :question="item.question"
    :answer="item.answer"
    )
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "Les poudres <span class='font-accent'>Questions</span> fréquentes",
  content: "<span class='font-bold'>Trouvez les réponses</span> à toutes vos interrogations sur nos poudres laser, <span class='font-bold'>tout doit rester clair !</span>",
};
const faq = [
  {
    question: "Composition des poudres de couleur ?",
    answer: "question1",
  },
  {
    question: "Choisir la quantité & les couleurs ?",
    answer: "question2",
  },
  {
    question: "Les délais de livraison ?",
    answer: "question3",
  },
  {
    question: "Configuration du laser ?",
    answer: "question4",
  },
];
</script>

<style lang="sass" scoped>
.faq
  margin-top: $phi3

  &__group
    display: flex
    flex-direction: column
    gap: $phi1_5
    margin-top: $phi2
</style>
