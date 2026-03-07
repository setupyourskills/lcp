<template lang="pug">
section.video
  ComponentArticleHeader(
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
    :mark="true"
  )
  ComponentVidstack(
    title="Démonstration"
    :videoSrc="videoSrc"
  )
</template>

<script setup lang="ts">
import videoSrc from "~/assets/videos/lcp-demo.mp4";

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<ISectionFullRow[]>("/api/view/video_view");

const { component_article_header } = useComponents(sectionBlocks);
</script>
