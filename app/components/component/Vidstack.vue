<template>
  <client-only>
    <media-player :title="props.title" :src="props.videoSrc">
      <media-provider></media-provider>
      <media-video-layout :thumbnails="props.thumbnails"></media-video-layout>
    </media-player>
  </client-only>
</template>

<script setup lang="ts">
import "vidstack/bundle";
import type { IVidstackProps } from "~/assets/types/interfaces.d.ts"

const props = withDefaults(defineProps<IVidstackProps>(), {
  title: "Title",
  videoSrc: "",
  thumbnails: ""
});
</script>

<style lang="sass">
.vds-icon,
.vds-time,
.vds-time-divider,
.vds-chapter-title,
.vds-chapter-title::before,
.vds-menu-section-title,
.vds-menu-item-label
  color: $accent1

.vsd-slider-track
  color: $accent2

.vds-slider .vds-slider-track
  background-color: $secondary

.vds-time-slider .vds-slider-progress
  background-color: $background-color

.vds-slider .vds-slider-track-fill,
.vds-menu-checkbox::after
  background-color: $accent1

.vds-menu-checkbox
  background-color: $external-color

.vds-slider-step,
.vds-menu-checkbox[aria-checked="true"]
  background-color: $accent2

.vds-slider-thumb
  background-color: $accent1
  border-color: $accent1
</style>
