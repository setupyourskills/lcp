const COOKIE_POPUP_TIMEOUT = 1500;

export default defineNuxtPlugin(() => {
  const { setPopupState } = usePopupsState();
  const { isCookieAccepted } = useCookies();

  if (!isCookieAccepted.value) {
    setTimeout(() => {
      setPopupState("cookies", true);
    }, COOKIE_POPUP_TIMEOUT);
  }
});
