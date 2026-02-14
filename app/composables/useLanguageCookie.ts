import type { LanguageCookie } from "~/assets/types/types.d.ts";

const PREFIX = "sys-lcp";
const LANGUAGE_KEY = "language";
const MAX_AGE = 30 * 24 * 60 * 60;

export const useLanguageCookie = () => {
  const _languageCookie = useCookie(`${PREFIX}_${LANGUAGE_KEY}`, {
    default: () => "en",
    maxAge: MAX_AGE,
  });

  function setLanguage(lang: LanguageCookie) {
    _languageCookie.value = lang;
  }

  function getLanguage() {
    return _languageCookie.value;
  }

  const lang = computed(() => _languageCookie.value);

  return {
    setLanguage,
    getLanguage,
    lang,
  };
};
