export const useLanguageCookie = () => {
  const _languageCookie = useCookie(`${LANG_PREFIX}_${LANGUAGE_KEY}`, {
    default: () => ({ lang: "en", custom: "no" }),
    maxAge: LANG_MAX_AGE,
  });

  function getLanguage(): LanguageCookie {
    return _languageCookie.value["lang"] as LanguageCookie;
  }

  function setLanguage(lang: LanguageCookie) {
    _languageCookie.value["lang"] = lang;
  }

  function getCustom(): boolean {
    return _languageCookie.value["custom"] === "yes";
  }

  function setCustom() {
    _languageCookie.value["custom"] = "yes";
  }

  const lang = computed(() => _languageCookie.value["lang"]);

  return {
    getLanguage,
    setLanguage,
    getCustom,
    setCustom,
    lang,
  };
};
