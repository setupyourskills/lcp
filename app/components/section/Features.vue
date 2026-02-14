<template lang="pug">
section.features
  div.features__group
    ComponentInfoCard.features__info-card(
      v-for="feature in component_info_card"
      :key="feature"
      :title="JSON.parse(feature.component_name)[lang]"
      :content="JSON.parse(feature.component_content)[lang]"
    )
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/features_view");

const { component_info_card } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
.features
  margin-top: $phi2

  &__group
    @include flexbox-wrap

  &__info-card

    @media screen and (min-width: 1024px)
      flex: 1 0 250px
</style>
