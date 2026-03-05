const PREFIX = "sys-lcp";
const MAX_AGE = 30 * 24 * 60 * 60;

const COOKIES_ACCEPTED_KEY = "consent_done";
const COOKIES_CAT_KEYS = [
  "functional",
  "advertising",
  "analytics",
];

export const useCookies = () => {
  const _cookie = (cat: string) =>
    useCookie(`${PREFIX}_${cat}`, {
      default: () => "no",
      maxAge: MAX_AGE,
    });

  function setCookie(cat: string, status: boolean) {
    _cookie(cat).value = status ? "yes" : "no";
  }

  function getCookie(cat: string) {
    return _cookie(cat).value === "yes";
  }

  const isCookieAccepted = computed(() => (_cookie(COOKIES_ACCEPTED_KEY).value === "yes"));

  return { COOKIES_ACCEPTED_KEY, COOKIES_CAT_KEYS, getCookie, setCookie, isCookieAccepted };
};
