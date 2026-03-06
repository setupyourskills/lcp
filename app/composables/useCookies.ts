export const useCookies = () => {
  const _cookie = (cat: string) =>
    useCookie(`${COOKIES_PREFIX}_${cat}`, {
      default: () => "no",
      maxAge: COOKIES_MAX_AGE,
    });

  function getCookie(cat: string) {
    return _cookie(cat).value === "yes";
  }

  function setCookie(cat: string, status: boolean) {
    _cookie(cat).value = status ? "yes" : "no";
  }

  const isCookieAccepted = computed(
    () => _cookie(COOKIES_ACCEPTED_KEY).value === "yes",
  );

  return {
    getCookie,
    setCookie,
    isCookieAccepted,
  };
};
