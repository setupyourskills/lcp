<template lang="pug">
div.purchase-modal
  ComponentModal.purchase-modal__modal(
    modalName="purchase"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z")
    div.purchase-modal__form
      ComponentColorCard.purchase-modal__color-card(
        v-for="color in component_color_card"
        :key="color"
        :color-name="color.component_name"
        :color-label="JSON.parse(color.component_content)[lang]"
        componentType="modal"
      )
    div.purchase-modal__info.font-xs
      p(v-html="JSON.parse(component_info[0].component_name)[lang]")
    div.purchase-modal__list
      h4 {{ JSON.parse(component_info[1].component_name)[lang] }}
      ul
        li(
          v-for="item in getCounterColorList"
          :key="item"
        )
          p {{ item }}
    div.purchase-modal__psp
      h4 {{ JSON.parse(component_info[2].component_name)[lang] }}
      div.purchase-modal__psp-component
        ComponentBox(
          v-for="service in component_psp"
          :key="service"
          :box-name="service.component_name"
        )
    div.purchase-modal__button
      ComponentButton.purchase-modal__payButton(
        :title="JSON.parse(component_button.component_name)[lang]"
        @click="goPay"
        :class="{ 'deactivate-big-button': deactivateButton }"
      )
    p.purchase-modal__info-pay.font-xs(v-html="JSON.parse(component_info[3].component_name)[lang]")
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"
import type { ComponentStatus } from "~/assets/types/types.d.ts";

const { lang } = useLanguageCookie();

const { data: modalsBlocks } = await useFetch<SectionFullRow[]>("/api/view/purchase_modal_view");

const {
  component_article_header,
  component_color_card,
  component_info,
  component_psp,
  component_button,
  component_status
} = useComponents(modalsBlocks);
const status = component_status as ComponentStatus;

const {
  isQuantityEven,
  total,
  getCounterColorList,
} = useCounterColorsCookie();

const deactivateButton = computed(() => !isQuantityEven() || total.value === 0);

const goPay = () => {
  console.log("pay");
};

const { setPopupState } = usePopupsState();

watch(isQuantityEven, (newVal) => {
  if (!newVal) setPopupState("alertInfo", true, JSON.parse(status.component_failed)[lang.value]);
});
</script>

<style lang="sass" scoped>
.purchase-modal

  &__form
    @include flexbox-wrap
    margin-inline: auto

    @media screen and (min-width: 600px)
      width: 480px

    @media screen and (min-width: 1024px)
      width: 750px

  &__info
    margin: $phi1
  
    p
      margin: 0

  &__faq-component
    margin: $gap_space

  &__button
    @include flexbox-wrap
    margin-top: $phi2

  &__list
    text-align: left

  &__info-pay
    margin-block: $phi-2 0

  &__psp-component
    @include flexbox-wrap
    margin-block: $phi-1
</style>
