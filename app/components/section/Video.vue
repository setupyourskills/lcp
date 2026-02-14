<template lang="pug">
section.video
  ComponentArticleHeader(
    :mark="Boolean(component_article_header.component_boolean)"
    :title="JSON.parse(component_article_header.component_name)[lang]"
    :content="JSON.parse(component_article_header.component_content)[lang]"
  )
  ComponentVidstack(title="Démonstration" :videoSrc="videoSrc")
</template>

<script setup lang="ts">
import type { SectionFullRow } from "~/assets/types/interfaces.d.ts"

import videoSrc from "~/assets/videos/lcp-demo.mp4";

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/video_view");

const { component_article_header } = useComponents(sectionBlocks);
</script>
