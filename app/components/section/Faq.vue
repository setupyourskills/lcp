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
    question: "Choix des couleurs",
    answer: "Vous pouvez choisir entre <span class='font-bold'>9 couleurs</span> différentes que vous pouvez commander par lot de deux boîtes de 300g",
  },
  {
    question: "Quelle quantité utiliser par application ?",
    answer: "Vous n'avez besoin que de seulement quelques grammes par application.",
  },
  {
    question: "Délais de livraison ?",
    answer: "Cela dépend de là où vous résider, mais en général, il faudra compte 2 semaines maximum pour recevoir votre colis. Les poudres sont envoyées de Taïwan.",
  },
  {
    question: "Configuration et installation du laser",
    answer: "Il vous faudra trouver la meilleur configuration en fonction de votre laser. Quelqes tests seront nécessaire les premières fois jusqu'à trouver les bons paramètres.",
  },
];
</script>

<style lang="sass" scoped>
.faq

  &__group
    display: flex
    flex-direction: column
    gap: $gap_space
</style>
