import type { IModalsState } from "~/assets/types/interfaces.d.ts";

export const useModalsState = () => {
  const modalsState = useState<IModalsState>("stateModal", () => ({
    Purchase: false,
    Contact: false,
    Mentions: false,
    Terms: false,
    Confidential: false,
    Cookies: false,
    Use: false,
  }));

  const isAnyModalOpen = () => Object.values(modalsState.value).some(Boolean);

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

  return { isAnyModalOpen, setModalState, getModalState };
};
