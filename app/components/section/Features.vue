<template lang="pug">
section.features
  div.features__group
    ComponentInfoCard.features__info-card(
      v-for="feature in features"
      :key="feature"
      :title="feature.title"
      :content="feature.content"
    )
</template>

<script setup lang="ts">
const features = [
  {
    title: "Couleurs",
    content: "Des couleurs <span class='font-bold'>vibrantes</span> qui embélissent vos œuvres et <span class='font-bold'>résistent</span> à l'épreuve du temps.",
  },
  {
    title: "Adaptable",
    content: "Nos poudres peuvent adhérer à <span class='font-bold'>tous types de matériaux</span> (bois, métal, verre, plastique...), laissez parler votre créativité.",
  },
  {
    title: "Compatible",
    content: "Que vous utilisiez un laser Diode, CO2 ou Fibre, nos poudres sont conçues pour fonctionner <span class='font-bold'>sur la majorité des machines.</span>",
  },
];
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
