<template lang="pug">
div.use-modal
  ComponentModal.use-modal__modal(modalName="use" :title="use.title" :content="use.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M320 216C368.6 216 408 176.6 408 128C408 79.4 368.6 40 320 40C271.4 40 232 79.4 232 128C232 176.6 271.4 216 320 216zM320 514.7L320 365.4C336.3 358.6 352.9 351.7 369.7 344.7C408.7 328.5 450.5 320.1 492.8 320.1L512 320.1L512 480.1L492.8 480.1C433.7 480.1 375.1 491.8 320.5 514.6L320 514.8zM320 296L294.9 285.5C248.1 266 197.9 256 147.2 256L112 256C85.5 256 64 277.5 64 304L64 496C64 522.5 85.5 544 112 544L147.2 544C197.9 544 248.1 554 294.9 573.5L307.7 578.8C315.6 582.1 324.4 582.1 332.3 578.8L345.1 573.5C391.9 554 442.1 544 492.8 544L528 544C554.5 544 576 522.5 576 496L576 304C576 277.5 554.5 256 528 256L492.8 256C442.1 256 391.9 266 345.1 285.5L320 296z")
    div.use-modal__container
      p.font-s En accédant ou en utilisant ce Site internet (https://www.setupyourskills.com – ci‑après « le Site »), vous acceptez sans réserve les présentes conditions générales d’utilisation.

      h4 Objet
      p Le Site a pour objet de présenter et de vendre des poudres de couleur destinées à la gravure laser, ainsi que de fournir aux utilisateurs des informations techniques, commerciales et promotionnelles relatives à ces produits.

      h4 Accès au Site
      p L’utilisation du Site est librement accessible à toute personne majeure disposant d’une connexion internet et ne faisant pas l’objet d’un interdiction légale ou administrative. Le Site se réserve le droit de refuser l’accès ou de suspendre temporairement la disponibilité pour des raisons techniques, de maintenance ou pour tout autre motif jugé nécessaire.

      h4 Propriété intellectuelle
      p Tous les contenus présents sur le Site (textes, images, vidéos, logos, sons, bases de données) sont protégés par le droit d’auteur, le droit des marques et la législation relative à la propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion partielle ou totale sans autorisation expresse du titulaire des droits est strictement interdite.

      h4 Utilisation du Site
      p Les utilisateurs s’engagent à utiliser le Site conformément aux dispositions légales en vigueur et aux présentes CGU. Il est formellement interdit d’utiliser le Site à des fins illicites, diffamatoires, harcelantes ou portant atteinte aux droits de tiers (ex. piratage, injection SQL, spamming).

      h4 Inscription et compte utilisateur
      p Pour accéder à certaines fonctionnalités (newsletter, historique des commandes), l’utilisateur peut s’inscrire en fournissant son nom, prénom et e‑mail. L’e‑mail fourni devient l’identifiant unique de l’utilisateur ; le mot de passe doit rester confidentiel. Le responsable du Site n’est pas responsable des pertes ou malveillances résultant d’une mauvaise gestion du compte par l’utilisateur.

      h4 Commandes et paiement
      p Les commandes se passent exclusivement via Stripe, PayPal ou carte bancaire (traités par Stripe). Les informations bancaires ne sont jamais conservées sur le Site ; elles transitent directement vers les serveurs sécurisés des prestataires. Le prix affiché inclut la TVA applicable (si nécessaire) et tout frais supplémentaires (expédition, taxes d’importation) est indiqué clairement avant la validation finale.

      h4 Livraison
      p Les produits sont expédiés depuis Taïwan vers le pays de livraison indiqué par l’utilisateur. Les délais estimés varient entre 5 et 15 jours ouvrables selon la destination, sans garantie d’arrivée à une date précise. Les frais de douane, taxes d’importation ou autres charges supplémentaires à l’arrivée sont à la charge du client.

      h4 Retours et rétractation
      p Conformément aux dispositions du Code de la consommation (article L221‑18), le consommateur dispose d’un délai de 14 jours à compter de la réception pour se rétracter sans donner de motif. Le produit doit être retourné dans son emballage d’origine, non ouvert et en parfait état. Les frais de retour sont à la charge du client, sauf erreur du vendeur.

      h4 Responsabilité
      p Le responsable du Site s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Néanmoins, il ne saurait être tenu responsable en cas d’erreurs, omissions ou de tout dommage indirect (perte de données, interruption de service) lié à l’utilisation du Site.

      h4 Cookies et suivi
      p Le Site utilise des cookies pour garantir son bon fonctionnement, personnaliser l’expérience utilisateur, gérer la newsletter, suivre les ventes et afficher des publicités ciblées via Google AdSense. L’utilisateur peut gérer ses préférences via le bandeau cookie présent sur chaque page ou en supprimant les cookies depuis son navigateur.

      h4 Modifications des CGU
      p Le responsable du Site se réserve le droit de modifier, compléter ou mettre à jour ces CGU à tout moment. Les versions mises à jour seront publiées sur le Site et entreront immédiatement en vigueur. L’utilisation continue du Site après publication constitue l’acceptation tacite des modifications.

      h4 Loi applicable et juridiction
      p Les présentes CGU sont régies par la loi française. Tout litige relatif à leur interprétation ou exécution sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social (Domont).

      div.use-modal__button
        ComponentButton(title="Fermer" @click="setModalState('use', false)")
</template>

<script setup lang="ts">
import type { ModalProps } from "~/assets/types/types.d.ts";

const use: ModalProps = {
  title: "Conditions générales d'utilisation",
  content: "Accès, utilisation et droits des utilisateurs, principes fondamentaux du site",
};

const { setModalState } = useModalsState();
</script>

<style lang="sass" scoped>
.use-modal

  &__container
    @include style-text
    text-align: justify

  &__button
    @include flexbox-wrap
    margin-top: $phi2
</style>
