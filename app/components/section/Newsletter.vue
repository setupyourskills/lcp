<template lang="pug">
section.newsletter
  div.newsletter__frame
    div.newsletter__group.margin-space
      ComponentArticleHeader.newsletter__title-component(
        :mark="Boolean(component_article_header.component_boolean)"
        :title="component_article_header.component_name"
        :content="component_article_header.component_content"
      )
      form.newsletter__form(@submit.prevent="join")
        ComponentInput.newsletter__input(v-model="newsletterEmailInput" :placeholder="component_input.component_name" type="email" maxlength="255" required)
        ComponentButton.newsletter__button(:title="component_button.component_name" type="submit")
        p.newsletter__status.font-xs {{ newsletterStatusMessage }}
  div.newsletter__info
    p.font-xs(v-html="component_info[0].component_name") 
    p.font-xs(v-html="component_info[1].component_name") 
</template>

<script setup lang="ts">
import type { IUserResponse, SectionFullRow } from "~/assets/types/interfaces.d.ts"

const { getLanguage } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/newsletter_view?lang=${getLanguage()}`
);

type ComponentStatus = {
  component_content: string;
  component_failed: string;
  component_invalid: string;
};

const { component_article_header, component_input, component_button, component_info, component_status } = useComponents(sectionBlocks);
const status = component_status as ComponentStatus;

const newsletterEmailInput = ref();
const newsletterStatusMessage = ref();

const join = async () => {
  const { isInvalidRegex, isTooLong } = useCheckEmail(newsletterEmailInput.value);

  if (isInvalidRegex || isTooLong) newsletterStatusMessage.value = status?.component_invalid;
  else {
    try {
      const result = await $fetch<IUserResponse>("/api/addEmail", {
        method: "POST",
        body: {
          email: newsletterEmailInput.value
        }
      });
      newsletterStatusMessage.value = status?.component_content;
    } catch (e: any) {
      newsletterStatusMessage.value = status?.component_failed;
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

  &__status
    flex: 0 1 450px
    font-style: normal
    
  &__info
    @include flexbox-wrap
    align-items: center
    row-gap: 0
    column-gap: $gap-space
    margin-block: $phi-1 0
</style>
