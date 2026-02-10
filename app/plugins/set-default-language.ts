export default defineNuxtPlugin(() => {
  const { getLanguage } = useLanguageCookie();

  getLanguage();

  return {};
});
