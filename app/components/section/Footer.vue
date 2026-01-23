<template lang="pug">
section.footer
  div.footer__frame
    ComponentBubbles(section="footer")
    div.footer__group.margin-space(ref="refFooterGroup")
      ComponentInfoCard.footer__info-card(
        v-for="(item, idx) in footerItems"
        :key="idx"
        :title="item.title"
        :content="item.content"
        :style="idx ? 'normal' : 'italic'" 
      )
    div.footer__copyright.margin-space(v-html="copyright")
</template>

<script setup lang="ts">
import type { IInfoCardSection, IModalsState } from "~/assets/types/interfaces.d.ts"

const footerItems: IInfoCardSection[] = [
  {
    title: "Laser Skills",
    content: "Nous avons créé une poudre qui permet d’ajouter <span class='font-bold'>une dimension chromatique exceptionnelle et durable</span> à vos gravures lasers.<br /><br /><span class='font-accent'>✉</span> <a href='#' id='contact'>Nous contacter</a>",
  },
  {
    title: "Notre Produit",
    content: "<a href='#features'>Caractéristiques</a><br /><a href='#demo'>Démonstration</a><br /><a href='#colors'>Couleurs disponibles</a><br /><a href='#purchase'>Commander le lot Duo</a><br /><a href='#faq'>FAQ</a><br /><a href='#testimonials'>Témoignages</a><br /><a href='#newsletter'>Newsletter</a>",
  },
  {
    title: "Mentions",
    content: "<a href='#' id='mentions'>Mentions légales</a><br /><a href='#' id='terms'>Conditions générales de vente</a><br /><a href='#' id='confidential'>Confidentialité / RGPD</a><br /><a href='#' id='cookies'>Gestion des cookies</a><br /><a href='#' id='use'>Conditions générales d'utilisation</a>",
  },
];
const copyright = "<span class='font-bold font-normal'>©</span> 2026 - <a href='mailto:contact@setupyourskills'>SetupYourSkills</a>"

const { setModalState } = useModalsState();

const refFooterGroup = ref<HTMLElement | null>(null);
const modals = ["contact", "mentions", "terms", "confidential", "cookies", "use"] as const satisfies readonly (keyof IModalsState)[];

const handler = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null;

  if (!target) return;

  for (const modal of modals) {
    if (target.matches(`#${modal}`)) {
      e.preventDefault();

      setModalState(modal, true);
    }
  }
};

onMounted(() => {
  if (!refFooterGroup.value) return;

  refFooterGroup.value.addEventListener('click', handler);

  return () => refFooterGroup.value?.removeEventListener('click', handler);
});
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
    @include flexbox-wrap
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
