export default defineNuxtPlugin(() => {
  const { setPopupState } = usePopupsState();
  const { isCookieAccepted, setCookie } = useCookies();

  if (!isCookieAccepted.value) {
    for (const key of COOKIES_CAT_KEYS) {
      setCookie(key, true);
    }

    setTimeout(() => {
      setPopupState("cookies", true);
    }, COOKIE_POPUP_TIMEOUT);
  }
});
