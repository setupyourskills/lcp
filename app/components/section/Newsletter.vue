<template lang="pug">
section.newsletter
  div.newsletter__frame
    div.newsletter__group.margin-space
      ComponentArticleHeader.newsletter__title-component(:mark="false" :title="articleHeader.title" :content="articleHeader.content")
      form.newsletter__form(@submit.prevent="join")
        ComponentInput.newsletter__input(v-model="newsletterEmailInput" placeholder="Email" type="email" maxlength="255" required)
        ComponentButton.newsletter__button(title="S'abonner" type="submit")
        p.newsletter__status.font-xs {{ newsletterStatusMessage }}
  div.newsletter__info
    p.font-xs(v-html="info.spam") 
    p.font-xs(v-html="info.confidential") 
</template>

<script setup lang="ts">
import type { ArticleHeader, FormStatus } from "~/assets/types/types.d.ts";
import type { InfoNewsletterSection } from "~/assets/types/types.d.ts";
import type { IUserResponse } from "~/assets/types/interfaces.d.ts"

const articleHeader: ArticleHeader = {
  title: "Rejoignez <span class='font-accent'>la newsletter</span>",
  content: "<span class='font-bold'>Recevez</span> les dernières <span class='font-bold'>nouvelles</span> pour <span class='font-bold'>rester toujours informé !</span>",
};
const info: InfoNewsletterSection = {
  spam: "<span class='font-accent font-bold font-normal'>🗹</span> Pas de Spam",
  confidential: "<span class='font-accent font-bold font-normal'>🗹</span> Votre Email reste confidentiel"
};

const status: FormStatus = {
  ok: "✅ Vous êtes abonné !",
  failed: "❌ Une erreur s'est produite !",
  invalid: "❌ Email est invalide !"
};

const newsletterEmailInput = ref();
const newsletterStatusMessage = ref();

const join = async () => {
  const { isInvalidRegex, isTooLong } = useCheckEmail(newsletterEmailInput.value);

  if (isInvalidRegex || isTooLong) newsletterStatusMessage.value = status.invalid;
  else {
    try {
      const result = await $fetch<IUserResponse>("/api/addEmail", {
        method: "POST",
        body: {
          email: newsletterEmailInput.value
        }
      });
      newsletterStatusMessage.value = status.ok;
    } catch (e: any) {
      newsletterStatusMessage.value = status.failed;
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
