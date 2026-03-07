<template lang="pug">
section.success
  ComponentArticleHeader(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
  div.success__discord(
    v-html="JSON.parse(component_info.component_name)[lang]"
  )
  div.success__button-group
    ComponentButton.success__button-discord(
      :title="JSON.parse(component_button[0].component_name)[lang]"
      @click=""
    )
    ComponentButton.success__button-return(
      :title="JSON.parse(component_button[1].component_name)[lang]"
      @click=""
    )
</template>

<script setup lang="ts">
const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<ISectionFullRow[]>("/api/view/success_view");

const { component_article_header, component_info, component_button } = useComponents(sectionBlocks);
</script>

<style lang="sass" scoped>
</style>
