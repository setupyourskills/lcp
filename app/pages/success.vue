<template lang="pug">
div.modals
  ModalsPurchase
  ModalsContact
  ModalsMentions
  ModalsTerms
  ModalsConfidential
  ModalsCookies
  ModalsUse

div.popups
  PopupsCookies
  PopupsAlertInfo
  PopupsAlertOk
  PopupsAlertError

div.main-group
  SectionSuccess
</template>

<script setup lang="ts">
definePageMeta({
  layout: "success"
});
</script>
