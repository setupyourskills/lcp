<template lang="pug">
div.cookies-modal
  ComponentModal.cookies-modal__modal(modalName="cookies" :title="cookies.title" :content="cookies.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M321.5 91.6C320.7 86.2 316.6 81.8 311.2 81C289.1 77.9 266.6 81.9 246.8 92.4L172.8 131.9C153.1 142.4 137.2 158.9 127.4 179L90.7 254.6C80.9 274.7 77.7 297.5 81.6 319.5L96.1 402.3C100 424.4 110.7 444.6 126.8 460.2L187.1 518.6C203.2 534.2 223.7 544.2 245.8 547.3L328.8 559C350.9 562.1 373.4 558.1 393.2 547.6L467.2 508.1C486.9 497.6 502.8 481.1 512.6 460.9L549.3 385.4C559.1 365.3 562.3 342.5 558.4 320.5C557.5 315.2 553.1 311.2 547.8 310.4C496.3 302.2 455 263.3 443.3 213C441.5 205.4 435.3 199.6 427.6 198.4C373 189.7 329.9 146.4 321.4 91.6zM272 208C289.7 208 304 222.3 304 240C304 257.7 289.7 272 272 272C254.3 272 240 257.7 240 240C240 222.3 254.3 208 272 208zM208 400C208 382.3 222.3 368 240 368C257.7 368 272 382.3 272 400C272 417.7 257.7 432 240 432C222.3 432 208 417.7 208 400zM432 336C449.7 336 464 350.3 464 368C464 385.7 449.7 400 432 400C414.3 400 400 385.7 400 368C400 350.3 414.3 336 432 336z")
    div.cookies-modal__container
      h4 Qu’est‑ce qu’un cookie ?
      p Petit fichier texte stocké dans votre navigateur qui conserve une session, un choix de langue ou d’autres paramètres pour améliorer votre expérience.

      h4 Types de cookies utilisés
      p Il existe plusieurs catégories de cookies :
      ul
        li
          span.font-bold Obligatoires
          p Ils sont essentiels au fonctionnement du Site, ces cookies ne peuvent pas être désactivés ou paramétrés sous peine de ne plus pouvoir accéder au Site, aux services du Site et/ou d’en altérer l’affichage. Ils vous permettent d’utiliser les principales fonctionnalités du Site et de sécuriser votre connexion.
          p Ainsi le dépôt de ces cookies ne requiert pas votre consentement préalable.

        li
          span.font-bold Fonctionnels / Statistiques 
          p Ils recueillent des données anonymes pour optimiser le Site et adapter l’affichage à votre appareil. Ils sont déposés sans consentement préalable mais modifiables à tout moment de votre navigation.

        li
          span.font-bold Tiers (publicités, réseaux sociaux)
          p Ils sont déposés par des partenaires externes (YouTube, Facebook, etc.). Ils peuvent mémoriser vos visites et diffuser des publicités ciblées.
          p Vous avez la possibilité d’accepter ou refuser ces cookies à tout moment de votre navigation.

      h4 Gérer vos préférences
      p Vous pouvez accepter ou refuser les catégories non-obligatoires via la popup ou bien en cliquant sur le lien « Gestion des cookies » dans le footer.
      br
      p Vous pouvez également les désactiver directement dans les paramètres de votre navigateur.
      p Nous attirons cependant votre attention sur le fait que la désactivation totale des cookies peut conduire à rendre certains de nos services inaccessibles ou entraîner leur utilisation moins performante, moins efficace ou moins adaptée.

      div.cookies-modal__buttons
        ComponentButton(title="Accepter" @click="choiceCookie('yes')")
        ComponentButton(title="Refuser" @click="choiceCookie('no')")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";
import type { YesNoMore } from "~/assets/types/types.d.ts";

const cookies: ModalProps = {
  title: "Politique des cookies",
  content: "Gestion transparente et respectueuse de votre vie privée",
};

const { setCookie } = useCookies();
const { setModalState } = useModalsState();

const choiceCookie = (choice: YesNoMore) => {
  setCookie(choice);
  setModalState("cookies", false);
}
</script>

<style lang="sass" scoped>
.cookies-modal

  &__container
    text-align: justify

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
