import type { ICounterColorsCookie } from "~/assets/types/interfaces.d.ts";

const PREFIX = "sys-lcp";
const COUNTER_COLORS_KEY = "counter_colors"
const MAX_AGE = 30 * 24 * 60 * 60;

export const useCounterColorsCookie = () => {
  const counterColorsCookie = useCookie<ICounterColorsCookie>(`${PREFIX}_${COUNTER_COLORS_KEY}`, {
    default: () => ({
      red: 0,
      blue: 0,
      green: 0,
      purple: 0,
      gold: 0,
      orange: 0,
      white: 0,
      yellow: 0,
      black: 0,
    }),
    maxAge: MAX_AGE,
  });

  const total: ComputedRef<number> = computed(() =>
    Object.values(counterColorsCookie.value).reduce(
      (sum: number, value) => sum + Number(value),
      0,
    ),
  );

  const isQuantityEven = () => total.value % 2 === 0;

  const getCounterColorList = computed(() =>
    Object.entries(counterColorsCookie.value)
      .filter(([_, count]) => count !== 0)
      .map(([color, count]) => `x ${count} ${color}`),
  );

  function increaseColor<K extends keyof ICounterColorsCookie>(color: K) {
    counterColorsCookie.value[color] += 1;
  }

  function decreaseColor<K extends keyof ICounterColorsCookie>(color: K) {
    counterColorsCookie.value[color] -= 1;
  }

  function getCounterColorsCookie<K extends keyof ICounterColorsCookie>(
    color: K,
  ) {
    return counterColorsCookie.value[color];
  }

  return {
    isQuantityEven,
    total,
    increaseColor,
    decreaseColor,
    getCounterColorsCookie,
    getCounterColorList,
  };
};
