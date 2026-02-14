<template lang="pug">
div.use-modal
  ComponentModal.use-modal__modal(
    modalName="use"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M320 216C368.6 216 408 176.6 408 128C408 79.4 368.6 40 320 40C271.4 40 232 79.4 232 128C232 176.6 271.4 216 320 216zM320 514.7L320 365.4C336.3 358.6 352.9 351.7 369.7 344.7C408.7 328.5 450.5 320.1 492.8 320.1L512 320.1L512 480.1L492.8 480.1C433.7 480.1 375.1 491.8 320.5 514.6L320 514.8zM320 296L294.9 285.5C248.1 266 197.9 256 147.2 256L112 256C85.5 256 64 277.5 64 304L64 496C64 522.5 85.5 544 112 544L147.2 544C197.9 544 248.1 554 294.9 573.5L307.7 578.8C315.6 582.1 324.4 582.1 332.3 578.8L345.1 573.5C391.9 554 442.1 544 492.8 544L528 544C554.5 544 576 522.5 576 496L576 304C576 277.5 554.5 256 528 256L492.8 256C442.1 256 391.9 266 345.1 285.5L320 296z")
    div.use-modal__container(v-html="JSON.parse(component_info.component_name)[lang]")
    div.use-modal__button
      ComponentButton(
        :title="JSON.parse(component_button.component_name)[lang]"
        @click="setModalState('use', false)"
      )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts";

const { lang } = useLanguageCookie();

const { data: modalBlocks } = await useFetch<SectionFullRow[]>("/api/view/use_modal_view");

const { component_article_header, component_info, component_button } = useComponents(modalBlocks);

const { setModalState } = useModalsState();
</script>

<style lang="sass" scoped>
.use-modal

  &__container
    text-align: justify

  &__button
    @include flexbox-wrap
    margin-top: $phi2
</style>
