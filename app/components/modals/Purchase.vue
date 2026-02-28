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
      ul.purchase-modal__product-ul(v-if="total")
        li.purchase-modal__product-li(
          v-for="item in formattedList"
          :key="item"
        ) 
          div.purchase-modal__product-image(style="grid-area: box-1") 
            NuxtImg(:src="item.img")
          div.purchase-modal__product-qty.font-bold.font-m(style="grid-area: box-2") {{ item.qty }}
          div.purchase-modal__product-name.font-bold.font-m(style="grid-area: box-3")  {{ item.name }}&nbsp;
          div.purchase-modal__product-unit_price.font-xs(style="grid-area: box-4")  {{JSON.parse(component_info[6].component_name)[lang]}}{{ item.unit }}&nbsp;{{JSON.parse(component_info[7].component_name)[lang]}}
          div.purchase-modal__product-description.font-s(style="grid-area: box-5")  {{ item.description }}
          div.purchase-modal__product-price.font-bold.font-m(style="grid-area: box-6")  {{JSON.parse(component_info[4].component_name)[lang]}}{{ item.price }}&nbsp;{{JSON.parse(component_info[5].component_name)[lang]}}
        p.purchase-modal__total
          span.purchase-modal__total-title.font-bold {{ JSON.parse(component_info[8].component_name)[lang] }}&nbsp;
          span.purchase-modal__total-price.font-bold.font-m {{JSON.parse(component_info[4].component_name)[lang]}}{{ totalPrice }}&nbsp;{{JSON.parse(component_info[5].component_name)[lang]}}
      p.purchase-modal__nothing(v-else) {{ JSON.parse(component_info[9].component_name)[lang] }}
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
        :redirect="isLoading"
        :redirect-label="JSON.parse(component_button.component_content)[lang]"
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

const { getProduct } = useProductsState();

const formattedList = computed(() =>
  getCounterColorList.value.map((entry, idx) => {
    const { color, count } = entry
    const product = getProduct(color);

    if (!product) return { img: "", qty: "", name: "", description: "", unit: "", price: "" };

    return {
      img: `${color}.webp`,
      qty: `x${count}`,
      name: JSON.parse(product.name)[lang.value],
      description: JSON.parse(product.description)[lang.value],
      unit: (product.price/100).toFixed(2),
      price: (product.price*count/100).toFixed(2)
    }
  })
);

const totalPrice = computed(() => {
  const total = formattedList.value.reduce((acc, item) => {
    const cents = parseInt(item.price);
    console.log(formattedList.value)
    return acc + cents;
  }, 0);

  return total.toFixed(2);
});

const deactivateButton = computed(() => !isQuantityEven() || total.value === 0);

const { whichPsp } = usePspsState();

const isLoading = ref(false)

const BUTTON_DISABLED_TIMEOUT = 2500;

const goPay = async () => {
  try {
    isLoading.value = true

    const { url } = await $fetch<{ url: string }>("/api/stripe/create-checkout-session", {
      method: 'POST',
      body: {
        purchase: getCounterColorList.value,
        paymentType: whichPsp()
      },
    })

    if (url) {
      window.location.href = url
    }
  } catch (error) {
    console.error('Stripe payment error:', error)
    alert('Payment failed. Please try again.')
  } finally {

    setTimeout(() => {
      isLoading.value = false
    }, BUTTON_DISABLED_TIMEOUT);
  }
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
    margin-block: $phi2

  &__product

    &-ul
      padding: 0

    &-li
      display: grid
      grid-template-columns: 1fr
      grid-template-areas: "box-1" "box-2" "box-3" "box-4" "box-5" "box-6"
      align-items: center
      margin-top: $phi1_5
      text-align: center

      @media screen and (min-width: 650px)
        grid-template-columns: 1fr .5fr 3fr 1fr
        grid-template-rows: 1fr 1fr
        grid-template-areas: "box-1 box-2 box-3 box-6" "box-1 box-2 box-4 box-6" "box-1 box-2 box-5 box-6"
        grid-column-gap: $phi-1

      @media screen and (min-width: 1024px)
        grid-template-columns: 1fr .5fr 2fr 1fr 1fr
        grid-template-rows: 1fr 1fr
        grid-template-areas: "box-1 box-2 box-3 box-4 box-6" "box-1 box-2 box-5 box-5 box-6"
        grid-column-gap: $phi-1

    &-image img
      width: 120px

    &-qty
      color: $accent1

    &-name

      @media screen and (min-width: 1024px)
        text-align: left

    &-description
      grid-column: span 2

      @media screen and (min-width: 1024px)
        text-align: left

  &__total
    margin-top: $phi1_5
    text-align: right
    border-top: 2px solid $accent2

    &-price
      color: $accent1

  &__nothing
    color: $alert

  &__info-pay
    margin-block: $phi-2 0

  &__psp-component
    @include flexbox-wrap
    margin-block: $phi-1
</style>
