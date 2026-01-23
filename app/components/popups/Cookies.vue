<template lang="pug">
ComponentPopup(popupName="cookies")
  h1 Cookies
  ComponentButton(title="Accepter" @click="setCookie('yes')")
  ComponentButton(title="Refuser" @click="setCookie('no')")
</template>

<script setup lang="ts">
const { setCookie } = useCookies();
</script>
