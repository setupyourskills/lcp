<template lang="pug">
section.faq
  ComponentTitle.faq__title-component
    template(#title) Les poudres #[span.font-accent Questions] fréquentes
    template(#content) #[span.font-bold Trouvez les réponses] à toutes vos interrogations sur nos poudres laser, #[span.font-bold tout doit rester clair !]
  div.faq__group
    ComponentFaq.faq__faq-component(
    v-for="item in faq"
    :key="item"
    :question="item.question"
    :answer="item.answer"
    )
</template>

<script setup lang="ts">
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
