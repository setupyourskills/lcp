const COOKIE_POPUP_TIMEOUT = 1500;

export default defineNuxtPlugin(() => {
  const { setPopupState } = usePopupsState();
  const { COOKIES_CAT_KEYS, isCookieAccepted, setCookie } = useCookies();

  if (!isCookieAccepted.value) {
    for (const key of COOKIES_CAT_KEYS) {
      setCookie(key, "yes");
    }

    setTimeout(() => {
      setPopupState("cookies", true);
    }, COOKIE_POPUP_TIMEOUT);
  }
});
