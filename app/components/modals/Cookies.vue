<template lang="pug">
div.cookies-modal
  ComponentModal.cookies-modal__modal(modalName="cookies" :title="cookies.title" :content="cookies.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(style="fill:#F6AE2D;" d="M 272.16797 208.41211 C 266.49079 208.37331 263.36542 209.08579 257.98633 211.64648 C 249.7333 215.5753 242.89416 224.32838 240.99805 233.39062 C 238.78542 243.96563 241.88697 254.40572 249.5293 262.10938 C 254.7119 267.33354 260.52738 270.36696 267.44922 271.45898 C 270.32938 271.91337 276.29594 271.61516 279.5293 270.85547 C 282.96649 270.0479 289.33476 266.81027 292.08789 264.4707 C 299.71445 257.98979 303.58008 249.69384 303.58008 239.80664 C 303.58008 227.89871 297.191 217.48919 286.41406 211.83984 C 281.88346 209.46487 277.66713 208.44971 272.16797 208.41211 z M 432.53125 336.44727 C 429.2048 336.35972 425.93139 336.66009 423.58984 337.37109 C 404.0374 343.3082 394.83318 364.19837 403.77734 382.3418 C 407.56264 390.02037 415.94372 396.77343 424.15625 398.76172 C 428.09773 399.71572 435.98626 399.72021 439.71484 398.76953 C 451.36036 395.80026 460.82207 385.84162 463.11914 374.13477 C 464.03417 369.47137 463.50953 361.76888 462 357.69922 C 458.43691 348.0933 451.14097 340.92711 441.78906 337.84961 C 439.2371 337.00982 435.8577 336.53481 432.53125 336.44727 z M 239.77148 368.42383 C 234.25839 368.46152 230.05535 369.47684 225.48438 371.87305 C 209.87653 380.05504 203.98545 398.44256 211.82031 414.52148 C 213.04517 417.03516 214.59966 419.0552 217.67188 422.125 C 223.12191 427.57073 228.43618 430.34919 235.54492 431.4707 C 238.72463 431.97235 244.25914 431.6206 247.95508 430.68164 C 259.16583 427.83352 268.3917 418.17709 270.96875 406.59375 C 272.71219 398.75734 270.9712 389.33838 266.54492 382.66992 C 263.64637 378.30306 258.52468 373.8345 253.89453 371.63086 C 248.57314 369.09823 245.434 368.38513 239.77148 368.42383 z")
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
        li <strong>« Accepter »</strong> – active tous les cookies, y compris ceux à des fins publicitaires.
        li <strong>« En savoir plus... »</strong> – ouvre cette fenêtre modale où vous pouvez cocher ou décocher chaque catégorie.
      p Le cookie <code>cookie_consent</code> est créé après votre décision et contient la valeur (<code>true/false</code>) pour chaque catégorie de cookies. Si vous choisissez de refuser les cookies publicitaires, le cookie <code>adsense_optin</code> n’est pas déposé et Google AdSense affichera alors des annonces non ciblées (cookies strictement nécessaires uniquement).

      h4 Cookies tiers et publicité
      p Google AdSense dépose des cookies tiers pour diffuser des publicités ciblées basées sur votre historique de navigation. Le traitement est soumis à votre consentement explicite via <code>adsense_optin</code>. Les données transférées vers les serveurs américains sont sécurisées par les Standard Contractual Clauses (SCC) approuvées par le RGPD, garantissant un niveau de protection équivalent à celui de l’UE.

      h4 Politique d’utilisation des cookies
      ul 
        li <strong>Cookies nécessaires</strong> : obligatoires pour assurer le bon fonctionnement du Site.
        li <strong>Cookies fonctionnels</strong> : essentiels pour la navigation et l’interaction avec les services du Site.
        li <strong>Cookies publicitaires</strong> : permettent d’afficher des annonces pertinentes mais ne compromettent pas votre confidentialité.
        li <strong>Cookies analytiques</strong> : aident à améliorer la performance et l’expérience utilisateur sans transfert de données vers des sites tiers.

      h4 Modifications
      p Cette politique peut être mise à jour pour refléter l’évolution législative ou technique. Toute modification sera publiée sur le Site et prendra effet dès sa mise en ligne.
      br
      p En continuant votre navigation sans modifier vos préférences, vous acceptez implicitement le dépôt des cookies décrits ci‑dessus.

      h4 Paramètres des cookies
      div.cookies-modal__consent-group
        div.cookies-modal__consent(v-for="cat in categories" :key="cat.key")
          ComponentSwitch(
            :label="cat.label"
            v-model="consent[cat.key]"
            :deactivated="!cat.mutable"
          )

      div.cookies-modal__buttons
        ComponentButton(title="Accepter et Fermer" @click="choiceCookie('yes')")
</template>

<script setup lang="ts">
import type { ModalProps, YesNoMore } from "~/assets/types/types.d.ts";

const cookies: ModalProps = {
  title: "Gestion des cookies",
  content: "Consentement, finalités et contrôle de votre expérience en ligne",
};

const { COOKIES_ACCEPTED_KEY, COOKIES_CAT_KEYS, setCookie } = useCookies();
const { setModalState } = useModalsState();

const choiceCookie = (choice: YesNoMore) => {
  setCookie(COOKIES_ACCEPTED_KEY, choice);
  setModalState("cookies", false);
};

const categories = [
  {
    key: "functional",
    label: "Fonctionnels",
    mutable: false,
  },
  {
    key: "advertising",
    label: "Publicitaires",
    mutable: true,
  },
  {
    key: "analytics",
    label: "Analytiques",
    mutable: true,
  },
];

const consent = reactive(
  Object.fromEntries(COOKIES_CAT_KEYS.map(k => [k, true]))
);

let prevVal = { ...consent };
watch(() => consent, (newVal) => {
  for (const key in newVal) {
    if (newVal[key] !== prevVal[key]) {
      setCookie(key, newVal[key] ? "yes" : "no");

      switch (key) {
        case "functional": {
          break;
        }
        case "advertising": {
          break;
        }
        case "analytics": {
          break;
        }
      }
    }
  }

  prevVal = { ...newVal };
}, { deep: true });
</script>

<style lang="sass" scoped>
.cookies-modal

  &__container
    @include style-text
    text-align: justify

  &__consent-group
    margin-bottom: $phi2

  &__consent
    margin-bottom: $phi-1

  &__buttons
    @include flexbox-wrap
</style>
