<template lang="pug">
div.mentions-modal
  ComponentModal.mentions-modal__modal(modalName="mentions" :title="mentions.title" :content="mentions.content")
    template(#icon)
      svg(width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg")
        path(d="M16 32L32 8L48 32H16Z" stroke="#333333" stroke-width="4")
        path(d="M16 32L32 56L48 32Z" stroke="#333333" stroke-width="4")
    div.mentions-modal__container
      p.font-s Conformément aux dispositions des articles 6‑III et 19 de la loi n° 2004‑575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), le présent site internet https://www.setupyourskills.com (ci-après « le Site ») est soumis aux mentions légales suivantes :

      h4 1. Édition du site
      p Le Site est édité par la micro‑entreprise Carrillo Sébastien José, dont le siège social se situe au 8 rue Berthelot (95330 Domont, France), immatriculée sous le numéro R.C.S. Pontoise 992 139 279 ; bénéficiant de la franchise en base de TVA, elle ne possède pas de numéro intracommunautaire.
      br
      p La publication est assurée par Sébastien Carrillo et tout contact peut être adressé à l’e‑mail : setupyourskills@gmail.com ou bien via le formulaire de contact   

      h4 2. Hébergement
      p Le Site est hébergé par l’entreprise o2switch, dont le siège social se trouve au Chemin des Pardiaux (63000 Clermont‑Ferrand, France), joignable au 04 44 44 60 40 et disponible sur le site web https://www.o2switch.

      h4 3. Propriété intellectuelle
      p Tous les contenus présents sur le Site (textes, images, vidéos, logos, sons, bases de données, etc.) sont la propriété exclusive de SetupYourSkills ou font l’objet d’une autorisation d’utilisation préalable.
      br
      p Toute reproduction, représentation, modification, diffusion, ou utilisation de ces éléments, même partielle, est strictement interdite sans l’accord écrit exprès du titulaire des droits.

      h4 4.Données personnelles
      p Le Site traite les données utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).
      br
      p Pour connaître le détail des informations collectées, leur usage et les modalités d'exercice de vos droits, veuillez consulter la Politique de confidentialité.

      h4 5. Cookies
      p Le Site utilise uniquement des cookies strictement nécessaires au bon fonctionnement du site.
      p Aucun cookie de suivi publicitaire ou d’analyse tiers n’est installé sans votre consentement préalable.
      br
      p Pour plus d'information et vous permettre consulter la page des cookies.

      h4 6. Responsabilité
      p SetupYourSkills s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Toutefois, elle ne saurait être tenue responsable en cas d’erreurs, d’omissions, d’indisponibilités temporaires ou d’un mauvais usage du site par l’utilisateur.

      h4 7. Loi applicable et juridiction
      p Les présentes mentions légales sont régies par le droit français. Tout litige né à l’occasion de l’utilisation du Site sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social de SetupYourSkills (Domont).
      br
      p En accédant au Site, vous reconnaissez avoir pris connaissance et accepté les présentes mentions légales.

      h4 8. Médiation de la consommation
      p Conformément aux articles L. 212‑1 et suivants du Code de la consommation, tout litige entre le consommateur (personne physique) et SetupYourSkills relatif à l’utilisation du Site ou à toute prestation proposée pourra être soumis à une médiation amiable avant toute procédure judiciaire.
      br
      p La société de médiation est Médiation Professionnelle et possède le numéro SIRET 814 385 357 00029. 
      p Elle est située au 17 Rue Marc Sangnier (33130 Bégles, France), et son site internet se trouve à l’adresse suivante : https://www.mediateur-consommation-smp.fr .
      br
      p Cette structure a été habilitée pour intervenir en tant que tiers neutre afin de faciliter la recherche d’une solution amiable entre les parties concernées.

      h4 Liens hypertextes
      p Le site peut contenir des liens vers d’autres sites web qui ne sont pas édités par nous. Nous déclinons toute responsabilité quant au contenu, à la disponibilité ou à l’utilisation de ces sites tiers.
      br
      p La mise en place de liens hypertextes par des tiers vers des pages ou des documents diffusés sur le Site est autorisée sous réserve que les liens ne contreviennent pas aux intérêts de SetupYourSkills et qu’ils garantissent la possibilité pour l’utilisateur d’identifier l’origine et l’auteur du document.
      p Il est précisé que la mise en place de tels liens hypertextes à des fins de promotion commerciale des produits ou services proposés par un tiers est interdite.
      div.mentions-modal__button
        ComponentButton(title="Fermer" @click="closeModal")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";

const mentions: ModalProps = {
  title: "Mentions Légales",
  content: "Infos pratiques et obligations",
};

const { setModalState } = useModalsState();
const closeModal = () => setModalState("mentions", false);
</script>

<style lang="sass" scoped>
.mentions-modal

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

  &__button
    @include flexbox-wrap
    margin-top: $phi2
</style>
