import type { YesNoMore } from "~/assets/types/types.d.ts";

const COOKIES_ACCEPTED_KEY = "cookies_accepted";
const MAX_AGE = 30 * 24 * 60 * 60;

export const useCookies = () => {
  const cookie = useCookie(COOKIES_ACCEPTED_KEY, {
    default: () => "",
    maxAge: MAX_AGE,
  });

  function setCookie(status: YesNoMore) {
    cookie.value = status;
  }

  function getCookie() {
    return cookie.value;
  }

  const isCookieAccepted = computed(() => cookie.value === "yes");

  return { getCookie, setCookie, isCookieAccepted };
};
