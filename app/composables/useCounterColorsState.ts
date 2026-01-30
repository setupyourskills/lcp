import type { ICounterColorsState } from "~/assets/types/interfaces.d.ts";

export const useCounterColorsState = () => {
  const counterColorsState = useState<ICounterColorsState>(
    "stateCounterColors",
    () => ({
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
  );

  const total: ComputedRef<number> = computed(() =>
    Object.values(counterColorsState.value).reduce(
      (sum: number, value) => sum + Number(value),
      0,
    ),
  );

  const isQuantityEven = () => total.value % 2 === 0;

  const getCounterColorList = computed(() =>
    Object.entries(counterColorsState.value)
      .filter(([_, count]) => count !== 0)
      .map(([color, count]) => `x ${count} ${color}`),
  );

  function increaseColor<K extends keyof ICounterColorsState>(color: K) {
    counterColorsState.value[color] += 1;
  }

  function decreaseColor<K extends keyof ICounterColorsState>(color: K) {
    counterColorsState.value[color] -= 1;
  }

  function getCounterColorsState<K extends keyof ICounterColorsState>(
    color: K,
  ) {
    return counterColorsState.value[color];
  }

  return {
    isQuantityEven,
    total,
    increaseColor,
    decreaseColor,
    getCounterColorsState,
    getCounterColorList,
  };
};
