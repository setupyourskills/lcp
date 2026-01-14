<template lang="pug">
section.footer
  div.footer__group
    ComponentInfoCard(
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
    content: "Caractéristiques<br />Démonstration<br />Couleurs disponibles<br />Commander le lot Duo",
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
  border-top: $border-section-separator solid $accent2
  background-color: $element-background-color

  &__group
    display: flex
    flex-direction: column
    gap: $gap-space
    margin-inline: $phi1
    margin-block: $phi2 $phi2

  &__copyright
    text-align: right
    margin-inline: $phi1
    font-size: $phi-0_5
    font-style: italic
</style>
