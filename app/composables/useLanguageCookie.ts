import type { LanguageCookie } from "~/assets/types/types.d.ts";

const PREFIX = "sys-lcp";
const LANGUAGE_KEY = "language";
const MAX_AGE = 30 * 24 * 60 * 60;

export const useLanguageCookie = () => {
  const _languageCookie = useCookie(`${PREFIX}_${LANGUAGE_KEY}`, {
    default: () => ({ lang: "en", custom: "no" }),
    maxAge: MAX_AGE,
  });

  function setLanguage(lang: LanguageCookie) {
    _languageCookie.value["lang"] = lang;
  }

  function getLanguage(): LanguageCookie {
    return _languageCookie.value["lang"] as LanguageCookie;
  }

  const lang = computed(() => _languageCookie.value["lang"]);

  function setCustom() {
    _languageCookie.value["custom"] = "yes";
  }

  function getCustom(): boolean {
    return _languageCookie.value["custom"] === "yes";
  }

  return {
    setLanguage,
    getLanguage,
    lang,
    setCustom,
    getCustom,
  };
};
