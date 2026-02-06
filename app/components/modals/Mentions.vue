<template lang="pug">
div.mentions-modal
  ComponentModal.mentions-modal__modal(modalName="mentions" :title="mentions.title" :content="mentions.content")
    template(#icon)
      svg.mentions-modal__svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z")
    div.mentions-modal__container
      p.font-s Conformément aux dispositions des articles 6‑III et 19 de la loi n° 2004‑575 du 21 juin 2004 (LCEN), le présent site internet https://www.setupyourskills.com (ci‑après « le Site ») est soumis aux mentions légales suivantes.

      h4 1. Édition du site
      p Le Site est édité par la micro‑entreprise Carrillo Sébastien José, dont le siège social se situe au 8 rue Berthelot – 95330 Domont (France), immatriculée sous le numéro R.C.S. Pontoise : 992 139 279 ; bénéficiant de la franchise en base de TVA, elle ne possède pas de numéro intracommunautaire.
      br
      p La publication est assurée par Sébastien Carrillo et tout contact peut être adressé à l’e‑mail : <a href="mailto:setupyourskills@gmail.com">setupyourskills@gmail.com</a> ou via le formulaire de contact.

      h4 2. Hébergement
      p Le Site est hébergé par l’entreprise o2switch, dont le siège social se trouve au Chemin des Pardiaux – 63000 Clermont‑Ferrand (France), joignable au <a href="tel:+33444446040">04 44 44 60 40</a> et disponible sur le site web : <a href="https://www.o2switch" target="_blank">o2switch</a>.

      h4 3. Propriété intellectuelle
      p Tous les contenus présents sur le Site (textes, images, vidéos, logos, sons, bases de données, etc.) sont la propriété exclusive de SetupYourSkills ou font l’objet d’une autorisation d’utilisation préalable.
      br
      p Toute reproduction, représentation, modification, diffusion ou utilisation de ces éléments, même partielle, est strictement interdite sans l’accord écrit exprès du titulaire des droits.

      h4 4. Données personnelles
      p Le Site traite les données utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).
      br
      p Pour connaître le détail des informations collectées, leur usage et les modalités d’exercice de vos droits, veuillez consulter notre <a href="/confidentialite" target="_blank">Politique de confidentialité</a>.

      h4 5. Cookies
      p Le Site utilise uniquement des cookies strictement nécessaires au bon fonctionnement du site.
      p Aucun cookie de suivi publicitaire ou d’analyse tiers n’est installé sans votre consentement préalable.
      br
      p Pour plus d’information et pour consulter la page dédiée aux cookies, cliquez : <a href="/cookies" target="_blank">Gestion des Cookies</a>.

      h4 6. Responsabilité
      p SetupYourSkills s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Toutefois, elle ne saurait être tenue responsable en cas d’erreurs, d’omissions, d’indisponibilités temporaires ou d’un mauvais usage du site par l’utilisateur.

      h4 7. Loi applicable et juridiction
      p Les présentes mentions légales sont régies par le droit français. Tout litige né à l’occasion de l’utilisation du Site sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social de SetupYourSkills (Domont).
      br
      p  En accédant au Site, vous reconnaissez avoir pris connaissance et accepté les présentes mentions légales.

      h4 8. Médiation de la consommation
      p Conformément aux articles L. 212‑1 et suivants du Code de la consommation, tout litige entre le consommateur (personne physique) et SetupYourSkills relatif à l’utilisation du Site ou à toute prestation proposée pourra être soumis à une médiation amiable avant toute procédure judiciaire.
      br
      p La société de médiation est Médiation Professionnelle et possède le numéro SIRET 814 385 357 00029.
      p Elle est située au 17 Rue Marc Sangnier – 33130 Bégles (France), et son site internet se trouve à l’adresse suivante : <a href="https://www.mediateur-consommation-smp.fr" target="_blank">Médiation Professionnelle</a>.
      br
      p Cette structure a été habilitée pour intervenir en tant que tiers neutre afin de faciliter la recherche d’une solution amiable entre les parties concernées.

      h4 Liens hypertextes
      p Le site peut contenir des liens vers d’autres sites web qui ne sont pas édités par nous. Nous déclinons toute responsabilité quant au contenu, à la disponibilité ou à l’utilisation de ces sites tiers.
      br
      p  La mise en place de liens hypertextes par des tiers vers des pages ou des documents diffusés sur le Site est autorisée sous réserve que les liens ne contreviennent pas aux intérêts de SetupYourSkills et qu’ils garantissent la possibilité pour l’utilisateur d’identifier l’origine et l’auteur du document.
      br
      p Il est précisé que la mise en place de tels liens hypertextes à des fins de promotion commerciale des produits ou services proposés par un tiers est interdite.

      div.mentions-modal__button
        ComponentButton(title="Fermer" @click="setModalState('mentions', false)")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";

const mentions: ModalProps = {
  title: "Mentions Légales",
  content: "Identité du site, responsabilité et cadre juridique - informations obligatoires à connaître",
};

const { setModalState } = useModalsState();
</script>

<style lang="sass" scoped>
.mentions-modal

  &__container
    @include style-text
    text-align: justify

  &__button
    @include flexbox-wrap
    margin-top: $phi2
</style>
