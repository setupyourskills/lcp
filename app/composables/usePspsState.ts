export const usePspsState = () => {
  const _pspsState = useState<IPspsState>("statePsp", () => ({
    card: true,
    paypal: false,
  }));

  function setPspState<K extends keyof IPspsState>(pspElement: K) {
    Object.keys(_pspsState.value).forEach(
      (k) => (_pspsState.value[k as keyof IPspsState] = false),
    );

    _pspsState.value[pspElement] = true;
  }

  function getPspState<K extends keyof IPspsState>(pspElement: K): boolean {
    return _pspsState.value[pspElement];
  }

  const whichPsp = (): keyof IPspsState =>
    Object.entries(_pspsState.value).find(
      ([_, v]) => v === true,
    )![0] as keyof IPspsState;

  return {
    setPspState,
    getPspState,
    whichPsp,
  };
};
