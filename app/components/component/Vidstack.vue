<template>
  <client-only>
    <media-player :title="props.title" :src="props.videoSrc">
      <media-provider></media-provider>
      <media-video-layout :thumbnails="props.thumbnails"></media-video-layout>
    </media-player>
  </client-only>
</template>

<script setup lang="ts">
import 'vidstack/bundle';
// import videoSrc from '~/assets/videos/720p.mp4';
import type { IVidstackProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IVidstackProps>(), {
  title: "Title",
  videoSrc: "",
  thumbnails: ""
});
</script>
