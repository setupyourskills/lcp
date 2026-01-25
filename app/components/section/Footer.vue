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
    content: "Nous avons créé une poudre qui permet d’ajouter <span class='font-bold'>une dimension chromatique exceptionnelle et durable</span> à vos gravures lasers.<br /><br /><span class='font-accent'>✉</span> <a href='#contact' class='modal'>Nous contacter</a>",
  },
  {
    title: "Notre Produit",
    content: "<a href='#features' class='inner-link'>Caractéristiques</a><br /><a href='#demo' class='inner-link'>Démonstration</a><br /><a href='#colors' class='inner-link'>Couleurs disponibles</a><br /><a href='#purchase' class='inner-link'>Commander le lot Duo</a><br /><a href='#faq' class='inner-link'>FAQ</a><br /><a href='#testimonials' class='inner-link'>Témoignages</a><br /><a href='#newsletter' class='inner-link'>Newsletter</a>",
  },
  {
    title: "Mentions",
    content: "<a href='#mentions' class='modal'>Mentions légales</a><br /><a href='#terms' class='modal'>Conditions générales de vente</a><br /><a href='#confidential' class='modal'>Confidentialité / RGPD</a><br /><a href='#cookies' class='modal'>Gestion des cookies</a><br /><a href='#use' class='modal'>Conditions générales d'utilisation</a><a href='#credits' class='modal'>Crédits</a>",
  },
];
const copyright = "<span class='font-bold font-normal'>©</span> 2026 - <a href='mailto:contact@setupyourskills'>SetupYourSkills</a>"

const { setModalState } = useModalsState();

const refFooterGroup = ref<HTMLElement | null>(null);

const handler = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  const href = target.getAttribute("href");
  if (!href) return;

  if (target.classList.contains("modal")) {
    const modalKey = href.slice(1) as keyof IModalsState;

    e.preventDefault();

    setModalState(modalKey, true);
  } else if (target.classList.contains("inner-link")) {
    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);

    e.preventDefault();

    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    margin-bottom: $phi-1
    text-align: right
    font-style: italic
</style>
