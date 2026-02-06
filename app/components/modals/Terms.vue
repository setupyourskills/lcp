<template lang="pug">
div.terms-modal
  ComponentModal.terms-modal__modal(modalName="terms" :title="terms.title" :content="terms.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z")
    div.terms-modal__container
      p.font-s En passant une commande sur le Site https://www.setupyourskills.com – ci‑après « le Site » – vous acceptez sans réserve les présentes conditions générales de vente.

      h4 Objet
      p Les présentes CGV régissent la commercialisation de poudres de couleur pour gravure laser vendues par lot de deux boîtes contenant chacune 300 g. Le site propose neuf couleurs différentes ; chaque achat implique l’achat d’un lot complet (deux boîtes).

      h4 Prix
      p Tous les prix indiqués sur le Site sont exprimés en euros (€) et incluent la TVA applicable selon la législation française (exonération ou franchise en base). Les frais de livraison, les taxes d’importation et tout autre coût supplémentaire (douane, frais bancaires) seront clairement affichés avant la validation finale de la commande.

      h4 Commande
      p Pour passer une commande, l’utilisateur doit :
      ol
        li Sélectionner la couleur désirée parmi les neuf options disponibles.
        li Choisir le nombre de lots souhaité (minimum un lot = deux boîtes).
        li Remplir le formulaire d’achat avec ses coordonnées complètes (nom, prénom, adresse postale, e‑mail).
        li Valider le paiement via Stripe, PayPal ou carte bancaire.
      p La commande n’est confirmée que lorsqu’un message de confirmation est envoyé à l’e‑mail fourni et qu’une facture électronique est générée.

      h4 Paiement
      p Les paiements sont traités exclusivement par les prestataires Stripe et PayPal. Les données bancaires (numéro de carte, IBAN) ne sont jamais stockées sur le Site ; elles transitent directement vers les serveurs sécurisés des prestataires. Le paiement doit être effectué immédiatement lors de la validation de la commande.

      h4 Livraison
      p Les produits sont expédiés depuis Taïwan vers l’adresse indiquée par le client. Les délais de livraison varient entre 5 et 15 jours ouvrables selon la destination, sans garantie d’arrivée à une date précise. Les frais de douane, taxes d’importation ou autres charges supplémentaires à l’arrivée sont à la charge du client.

      h4 Droit de rétractation
      p Conformément aux dispositions du Code de la consommation (article L221‑18), le consommateur dispose d’un délai de 14 jours à compter de la réception pour se rétracter sans donner de motif. Le produit doit être retourné dans son emballage d’origine, non ouvert et en parfait état. Les frais de retour sont à la charge du client, sauf erreur du vendeur.

      h4 Garanties
      p Les produits bénéficient de la garantie légale contre les défauts de conformité et de qualité pendant deux ans à compter de la date de livraison. Le responsable du Site n’est pas responsable des dommages indirects ou pertes de données liées à l’utilisation du produit, sauf faute manifeste.

      h4 Responsabilité
      p Le responsable du Site s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Néanmoins, il ne saurait être tenu responsable en cas d’erreurs, omissions ou de tout dommage indirect (perte de données, interruption de service) lié à l’utilisation du Site.

      h4 Modifications des CGV
      p Les CGV peuvent être modifiées à tout moment. Les versions mises à jour seront publiées sur le Site et entreront immédiatement en vigueur. L’utilisation continue du Site après publication constitue l’acceptation tacite des modifications.

      h4 Loi applicable et juridiction
      p Les présentes CGV sont régies par la loi française. Tout litige relatif à leur interprétation ou exécution sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social (Domont).

      div.terms-modal__button
        ComponentButton(title="Fermer" @click="setModalState('terms', false)")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";

const terms: ModalProps = {
  title: "Conditions générales de vente",
  content: "Modalités d'achat, paiement et obligations contractuelles",
};

const { setModalState } = useModalsState();
</script>

<style lang="sass" scoped>
.terms-modal

  &__container
    @include style-text
    text-align: justify

  &__button
    @include flexbox-wrap
    margin-top: $phi2
</style>
