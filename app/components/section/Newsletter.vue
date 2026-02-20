<template lang="pug">
section.newsletter
  div.newsletter__frame
    div.newsletter__group.margin-space
      ComponentArticleHeader.newsletter__title-component(
        :mark="Boolean(component_article_header.component_boolean)"
        :title="JSON.parse(component_article_header.component_name)[lang]"
        :content="JSON.parse(component_article_header.component_content)[lang]"
      )
      form.newsletter__form(@submit.prevent="join")
        ComponentInput.newsletter__input(
          v-model="newsletterEmailInput"
          :placeholder="JSON.parse(component_input.component_name)[lang]"
          type="email"
          maxlength="255"
          required
        )
        ComponentButton.newsletter__button(
          :title="JSON.parse(component_button.component_name)[lang]"
          type="submit"
        )
  div.newsletter__info
    p.font-xs(v-html="JSON.parse(component_info[0].component_name)[lang]") 
    p.font-xs(v-html="JSON.parse(component_info[1].component_name)[lang]") 
</template>

<script setup lang="ts">
import type { IUserResponse, SectionFullRow } from "~/assets/types/interfaces.d.ts";
import type { ComponentStatus } from "~/assets/types/types.d.ts";

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/newsletter_view");

const { component_article_header, component_input, component_button, component_info, component_status } = useComponents(sectionBlocks);
const status = component_status as ComponentStatus;

const { setPopupState } = usePopupsState();

const newsletterEmailInput = ref();

const join = async () => {
  const { isInvalidRegex, isTooLong } = useCheckEmail(newsletterEmailInput.value);

  if (isInvalidRegex || isTooLong) setPopupState("alertError", true, JSON.parse(status.component_invalid)[lang.value]);
  else {
    try {
      const result = await $fetch<IUserResponse>("/api/addEmail", {
        method: "POST",
        body: {
          email: newsletterEmailInput.value
        }
      });
      setPopupState("alertInfo", true, JSON.parse(status.component_ok)[lang.value]);
    } catch (e: any) {
      setPopupState("alertError", true, JSON.parse(status.component_failed)[lang.value]);
    }
  }

  newsletterEmailInput.value = "";
};
</script>

<style lang="sass" scoped>
.newsletter
  margin-top: $phi3

  &__title-component
    margin-top: $phi2

  &__frame
    @include frame
    max-width: $frame-max-width
    margin-inline: auto

    @media screen and (min-width: 1024px)
      margin-inline: $phi3

  &__group
    padding-block: 0 $phi2

  &__form
    @include flexbox-wrap
    flex-direction: row
    text-align: center
    margin-inline: auto

  &__input
    flex: 0 1 450px

  &__info
    @include flexbox-wrap
    align-items: center
    row-gap: 0
    column-gap: $gap-space
    margin-block: $phi-1 0
</style>
