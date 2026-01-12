<template lang="pug">
section.features
  div.features__container
    ComponentInfoCard.features__info-card
      template(#title) Couleurs
      template(#content) Des couleurs #[span.font-bold vibrantes] qui embélissent vos œuvres et #[span.font-bold résistent] à l'épreuve du temps.

    ComponentInfoCard.features__info-card
      template(#title) Compatible
      template(#content) Que vous utilisiez un laser Diode, CO2 ou Fibre, nos poudres sont conçues pour fonctionner #[span.font-bold sur la majorité des machines.]

    ComponentInfoCard.features__info-card
      template(#title) Adaptable
      template(#content) Nos poudres peuvent adhérer à #[span.font-bold tous types de matériaux] (bois, métal, verre, plastique...), laissez parler votre créativité.
</template>

<style lang="sass" scoped>
.features

  &__container
    display: flex
    flex-direction: column
    gap: $phi1_5
</style>
