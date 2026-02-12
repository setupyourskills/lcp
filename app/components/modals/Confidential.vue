<template lang="pug">
div.confidential-modal
  ComponentModal.confidential-modal__modal(
    modalName="confidential"
    :title="component_article_header.component_name"
    :content="component_article_header.component_content"
  )
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312C189.7 312 136 258.3 136 192C136 125.7 189.7 72 256 72zM226.3 368L285.7 368C315.4 368 343.4 375.3 368 388.1L368 392.4C348.4 410 336 435.5 336 463.9L336 559.9C336 565.4 336.5 570.8 337.3 576L77.7 576C61.3 576 48 562.7 48 546.3C48 447.8 127.8 368 226.3 368zM528 368.1C528 350.4 513.7 336.1 496 336.1C478.3 336.1 464 350.4 464 368.1L464 416L528 416L528 368.1zM384 464C384 443.1 397.4 425.3 416 418.7L416 368.1C416 323.9 451.8 288.1 496 288.1C540.2 288.1 576 323.9 576 368.1L576 418.7C594.6 425.3 608 443.1 608 464L608 560C608 586.5 586.5 608 560 608L432 608C405.5 608 384 586.5 384 560L384 464z")
    div.confidential-modal__container(v-html="component_info.component_name")
    div.confidential-modal__button
      ComponentButton(
        :title="component_button.component_name"
        @click="setModalState('confidential', false)"
      )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts";

const { getLanguage } = useLanguageCookie();

const { data: modalBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/confidential_modal_view?lang=${getLanguage()}`
);

const { component_article_header, component_info, component_button } = useComponents(modalBlocks);

const { setModalState } = useModalsState();
</script>

<style lang="sass" scoped>
.confidential-modal

  &__container
    text-align: justify

  &__button
    margin-top: $phi2
</style>
