import type { YesNoMore } from "~/assets/types/types.d.ts";

const PREFIX = "sys-lcp";
const MAX_AGE = 30 * 24 * 60 * 60;

const COOKIES_ACCEPTED_KEY = "consent_done";
const COOKIES_CAT_KEYS = [
  "functional",
  "advertising",
  "analytics",
];

export const useCookies = () => {
  const _cookie = (cat: string, defaultValue?: string) =>
    useCookie(`${PREFIX}_${cat}`, {
      default: () => defaultValue ?? "",
      maxAge: MAX_AGE,
    });

  function setCookie(cat: string, status: YesNoMore) {
    _cookie(cat).value = status;
  }

  function getCookie(cat: string, defaultValue?: string) {
    return _cookie(cat, defaultValue).value;
  }

  const isCookieAccepted = computed(() => getCookie(COOKIES_ACCEPTED_KEY) === "yes");

  return { COOKIES_ACCEPTED_KEY, COOKIES_CAT_KEYS, getCookie, setCookie, isCookieAccepted };
};
