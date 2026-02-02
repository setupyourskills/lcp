import type { IPspsState } from "~/assets/types/interfaces.d.ts";

export const usePspsState = () => {
  const pspsState = useState<IPspsState>("statePsp", () => ({
    mollie: false,
    paypal: false,
    stripe: true,
    transfert: false,
  }));

  function resetPspsState() {
    (Object.keys(pspsState.value) as Array<keyof IPspsState>).forEach((k) => {
      pspsState.value[k] = false;
    });
  }

  function setPspState<K extends keyof IPspsState>(
    pspElement: K,
  ) {
    resetPspsState();
    pspsState.value[pspElement] = true;
  }

  function getPspState<K extends keyof IPspsState>(pspElement: K): boolean {
    return pspsState.value[pspElement];
  }

  return { setPspState, getPspState };
};
