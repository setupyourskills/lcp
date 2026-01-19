import type { IModalsState } from "~/assets/types/interfaces.d.ts";

export const useModalsState = () => {
  const modalsState = useState<IModalsState>("state", () => ({
    Purchase: false,
    Confidential: false,
    Terms: false,
    Gdpr: false,
    Contact: false,
  }));

  function setModalState<K extends keyof IModalsState>(
    modalSection: K,
    modalState: boolean,
  ) {
    modalsState.value[modalSection] = modalState;
  }

  function getModalState<K extends keyof IModalsState>(
    modalSection: K,
  ): boolean {
    return modalsState.value[modalSection];
  }

  return { setModalState, getModalState };
};
