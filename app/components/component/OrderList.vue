<template lang="pug">
div.order-list
  ul.order-list__ul
    li.order-list__li(
      v-for="item in props.product"
      :key="item"
    ) 
      div.order-list__image(style="grid-area: box-1") 
        NuxtImg(:src="item.img")
      div.order-list__qty.font-bold.font-m(style="grid-area: box-2") {{ item.qty }}
      div.order-list__name.font-bold.font-m(style="grid-area: box-3")  {{ item.name }}&nbsp;
      div.order-list__unit_price.font-xs(style="grid-area: box-4")  {{ JSON.parse(props.info[2].component_name)[lang] }}{{ item.unit }}&nbsp;{{ JSON.parse(props.info[3].component_name)[lang] }}
      div.order-list__description.font-s(style="grid-area: box-5")  {{ item.description }}
      div.order-list__price.font-bold.font-m(style="grid-area: box-6")  {{ JSON.parse(props.info[0].component_name)[lang] }}{{ item.price }}&nbsp;{{JSON.parse(props.info[1].component_name)[lang]}}
    p.order-list__total
      span.order-list__total-title.font-bold {{ JSON.parse(props.info[4].component_name)[lang] }}&nbsp;
      span.order-list__total-price.font-bold.font-m {{ JSON.parse(props.info[0].component_name)[lang] }}{{ totalPrice }}&nbsp;{{JSON.parse(props.info[1].component_name)[lang]}}
</template>

<script setup lang="ts">
const props = defineProps<{
  product: IProduct[];
  info: {
    fr: string;
    en: string;
    zht: string;
    zhs: string;
  }[];
}>();

const { lang } = useLanguageCookie();

const totalPrice = computed(() => {
  const total = props.product.reduce((acc, item) => {
    const cents = Number(item.price);
    return acc + cents;
  }, 0);

  return total.toFixed(2);
});
</script>

<style lang="sass">
.order-list

  &__ul
    padding: 0

  &__li
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

  &__image img
    width: 120px

  &__qty
    color: $accent1!important

  &__name

    @media screen and (min-width: 1024px)
      text-align: left

  &__description
    grid-column: span 2

    @media screen and (min-width: 1024px)
      text-align: left

  &__total
    margin-top: $phi1_5
    text-align: right
    border-top: 2px solid $accent2

    &-price
      color: $accent1!important
</style>
