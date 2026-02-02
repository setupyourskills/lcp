import type { YesNo } from "~/assets/types/types.d.ts";

const COOKIES_ACCEPTED_KEY = "cookies_accepted";
const MAX_AGE = 30 * 24 * 60 * 60;

export const useCookies = () => {
  const cookie = useCookie(COOKIES_ACCEPTED_KEY, {
    default: () => "no",
    maxAge: MAX_AGE,
  });

  function setCookie(status: YesNo) {
    cookie.value = status;
  }
  const isCookieAccepted = computed(() => cookie.value === "yes");

  return { setCookie, isCookieAccepted };
};
