<template lang="pug">
section.footer
  div.footer__frame
    ComponentBubbles(section="footer")
    div.footer__group.margin-space(@click="clickHandler($event, false)")
      ComponentInfoCard.footer__info-card(
        v-for="item in component_info_card"
        :key="item"
        :title="JSON.parse(item.component_name)[lang]"
        :content="JSON.parse(item.component_content)[lang]"
        :style="item.component_style" 
        :transition="false"
      )
    div.footer__language-selector-container
      div.footer__language-selector
        ComponentSelect(v-model="selectedLang" :options="languageOptions" :selectedOption="lang")
    div.footer__copyright.margin-space(
      v-html="JSON.parse(component_info.component_name)[lang]"
    )
</template>

<script setup lang="ts">
import type { SectionFullRow, IModalsState } from "~/assets/types/interfaces.d.ts"
import type { LanguageCookie } from "~/assets/types/types.d.ts"

const { lang } = useLanguageCookie();

const { data: sectionBlocks } = await useFetch<SectionFullRow[]>("/api/view/footer_view");

const { component_article_header, component_info_card, component_info } = useComponents(sectionBlocks);

const { clickHandler } = useModalClickHandler();

const { setLanguage, setCustom, getCustom } = useLanguageCookie();
const selectedLang = ref(lang.value);
const defaultLang = ref<string | null>(null);
const languageOptions = [
  { name: 'en', label: 'English' },
  { name: 'fr', label: 'Français' },
  { name: 'zht', label: '繁体中文' },
  { name: 'zhs', label: '简体中文' }
];
watch(selectedLang, (newVal) => {
  if (defaultLang.value !== null && newVal !== defaultLang.value) setCustom();

  if (newVal) setLanguage(newVal as LanguageCookie);
});

function setBrowserLanguage() {
  if (getCustom()) return;
  
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.toLowerCase();
    const firstTwo = browserLang.slice(0, 2);

    let detected: LanguageCookie;
    if (firstTwo === "fr" || firstTwo === "en") {
      detected = firstTwo;
    } else if (browserLang === "zh-tw" || browserLang === "zh-hk") {
      detected = "zht";
    } else if (firstTwo === "zh") {
      detected = "zhs";
    } else {
      detected = "en";
    }

    selectedLang.value = detected;
    defaultLang.value = detected;
  }
}

onMounted(() => setBrowserLanguage());
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
    margin-block: $phi2 0

  &__info-card
    flex: 1 0 250px

  &__language-selector-container
    margin-block: $phi1

  &__language-selector
    margin: auto
    width: 250px

  &__copyright
    z-index: 1
    position: relative
    margin-bottom: $phi-1
    text-align: right
    font-style: italic
</style>
