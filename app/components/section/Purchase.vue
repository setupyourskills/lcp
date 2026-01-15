<template lang="pug">
section.purchase
  div.purchase__frame
    ComponentBubbles(section="purchase")
    div.purchase__group
      ComponentArticleHeader.purchase__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
      div.purchase__form
        ComponentInfoCard(
          v-for="(item, idx) in purchaseForm"
          :key="idx"
          :number="(idx+1).toString()"
          :title="item.title"
          :content="item.content"
        )
        div.purchase__box-image-group
          NuxtImg(v-for="id in 2" :key="id" src="box.webp" :class="`purchase__box${(id).toString()}`")
        ComponentButton(title="Commander")
      div.purchase__info
        p(v-html="coupon")
</template>

<script setup lang="ts">
const articleHeader: ArticleHeader = {
  title: "<span class='font-accent'>Commander</span> le lot Duo",
  content: "<span class='font-bold'>Béneficier</span> de la <span class='font-bold'>couleur</span> pour <span class='font-bold'>plus de créativité !</span>",
};
const purchaseForm = [
  {
    title: "Quantités",
    content: "Nos poudres laser sont vendues par lot de deux boîtes de 300g, idéal pour tous vos projets.",
  },
  {
    title: "Couleurs",
    content: "Choisissez parmi une palette de 9 couleurs pour donner vie à vos créations.",
  },
];
const coupon = "Le coupon <span class='font-accent font-bold'>FIRST</span> vous permet de bénéficiez d'une réduction de 10% sur votre 1er achat.";
</script>

<style lang="sass" scoped>
.purchase
  margin-top: $phi3

  &__title-component
    margin-top: $phi2

  &__frame
    position: relative
    border: $border-section-framed solid $accent2
    border-radius: 25px
    background-color: $element-background-color
    overflow: hidden

  &__group
    z-index: 1
    position: relative
    padding-inline: $phi1
    padding-block: 0 $phi2

  &__form
    display: flex
    flex-direction: column
    gap: $gap-space

  &__box-image-group
    position: relative
    margin-bottom: $phi1_5
    height: 240px

  &__box1
    position: absolute
    top: 0
    right: $phi1
    width: 50%
    transform: rotate(10deg)

  &__box2
    position: absolute
    top: $phi3
    left: $phi1
    width: 50%
    transform: rotate(-10deg)

  &__info
    text-align: center

    p
      margin-block: $phi-1 0
      font-size: $phi-0_5
      font-style: italic
</style>
