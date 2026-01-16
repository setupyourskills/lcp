<template lang="pug">
section.purchase
  div.purchase__frame
    ComponentBubbles(section="purchase")
    div.purchase__group.margin-space
      ComponentArticleHeader.purchase__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
      div.purchase__form
        ComponentInfoCard.purchase__info-card(
          v-for="(item, idx) in purchaseForm"
          :key="idx"
          :number="(idx+1).toString()"
          :title="item.title"
          :content="item.content"
        )
        div.purchase__box-image-group
          NuxtImg(v-for="id in 2" :key="id" src="box.webp" :class="`purchase__box${(id).toString()}`")
        div.purchase__button-group
          ComponentButton.purchase__button(title="Commander")
      div.purchase__info
        p.font-xs(v-html="coupon")
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

    @media screen and (min-width: calc(1280px - 2*$phi3))
      margin-inline: auto
      width: calc(1280px - 2*$phi3)

  &__group
    z-index: 1
    position: relative
    padding-block: 0 $phi2

  &__form
    @include flexbox-wrap

  &__box-image-group
    position: relative
    margin-bottom: $phi1_5
    height: 240px
    width: 187px

    @media screen and (max-width: 899.99px)
      width: 260px
    
    &::after
      content: ''
      display: block
      position: absolute
      top: -25px
      left: -30px
      width: 400px
      height: 400px
      background-color: $yellow-bubble
      border-radius: 50%
      z-index: -1

  &__box1
    position: absolute
    top: -10px
    left: 100px
    width: 65%
    transform: rotate(10deg)

    @media screen and (max-width: 899.99px)
      width: 50%

  &__box2
    position: absolute
    top: 50px
    left: 10px
    width: 75%
    transform: rotate(-10deg)

    @media screen and (max-width: 899.99px)
      width: 55%

  &__button-group
    display: flex
    justify-content: center
    width: 100%

  &__info
    text-align: center
</style>
