<template lang="pug">
div.cookie-popup
  ComponentPopup(popupName="cookies" :title="cookies.title" :content="cookies.content")
    div.cookie-popup__buttons
      ComponentButton(title="Accepter" @click="choiceCookie('yes')")
      ComponentButton(title="Refuser" @click="choiceCookie('no')")
</template>

<script setup lang="ts">
import type { ArticleHeader } from "~/assets/types/types.d.ts";
import type { YesNo } from "~/assets/types/types.d.ts";

const cookies: ArticleHeader = {
  title: "🍪 Cookies",
  content: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. Vous pouvez accepter ou refuser les cookies non essentiels.",
};

const { setCookie } = useCookies();
const { setPopupState } = usePopupsState();

const choiceCookie = (choice: YesNo) => {
  setCookie(choice);
  setPopupState("cookies", false);
}
</script>

<style lang="sass" scoped>
.cookie-popup 

  &__buttons
    @include flexbox-wrap
</style>
