<template lang="pug">
div.modals
  ModalsPurchase
  ModalsContact
  ModalsMentions
  ModalsTerms
  ModalsConfidential
  ModalsCookies
  ModalsUse
  ModalsSuccess

div.popups
  PopupsCookies
  PopupsAlertInfo
  PopupsAlertOk
  PopupsAlertError

div.main-group
  SectionHero
  SectionFeatures.margin-space#features
  SectionVideo.margin-space#demo
  SectionColors.margin-space#colors
  SectionPurchase#purchase
  SectionFaq.margin-space#faq
  SectionTestimonials.margin-space#testimonials
  SectionNewsletter#newsletter
</template>

<script setup lang="ts">
const route = useRoute();
const status = route.query.status;
const hasStatus = !!status

if (hasStatus) {
  const { setModalState } = useModalsState();

  switch (status) {
    case "success":
      setTimeout(() => {
        setModalState("success", true)
      }, OPEN_MODAL_TIMEOUT);
      break

    case "cancel":
      setTimeout(() => {
        setModalState("purchase", true)
      }, OPEN_MODAL_TIMEOUT);
      break
  }
}
</script>
