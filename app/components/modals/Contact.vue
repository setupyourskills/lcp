<template lang="pug">
div.contact-modal
  ComponentModal.contact-modal__modal(modalName="contact" :title="contact.title" :content="contact.content")
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180" height="110" viewBox="0 100 256 48")
        g(transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" style="stroke: none; stroke-width: 0; fill: #FAD289; opacity: 1;")
          path(d="M 82.127 71.258 H 26.728 c -4.341 0 -7.873 -3.532 -7.873 -7.873 v -10.16 c 0 -0.828 0.671 -1.5 1.5 -1.5 s 1.5 0.672 1.5 1.5 v 10.16 c 0 2.687 2.186 4.873 4.873 4.873 h 55.399 c 2.687 0 4.873 -2.187 4.873 -4.873 v -36.77 c 0 -2.687 -2.187 -4.873 -4.873 -4.873 H 26.728 c -2.687 0 -4.873 2.186 -4.873 4.873 v 10.038 c 0 0.829 -0.671 1.5 -1.5 1.5 s -1.5 -0.671 -1.5 -1.5 V 26.615 c 0 -4.341 3.532 -7.873 7.873 -7.873 h 55.399 c 4.341 0 7.873 3.532 7.873 7.873 v 36.77 C 90 67.726 86.468 71.258 82.127 71.258 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 63.732 45 l 16.726 -15.344 c 0.61 -0.56 0.651 -1.509 0.092 -2.12 c -0.56 -0.61 -1.508 -0.65 -2.119 -0.091 L 54.427 49.466 L 30.425 27.445 c -0.611 -0.559 -1.559 -0.519 -2.12 0.091 c -0.56 0.61 -0.519 1.56 0.091 2.12 L 45.122 45 L 28.396 60.345 c -0.61 0.561 -0.651 1.509 -0.091 2.119 c 0.296 0.323 0.7 0.486 1.106 0.486 c 0.362 0 0.726 -0.131 1.014 -0.395 l 16.916 -15.52 l 6.072 5.571 c 0.286 0.263 0.65 0.395 1.014 0.395 s 0.728 -0.132 1.014 -0.395 l 6.073 -5.571 l 16.917 15.52 c 0.288 0.264 0.651 0.395 1.014 0.395 c 0.405 0 0.81 -0.163 1.105 -0.486 c 0.56 -0.61 0.519 -1.559 -0.092 -2.119 L 63.732 45 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 25.423 46.5 H 7.539 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 17.885 c 0.829 0 1.5 0.671 1.5 1.5 S 26.252 46.5 25.423 46.5 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 12.497 36.016 H 1.5 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 10.997 c 0.829 0 1.5 0.671 1.5 1.5 S 13.326 36.016 12.497 36.016 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
          path(d="M 12.497 56.984 H 4.394 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 8.104 c 0.829 0 1.5 0.672 1.5 1.5 S 13.326 56.984 12.497 56.984 z" style="fill: #FAD289; stroke: #FAD289; stroke-width: 1;")
    form.contact-modal__form(@submit.prevent="send")
      ComponentInput.contact-modal__input-name(v-model="contactNameInput" placeholder="Nom" type="text" maxlength="255" required)
      ComponentInput.contact-modal__input.contact-modal__input-email(v-model="contactEmailInput" placeholder="Email" type="email" maxlength="255" required)
      ComponentTextarea.contact-modal__textarea.contact-modal__textarea-content( v-model="contactContentTextarea" placeholder="Message" rows="6" maxlength="2500" required)
      div.contact-modal__buttons
        ComponentButton.contact-modal__button-cancel(title="Annuler" @click="closeModal()")
        ComponentButton.contact-modal__button-send(title="Envoyer" type="submit")
      p.contact-modal__status.font-xs  {{ contactStatusMessage }}
</template>

<script setup lang="ts">
import type { FormStatus } from "~/assets/types/types.d.ts";
import type { ModalProps } from "~/assets/types/types.d.ts";

const CLOSE_MODAL_TIMEOUT = 2000;

const contact: ModalProps = {
  title: "Nous contacter",
  content: "Veuillez remplir le formulaire ci-dessous pour nous laisser un message.",
};

const { setModalState } = useModalsState();
const closeModal = () => setModalState("contact", false);

const status: FormStatus = {
  ok: "✅ Votre message a bien été envoyé !",
  failed: "❌ Une erreur s'est produite !",
  invalid: "❌ Votre formulaire est invalide !"
};

const contactNameInput = ref();
const contactEmailInput = ref();
const contactContentTextarea = ref();
const contactStatusMessage = ref();

const send = () => {
  const { isInvalidRegex, isTooLong } = useCheckEmail(contactEmailInput.value);

  if (isInvalidRegex || isTooLong) contactStatusMessage.value = status.invalid;
  else if (contactNameInput.value.length > 255) contactStatusMessage.value = status.invalid;
  else if (contactContentTextarea.value.length > 2500) contactStatusMessage.value = status.invalid;
  else {
    console.log("sent");
    contactStatusMessage.value = status.ok;

    setTimeout(() => {
      contactEmailInput.value = "";
      contactNameInput.value = "";
      contactContentTextarea.value = "";
      closeModal();
    }, CLOSE_MODAL_TIMEOUT);
  }
}
</script>

<style lang="sass" scoped>
.contact-modal 

  &__form
    @include flexbox-wrap

  &__input-name,
  &__input-email
    flex: 1 1 250px

  &__textarea-content
    flex: 1 1 100%

  &__buttons
    @include flexbox-wrap

  &__status
    flex: 0 1 100%
    font-style: normal
</style>
