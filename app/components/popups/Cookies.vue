<template lang="pug">
div.cookie-popup
  ComponentPopup(popupName="cookies" :title="cookies.title" :content="cookies.content")
    div.cookie-popup__buttons
      ComponentButton(title="En savoir plus..." @click="choiceCookie('more')")
      ComponentButton(title="Accepter" @click="choiceCookie('yes')")
</template>

<script setup lang="ts">
import type { ArticleHeader } from "~/assets/types/types.d.ts";
import type { YesNoMore } from "~/assets/types/types.d.ts";

const OPEN_MODAL_TIMEOUT = 400;

const cookies: ArticleHeader = {
  title: "🍪 Cookies",
  content: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. Vous pouvez accepter ou refuser les cookies non essentiels.",
};

const { setCookie } = useCookies();
const { setPopupState } = usePopupsState();
const { setModalState } = useModalsState();

const choiceCookie = (choice: YesNoMore) => {
  if (choice === "yes") setCookie(choice);
  else {
    setTimeout(() => {
      setModalState("cookies", true);
    }, OPEN_MODAL_TIMEOUT);
  }

  setPopupState("cookies", false);
}
</script>

<style lang="sass" scoped>
.cookie-popup 

  &__buttons
    @include flexbox-wrap
</style>
