<template lang="pug">
div.cookies-modal
  ComponentModal.cookies-modal__modal(modalName="cookies" :title="cookies.title" :content="cookies.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M321.5 91.6C320.7 86.2 316.6 81.8 311.2 81C289.1 77.9 266.6 81.9 246.8 92.4L172.8 131.9C153.1 142.4 137.2 158.9 127.4 179L90.7 254.6C80.9 274.7 77.7 297.5 81.6 319.5L96.1 402.3C100 424.4 110.7 444.6 126.8 460.2L187.1 518.6C203.2 534.2 223.7 544.2 245.8 547.3L328.8 559C350.9 562.1 373.4 558.1 393.2 547.6L467.2 508.1C486.9 497.6 502.8 481.1 512.6 460.9L549.3 385.4C559.1 365.3 562.3 342.5 558.4 320.5C557.5 315.2 553.1 311.2 547.8 310.4C496.3 302.2 455 263.3 443.3 213C441.5 205.4 435.3 199.6 427.6 198.4C373 189.7 329.9 146.4 321.4 91.6zM272 208C289.7 208 304 222.3 304 240C304 257.7 289.7 272 272 272C254.3 272 240 257.7 240 240C240 222.3 254.3 208 272 208zM208 400C208 382.3 222.3 368 240 368C257.7 368 272 382.3 272 400C272 417.7 257.7 432 240 432C222.3 432 208 417.7 208 400zM432 336C449.7 336 464 350.3 464 368C464 385.7 449.7 400 432 400C414.3 400 400 385.7 400 368C400 350.3 414.3 336 432 336z")
    div.cookies-modal__container
      p.font-s Conformément aux exigences du Règlement Général sur la Protection des Données (RGPD) et à la directive e‑Privacy, ce site web (https://www.setupyourskills.com – ci‑après « le Site ») utilise différents types de cookies.

      h4 Catégories de cookies
      p Le Site emploie des cookies strictement nécessaires au fonctionnement (ex. panier, connexion à la newsletter) ainsi que des cookies tiers pour la publicité ciblée via Google AdSense et l’analyse du trafic avec Matomo hébergé sur le serveur o2switch.

      h4 Cookies fonctionnels
      p Ils permettent de conserver votre session active (ex. panier, inscription à la newsletter) ou d’identifier votre dernière commande pour un retour plus rapide. Ces cookies sont indispensables au bon fonctionnement du Site et ne nécessitent pas de consentement préalable.

      h4 Cookies publicitaires
      p Ils activent ou désactivent les publicités ciblées Google AdSense. Le dépôt de ces cookies repose sur votre consentement explicite, que vous pouvez donner via le bandeau cookie.

      h4 Cookies d’analyse
      p Ils sont utilisés pour mesurer la fréquentation et améliorer l’expérience utilisateur. Les données collectées restent anonymisées (adresse IP anonyme) et ne sont pas transférées hors de l’UE.

      h4 Consentement
      p Dès votre première visite, un bandeau clair apparaît en bas de page avec deux options :
      ul
        li <strong>« Accepter tout »</strong> – active tous les cookies, y compris ceux à des fins publicitaires.
        li <strong>« Gérer mes préférences »</strong> – ouvre cette fenêtre modale où vous pouvez cocher ou décocher chaque catégorie.
      p Le cookie <code>cookie_consent</code> est créé après votre décision et contient la valeur (<code>true/false</code>) pour chaque catégorie de cookies. Si vous choisissez de refuser les cookies publicitaires, le cookie <code>adsense_optin</code> n’est pas déposé et Google AdSense affichera alors des annonces non ciblées (cookies strictement nécessaires uniquement).

      h4 Cookies tiers et publicité
      p Google AdSense dépose des cookies tiers pour diffuser des publicités ciblées basées sur votre historique de navigation. Le traitement est soumis à votre consentement explicite via <code>adsense_optin</code>. Les données transférées vers les serveurs américains sont sécurisées par les Standard Contractual Clauses (SCC) approuvées par le RGPD, garantissant un niveau de protection équivalent à celui de l’UE.

      h4 Politique d’utilisation des cookies
      ul 
        li <strong>Cookies fonctionnels</strong> : essentiels pour la navigation et l’interaction avec les services du Site.
        li <strong>Cookies publicitaires</strong> : permettent d’afficher des annonces pertinentes mais ne compromettent pas votre confidentialité.
        li <strong>Cookies analytiques</strong> (Matomo) : aident à améliorer la performance et l’expérience utilisateur sans transfert de données vers des sites tiers.

      h4 Modifications
      p Cette politique peut être mise à jour pour refléter l’évolution législative ou technique. Toute modification sera publiée sur le Site et prendra effet dès sa mise en ligne.
      br
      p En continuant votre navigation sans modifier vos préférences, vous acceptez implicitement le dépôt des cookies décrits ci‑dessus.

      div.cookies-modal__buttons
        ComponentButton(title="Accepter" @click="choiceCookie('yes')")
        ComponentButton(title="Refuser" @click="choiceCookie('no')")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";
import type { YesNoMore } from "~/assets/types/types.d.ts";

const cookies: ModalProps = {
  title: "Gestion des cookies",
  content: "Consentement, finalités et contrôle de votre expérience en ligne",
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
    @include style-text
    text-align: justify

  &__buttons
    @include flexbox-wrap
    margin-top: $phi2
</style>
