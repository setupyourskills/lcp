const COOKIE_POPUP_TIMEOUT = 1500;

export default defineNuxtPlugin(() => {
  const { setPopupState } = usePopupsState();
  const { getCookie } = useCookies();

  if (!getCookie()) {
    setTimeout(() => {
      setPopupState("cookies", true);
    }, COOKIE_POPUP_TIMEOUT);
  }
});
