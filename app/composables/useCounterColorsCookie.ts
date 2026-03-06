export const useCounterColorsCookie = () => {
  const _counterColorsCookie = useCookie<ICounterColorsCookie>(
    `${COLOR_PREFIX}_${COUNTER_COLORS_KEY}`,
    {
      default: () => ({
        red: 0,
        blue: 0,
        green: 0,
        pink: 0,
        gold: 0,
        orange: 0,
        white: 0,
        yellow: 0,
        black: 0,
      }),
      maxAge: COLOR_MAX_AGE,
    },
  );

  function getCounterColorsCookie<K extends keyof ICounterColorsCookie>(
    color: K,
  ) {
    return _counterColorsCookie.value[color];
  }

  function increaseColor<K extends keyof ICounterColorsCookie>(color: K) {
    _counterColorsCookie.value[color] += 1;
  }

  function decreaseColor<K extends keyof ICounterColorsCookie>(color: K) {
    _counterColorsCookie.value[color] -= 1;
  }

  const getCounterColorList = computed(() => {
    return Object.entries(_counterColorsCookie.value)
      .filter(([, count]) => Number(count) !== 0)
      .map(([color, count]) => ({
        color: color as keyof ICounterColorsCookie,
        count: Number(count),
      }));
  });

  const total: ComputedRef<number> = computed(() =>
    Object.values(_counterColorsCookie.value).reduce(
      (sum: number, value) => sum + Number(value),
      0,
    ),
  );

  const isQuantityEven = computed(() => total.value % 2 === 0);

  return {
    getCounterColorsCookie,
    increaseColor,
    decreaseColor,
    getCounterColorList,
    total,
    isQuantityEven,
  };
};
