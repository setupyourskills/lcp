<template lang="pug">
section.purchase
  div.purchase__frame
    ComponentBubbles(section="purchase")
    div.purchase__group.margin-space
      ComponentArticleHeader.purchase__title-component(
        :mark="Boolean(component_article_header.component_boolean)"
        :title="component_article_header.component_name"
        :content="component_article_header.component_content"
      )
      div.purchase__form
        ComponentInfoCard.purchase__info-card(
          v-for="item in component_info_card"
          :key="item"
          :number="item.component_number"
          :title="item.component_name"
          :content="item.component_content"
        )
        div.purchase__box-image-group
          NuxtImg(
            v-for="(image, id) in component_image"
            :key="id"
            :src="image.component_name"
            :class="`purchase__box${(id+1).toString()}`"
          )
        div.purchase__button-group
          ComponentButton.purchase__button(:title="component_button.component_name" @click="setModalState('purchase', true)")
      div.purchase__info
        p.font-xs(v-html="component_info.component_name")
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { setModalState } = useModalsState();
const { getLanguage } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/purchase_view?lang=${getLanguage()}`
);

const {
  component_article_header,
  component_info_card,
  component_image,
  component_button,
  component_info,
} = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.purchase
  margin-top: $phi3

  &__title-component
    margin-top: $phi2

  &__frame
    @include frame
    position: relative
    max-width: $frame-max-width
    margin-inline: auto
    overflow: hidden

    @media screen and (min-width: 1024px)
      margin-inline: $phi3

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
      z-index: -1
      display: block
      position: absolute
      top: -25px
      left: -30px
      width: 400px
      height: 400px
      border-radius: 50%
      background-color: $yellow-bubble

      @media screen and (max-width: 899.99px)
        top: -30px
        left: -70px

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
    margin-block: $phi-1 0
    text-align: center
</style>
