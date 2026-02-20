<template lang="pug">
div.contact-modal
  ComponentModal.contact-modal__modal(
    modalName="contact"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
    template(#icon)
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640")
        path(d="M64 176C64 149.5 85.5 128 112 128L528 128C554.5 128 576 149.5 576 176L576 257.4C551.6 246.2 524.6 240 496 240C408.3 240 334.3 298.8 311.3 379.2C304.2 377.9 297.2 375 291.2 370.4L83.2 214.4C71.1 205.3 64 191.1 64 176zM304 432C304 460.6 310.2 487.6 321.4 512L128 512C92.7 512 64 483.3 64 448L64 260L262.4 408.8C275 418.2 289.3 424.2 304.1 426.7C304.1 428.5 304 430.2 304 432zM352 432C352 352.5 416.5 288 496 288C575.5 288 640 352.5 640 432C640 511.5 575.5 576 496 576C416.5 576 352 511.5 352 432zM553.4 371.1C546.3 365.9 536.2 367.5 531 374.6L478 447.5L451.2 420.7C445 414.5 434.8 414.5 428.6 420.7C422.4 426.9 422.4 437.1 428.6 443.3L468.6 483.3C471.9 486.6 476.5 488.3 481.2 487.9C485.9 487.5 490.1 485.1 492.9 481.4L556.9 393.4C562.1 386.3 560.5 376.2 553.4 371.1z")
    form.contact-modal__form(@submit.prevent="send")
      ComponentInput.contact-modal__input-name(
        v-model="contactNameInput"
        :placeholder="JSON.parse(component_input[0].component_name)[lang]"
        type="text"
        maxlength="255"
        required
      )
      ComponentInput.contact-modal__input.contact-modal__input-email(
        v-model="contactEmailInput"
        :placeholder="JSON.parse(component_input[1].component_name)[lang]"
        type="email"
        maxlength="255"
        required
      )
      ComponentTextarea.contact-modal__textarea.contact-modal__textarea-content(
        v-model="contactContentTextarea"
        :placeholder="JSON.parse(component_textarea.component_name)[lang]"
        rows="6"
        maxlength="2500"
        required
      )
      ComponentButton.contact-modal__button-send(
        :title="JSON.parse(component_button.component_name)[lang]"
        type="submit"
      )
</template>

<script setup lang="ts">
import type { ISendMailResponse, SectionFullRow } from "~/assets/types/interfaces.d.ts"
import type { ComponentStatus } from "~/assets/types/types.d.ts";

const { lang } = useLanguageCookie();

const { data: modalsBlocks } = await useFetch<SectionFullRow[]>("/api/view/contact_modal_view");

const { component_article_header, component_input, component_textarea, component_button, component_status } = useComponents(modalsBlocks);
const status = component_status as ComponentStatus;

const CLOSE_MODAL_TIMEOUT = 3000;

const { setModalState } = useModalsState();
const { setPopupState } = usePopupsState();

const closeModal = () => setModalState("contact", false);

const contactNameInput = ref();
const contactEmailInput = ref();
const contactContentTextarea = ref();

const isSubmitting = ref(false);

const send = async () => {
  const { isInvalidRegex, isTooLong } = useCheckEmail(contactEmailInput.value);

  if (isInvalidRegex || isTooLong) setPopupState("alertError", true, JSON.parse(status.component_invalid)[lang.value]);
  else if (contactNameInput.value.length > 255) setPopupState("alertError", true, JSON.parse(status.component_invalid)[lang.value]);
  else if (contactContentTextarea.value.length > 2500) setPopupState("alertError", true, JSON.parse(status.component_invalid)[lang.value]);
  else {
    setPopupState("alertInfo", true, JSON.parse(status.component_ok)[lang.value]);

    if (isSubmitting.value) return;

    isSubmitting.value = true;

    let data: ISendMailResponse | undefined;
    try {
      data = await $fetch<ISendMailResponse>("/api/sendMail", {
        method: "POST",

        body: {
          name: contactNameInput.value,
          email: contactEmailInput.value,
          message: contactContentTextarea.value
        }
      });
    } catch (error: any) {
      setPopupState("alertError", true, JSON.parse(status.component_failed)[lang.value]);
      console.error("Error submitting form: ", error);
    } finally {
      isSubmitting.value = false;
    }

    if (data?.sent) {
      setPopupState("alertInfo", true, JSON.parse(status.component_ok)[lang.value]);

      setTimeout(() => {
        contactEmailInput.value = "";
        contactNameInput.value = "";
        contactContentTextarea.value = "";
        closeModal();
      }, CLOSE_MODAL_TIMEOUT);
    }
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
</style>
