<template lang="pug">
section.video
  ComponentArticleHeader(:title="articleHeader.title" :content="articleHeader.content")
  ComponentVidstack(title="Démonstration" :videoSrc="videoSrc")
</template>

<script setup lang="ts">
import type { ArticleHeader } from "~/assets/types/types.d.ts"
import videoSrc from '~/assets/videos/lcp-demo.mp4';

const articleHeader: ArticleHeader = {
  title: "Les poudres <span class='font-accent'>en Action</span>",
  content: "<span class='font-bold'>Découvrez</span> les fonctionnalités, <span class='font-bold'>performances</span>, applications et astuces pour <span class='font-bold'>des créations réussies !</span>",
};
</script>
