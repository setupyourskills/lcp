<template lang="pug">
div.purchase-modal
  ComponentModal.purchase-modal__modal(modalName="purchase" :title="purchase.title" :content="purchase.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180" height="110" viewBox="0 100 256 48")
        g(transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" style="stroke: none; stroke-width: 0; fill: #FAD289; opacity: 1;")
          path(d="M 82.127 71.258 H 26.728 c -4.341 0 -7.873 -3.532 -7.873 -7.873 v -10.16 c 0 -0.828 0.671 -1.5 1.5 -1.5 s 1.5 0.672 1.5 1.5 v 10.16 c 0 2.687 2.186 4.873 4.873 4.873 h 55.399 c 2.687 0 4.873 -2.187 4.873 -4.873 v -36.77 c 0 -2.687 -2.187 -4.873 -4.873 -4.873 H 26.728 c -2.687 0 -4.873 2.186 -4.873 4.873 v 10.038 c 0 0.829 -0.671 1.5 -1.5 1.5 s -1.5 -0.671 -1.5 -1.5 V 26.615 c 0 -4.341 3.532 -7.873 7.873 -7.873 h 55.399 c 4.341 0 7.873 3.532 7.873 7.873 v 36.77 C 90 67.726 86.468 71.258 82.127 71.258 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 63.732 45 l 16.726 -15.344 c 0.61 -0.56 0.651 -1.509 0.092 -2.12 c -0.56 -0.61 -1.508 -0.65 -2.119 -0.091 L 54.427 49.466 L 30.425 27.445 c -0.611 -0.559 -1.559 -0.519 -2.12 0.091 c -0.56 0.61 -0.519 1.56 0.091 2.12 L 45.122 45 L 28.396 60.345 c -0.61 0.561 -0.651 1.509 -0.091 2.119 c 0.296 0.323 0.7 0.486 1.106 0.486 c 0.362 0 0.726 -0.131 1.014 -0.395 l 16.916 -15.52 l 6.072 5.571 c 0.286 0.263 0.65 0.395 1.014 0.395 s 0.728 -0.132 1.014 -0.395 l 6.073 -5.571 l 16.917 15.52 c 0.288 0.264 0.651 0.395 1.014 0.395 c 0.405 0 0.81 -0.163 1.105 -0.486 c 0.56 -0.61 0.519 -1.559 -0.092 -2.119 L 63.732 45 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 25.423 46.5 H 7.539 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 17.885 c 0.829 0 1.5 0.671 1.5 1.5 S 26.252 46.5 25.423 46.5 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 12.497 36.016 H 1.5 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 10.997 c 0.829 0 1.5 0.671 1.5 1.5 S 13.326 36.016 12.497 36.016 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 12.497 56.984 H 4.394 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 8.104 c 0.829 0 1.5 0.672 1.5 1.5 S 13.326 56.984 12.497 56.984 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
    div.purchase-modal__form
      ComponentColorCard.purchase-modal__color-card(
        v-for="color in colors"
        :key="color"
        :color-name="color"
        componentType="modal"
      )
    div.purchase-modal__info.font-xs
      p(v-html="info")
    div.purchase-modal__list
      h4 Votre commande
      ul
        li(
          v-for="item in getCounterColorList"
          :key="item"
        )
          p {{ item }}
    div.purchase-modal__button
      ComponentButton(title="Annuler" @click="closeModal")
      ComponentButton.purchase-modal__payButton(title="Commander" @click="goPay" :class="{ 'deactivate-big-button': deactivateButton }" )
    p.purchase-modal__info-pay.font-xs(v-html="infoPay")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";
import type { IFaqSection } from "~/assets/types/interfaces.d.ts"

const CLOSE_MODAL_TIMEOUT = 2000;

const purchase: ModalProps = {
  title: "Préparez votre commander",
  content: "Choisissez le nombre de boîtes de couleur que vous désirez acheter.",
};

const colors: string[] = [
  "red",
  "blue",
  "green",
  "purple",
  "gold",
  "orange",
  "white",
  "yellow",
  "black",
];

const { setModalState } = useModalsState();
const closeModal = () => setModalState("purchase", false);

const { isQuantityEven, getCounterColorsState, getCounterColorList } = useCounterColorsState();
const deactivateButton = computed(() => isQuantityEven() ? false : true);

const goPay = () => {
  console.log("pay");
};

const info = "Notre lot Duos fonctionne par <span class='font-bold'>carton de 2 boîtes</span> de 300g chaque.<br />Veuillez donc choisir <span class='font-bold'>une quantité de couleurs paires</span> pour valider votre commande."

const infoPay = "Après avoir cliqué sur le bouton 'payer', vous serez redirigé vers <span class='font-bold'>une page sécurisée</span> pour effectuer votre paiement en toute tranquillité."
</script>

<style lang="sass" scoped>
.purchase-modal

  &__form
    @include flexbox-wrap
    margin-inline: auto

    @media screen and (min-width: 600px)
      width: 480px

    @media screen and (min-width: 850px)
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

    h4
      margin-block: $phi2 $phi-1

    li
      margin-block: $phi1

    li > p
      margin-block: $phi-1

    p
      margin-block: 0
      font-style: normal

  &__info-pay
    margin-block: $phi-2 0
</style>
