<template lang="pug">
section.footer
  div.footer__frame
    ComponentBubbles(section="footer")
    div.footer__group.margin-space(ref="refFooterGroup")
      ComponentInfoCard.footer__info-card(
        v-for="item in component_info_card"
        :key="item"
        :title="item.component_name"
        :content="item.component_content"
        :style="item.component_style" 
        :transition="false"
      )
    div.footer__copyright.margin-space(v-html="component_info.component_name")
</template>

<script setup lang="ts">
import type { SectionFullRow, IModalsState } from "~/assets/types/interfaces.d.ts"

const { getLanguage } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>(
  `/api/view/footer_view?lang=${getLanguage()}`
);

const { component_article_header, component_info_card, component_info } = useComponents(sectionBlocks);

const { setModalState } = useModalsState();

const refFooterGroup = ref<HTMLElement | null>(null);

const handler = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  const href = target.getAttribute("href");
  if (!href) return;

  if (target.classList.contains("modal")) {
    const modalKey = href.slice(1) as keyof IModalsState;

    e.preventDefault();

    setModalState(modalKey, true);
  } else if (target.classList.contains("inner-link")) {
    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);

    e.preventDefault();

    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

onMounted(() => {
  if (!refFooterGroup.value) return;

  refFooterGroup.value.addEventListener('click', handler);

  return () => refFooterGroup.value?.removeEventListener('click', handler);
});
</script>

<style lang="sass">
.footer
  margin-block: $phi3 0

  &__frame
    position: relative
    border-top: $border-section-separator solid $accent2
    background-color: $element-background-color
    overflow: hidden

  &__group
    @include flexbox-wrap
    z-index: 1
    position: relative
    margin-block: $phi2 $phi2

  &__info-card
    flex: 1 0 250px

  &__copyright
    z-index: 1
    position: relative
    margin-bottom: $phi-1
    text-align: right
    font-style: italic
</style>
