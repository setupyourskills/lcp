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
import type { IInfoCardSection } from "~/assets/types/interfaces.d.ts"
import type { IModalsState } from "~/assets/types/interfaces.d.ts";

const footerItems: IInfoCardSection[] = [
  {
    title: "Laser Skills",
    content: "Nous avons créé une poudre qui permet d’ajouter <span class='font-bold'>une dimension chromatique exceptionnelle et durable</span> à vos gravures lasers.<p><span class='font-accent'>✉</span> <a href='#' id='contact'>Nous contacter</p>",
  },
  {
    title: "Notre Produit",
    content: "<a href='#features'>Caractéristiques</a><br /><a href='#demo'>Démonstration</a><br /><a href='#colors'>Couleurs disponibles</a><br /><a href='#purchase'>Commander le lot Duo</a><br /><a href='#faq'>FAQ</a><br /><a href='#testimonials'>Témoignages</a><br /><a href='#newsletter'>Newsletter</a>",
  },
  {
    title: "Mentions Légales",
    content: "<a href='#' id='confidential'>Confidentialité</a><br /><a href='#' id='terms'>Conditions</a><br /><a href='#' id='gdpr'>RGPD</a><br />",
  },
];
const copyright = "<span class='font-bold font-normal'>©</span> 2026 - <a href='mailto:contact@setupyourskills'>SetupYourSkills</a>"

const { setModalState } = useModalsState();

const refFooterGroup = ref<HTMLElement | null>(null);
const modals = ["Contact", "Confidential", "Terms", "Gdpr"] as const satisfies readonly (keyof IModalsState)[];

onMounted(() => {
  if (!refFooterGroup.value) return;

  const handler = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    for (const modal of modals) {
      if (target.matches(`#${modal.toLowerCase()}`)) {
        e.preventDefault();
        setModalState(modal, true);
      }
    }
  };

  refFooterGroup.value.addEventListener('click', handler);

  return () => {
    refFooterGroup.value?.removeEventListener('click', handler);
  };
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
