<template lang="pug">
section.footer
  div.footer__frame
    ComponentBubbles(section="footer")
    div.footer__group.margin-space
      ComponentInfoCard.footer__info-card(
        v-for="(item, idx) in footerItems"
        :key="idx"
        :title="item.title"
        :content="item.content"
        :style="idx ? 'normal' : 'italic'" 
      )
    div.footer__copyright(v-html="copyright")
</template>

<script setup lang="ts">
const footerItems = [
  {
    title: "Laser Skills",
    content: "Nous avons créé une poudre qui permet d’ajouter <span class='font-bold'>une dimension chromatique exceptionnelle et durable</span> à vos gravures lasers.<br />",
  },
  {
    title: "Notre Produit",
    content: "Caractéristiques<br />Démonstration<br />Couleurs disponibles<br />Commander le lot Duo<br />FAQ<br />Témoignages<br />Newsletter",
  },
  {
    title: "Mentions Légales",
    content: "Confidentialité<br />Conditions<br />RGPD<br />",
  },
];
const copyright="<span class='font-bold font-normal'>©</span> 2026 - <a href='mailto:contact@setupyourskills'>SetupYourSkills</a>"
</script>

<style lang="sass">
.footer
  margin-block: $phi3 0

  &__frame
    position: relative
    border-top: $border-section-separator solid $accent2
    background-color: $element-background-color
    overflow: hidden

  &__group
    display: flex
    justify-content: center
    flex-wrap: wrap
    gap: $gap-space
    z-index: 1
    position: relative
    margin-block: $phi2 $phi2

  &__info-card
    flex: 1 0 250px

  &__copyright
    z-index: 1
    position: relative
    text-align: right
</style>
