<template lang="pug">
div.main-group
  SectionHero
  SectionFeatures.main-group--margin
  SectionVideo.main-group--margin
  SectionColors.main-group--margin
  SectionPurchase
  SectionFaq.main-group--margin
  SectionTestimonials.main-group--margin
  SectionNewsletter
</template>

<style lang="sass" scoped>
.main-group

  &--margin
    margin-inline: $phi1 

    @media screen and (min-width: 600px)
      margin-inline: $phi2

    @media screen and (min-width: 850px)
      margin-inline: $phi3
</style>
