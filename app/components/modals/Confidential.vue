<template lang="pug">
div.confidential-modal
  ComponentModal.confidential-modal__modal(modalName="confidential" :title="confidential.title" :content="confidential.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312C189.7 312 136 258.3 136 192C136 125.7 189.7 72 256 72zM226.3 368L285.7 368C315.4 368 343.4 375.3 368 388.1L368 392.4C348.4 410 336 435.5 336 463.9L336 559.9C336 565.4 336.5 570.8 337.3 576L77.7 576C61.3 576 48 562.7 48 546.3C48 447.8 127.8 368 226.3 368zM528 368.1C528 350.4 513.7 336.1 496 336.1C478.3 336.1 464 350.4 464 368.1L464 416L528 416L528 368.1zM384 464C384 443.1 397.4 425.3 416 418.7L416 368.1C416 323.9 451.8 288.1 496 288.1C540.2 288.1 576 323.9 576 368.1L576 418.7C594.6 425.3 608 443.1 608 464L608 560C608 586.5 586.5 608 560 608L432 608C405.5 608 384 586.5 384 560L384 464z")
    div.confidential-modal__container
      p.font-s Conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés n° 78‑17, ce Site internet (https://www.setupyourskills.com – ci‑après « le Site ») s’engage à protéger vos données personnelles.

      h4 Responsable du traitement
      p Carrillo Sébastien José (micro‑entreprise) est le responsable du traitement des données. Son adresse est le 8 rue Berthelot – 95330 Domont (France), et l’e‑mail de contact est <a href="mailto:setupyourskills@gmail.com">setupyourskills@gmail.com</a>.

      h4 Finalités et bases légales du traitement
      p <strong>Inscription à la newsletter</strong> : e‑mail – consentement explicite.
      p <strong>Réception de messages via le formulaire</strong> : Nom, prénom, e‑mail, message – nécessité contractuelle.
      p <strong>Paiements Stripe / PayPal</strong> : Adresse postale, nom, prénom, e‑mail, données bancaires – nécessité contractuelle (les informations bancaires ne sont jamais conservées sur le Site).
      p <strong>Publicités ciblées Google AdSense</strong> : Identifiants anonymisés, cookies tiers – consentement explicite.
      p <strong>Analyse du trafic (Matomo hébergé sur o2switch)</strong> : Adresse IP anonyme, comportement de navigation – nécessité fonctionnelle.
      p <strong>Gestion des cookies</strong> : Identifiants de session, préférences cookie – obligation légale.

      h4 Conservation des données
      p Les informations relatives aux commandes sont conservées pendant cinq ans à compter de la dernière transaction, conformément aux obligations comptables françaises. Les données d’inscription à la newsletter sont gardées tant que l’utilisateur ne se désinscrit pas ou ne demande pas la suppression de ses données. Les cookies fonctionnels expirent après deux jours (`session_id`) et six mois (`last_order_id`). Le cookie `cookie_consent`, qui stocke les préférences de consentement, est conservé pendant un an.

      h4 Droits des personnes concernées
      p Vous disposez des droits suivants (article 15‑21 RGPD) : accès, rectification, effacement, limitation du traitement, portabilité et opposition. Vous pouvez également retirer votre consentement à tout moment (ex. désinscription newsletter). Pour exercer ces droits, veuillez nous contacter par e‑mail à <a href="mailto:setupyourskills@gmail.com">setupyourskills@gmail.com</a>.

      h4 Sécurité des données
      p Toutes les communications entre l’utilisateur et le Site sont chiffrées via HTTPS (certificat SSL). Les informations sensibles liées aux paiements (numéro de carte bancaire, IBAN) sont traitées exclusivement par Stripe ou PayPal, qui disposent d’une certification PCI‑DSS 3.1+. Le serveur hébergé chez o2switch bénéficie d’un contrôle d’accès strict. Des sauvegardes régulières sont effectuées sur des supports sécurisés et chiffrés.

      h4 Transferts internationaux
      p Les seules données transférées hors de l’UE concernent les identifiants publicitaires déposés par Google AdSense, qui transitent vers les serveurs américains. Ce transfert est sécurisé grâce aux Standard Contractual Clauses (SCC) approuvées par le RGPD, garantissant un niveau de protection équivalent à celui de l’Union européenne.

      h4 Cookies et technologies similaires
      p Le Site utilise des cookies strictement nécessaires (`session_id`, `last_order_id`), ainsi que des cookies publicitaires (`adsense_optin`) et analytiques (Matomo hébergé sur o2switch). Vous pouvez gérer vos préférences via le bandeau cookie ou en supprimant les cookies depuis votre navigateur. Pour plus d’informations, consultez notre <a href="/cookies" target="_blank">Gestion des Cookies</a>.

      h4 Modifications de la politique
      p Cette politique peut être mise à jour afin de refléter l’évolution législative ou technique. Toute modification sera publiée sur le Site et prendra effet dès sa mise en ligne.
      br
      p En continuant votre navigation sans modifier vos préférences, vous acceptez implicitement les traitements décrits ci‑dessus.

      div.confidential-modal__button
        ComponentButton(title="Fermer" @click="setModalState('confidential', false)")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";

const confidential: ModalProps = {
  title: "Confidentialité / RGPD",
  content: "Protection de vos données personnelles - droits, traitements et garanties RGPD",
};

const { setModalState } = useModalsState();
</script>

<style lang="sass" scoped>
.confidential-modal

  &__container
    @include style-text
    text-align: justify

  &__button
    @include flexbox-wrap
    margin-top: $phi2
</style>
