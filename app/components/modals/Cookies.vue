<template lang="pug">
div.cookies-modal
  ComponentModal.cookies-modal__modal(modalName="cookies" :title="cookies.title" :content="cookies.content")
    template(#icon)
      svg(width="180" height="110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg")
        path( d="M32 58C19.37 58 8 46.63 8 32C8 17.37 19.37 6 32 6C44.63 6 56 17.37 56 32C56 46.63 40.63 58 32 58Z" stroke="#FAD289" stroke-width="4")
        circle(cx="16" cy="24" r="4" fill="#FAD289")
        circle(cx="28" cy="14" r="5" fill="#FAD289")
        circle(cx="44" cy="30" r="3" fill="#FAD289")
        circle(cx="16" cy="40" r="6" fill="#FAD289")
        circle(cx="38" cy="46" r="4" fill="#FAD289")
        circle(cx="52" cy="20" r="3" fill="#FAD289")
    div.cookies-modal__container
      h4 Qu’est‑ce qu’un cookie ?
      p Petit fichier texte stocké dans votre navigateur qui conserve une session, un choix de langue ou d’autres paramètres pour améliorer votre expérience.

      h4 Types de cookies utilisés
      p Il existe plusieurs catégories de cookies :
      ul
        li
          span.font-bold Obligatoires
          p Essentiels au fonctionnement du site (sécurité, panier). Aucun consentement requis.
        li
          span.font-bold Fonctionnels / Statistiques 
          p Recueillent des données anonymes (Matomo) pour optimiser le site et adapter l’affichage à votre appareil. Déposés sans consentement préalable mais modifiables via votre navigateur ou notre widget de gestion.
        li
          span.font-bold Tiers (publicités, réseaux sociaux)
          p Déposés par des partenaires externes (YouTube, Facebook, etc.). Ils peuvent mémoriser vos visites et diffuser des publicités ciblées. Vous avez la possibilité d’accepter ou refuser ces cookies via le widget « Gestion des cookies » ou en ajustant les paramètres de votre navigateur.

      h4 Gérer vos préférences
      p Cliquez sur le bouton « Gestion des cookies » dans le footer pour accepter ou refuser les catégories non‑obligatoires.
      p Vous pouvez également désactiver ces traceurs directement dans les paramètres de votre navigateur (Chrome, Firefox, Safari, Edge, etc.).

      div.cookies-modal__buttons
        ComponentButton(title="Accepter" @click="choiceCookie('yes')")
        ComponentButton(title="Refuser" @click="choiceCookie('no')")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";
import type { YesNo } from "~/assets/types/types.d.ts";

const cookies: ModalProps = {
  title: "Politique des cookies",
  content: "Gestion transparente et respectueuse de votre vie privée",
};

const { setCookie } = useCookies();
const { setModalState } = useModalsState();

const choiceCookie = (choice: YesNo) => {
  setCookie(choice);
  setModalState("cookies", false);
}
</script>

<style lang="sass" scoped>
.cookies-modal

  &__container
    text-align: left

    h4
      margin-block: $phi2 $phi-1

    li
      margin-block: $phi1

    li > p
      margin-block: $phi-1

    p
      margin-block: 0
      font-style: normal

  &__buttons
    @include flexbox-wrap
    margin-top: $phi2
</style>
