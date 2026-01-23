import type { YesNo } from "~/assets/types/types.d.ts";

const COOKIES_ACCEPTED_KEY = "cookies_accepted";

export const useCookies = () => {
  const cookie = useCookie(COOKIES_ACCEPTED_KEY);

  cookie.value ||= "no";

  function setCookie(status: YesNo) {
    cookie.value = status;
  }
  const isCookieAccepted = computed(() => cookie.value === "yes");

  return { setCookie, isCookieAccepted };
};
