import type { IModalsState } from "~/assets/types/interfaces.d.ts";

export const useModalsState = () => {
  const modalsState = useState<IModalsState>("stateModal", () => ({
    purchase: false,
    contact: false,
    mentions: false,
    terms: false,
    confidential: false,
    cookies: false,
    credits: false,
    use: false,
  }));

  const isAnyModalOpen = () => Object.values(modalsState.value).some(Boolean);

  function setModalState<K extends keyof IModalsState>(
    modalSection: K,
    modalState: boolean,
  ) {
    for (const key of Object.keys(modalsState.value)) {
      modalsState.value[key as keyof IModalsState] = false;
    }

    if (modalState) modalsState.value[modalSection] = modalState;
  }

  function getModalState<K extends keyof IModalsState>(
    modalSection: K,
  ): boolean {
    return modalsState.value[modalSection];
  }

  return { isAnyModalOpen, setModalState, getModalState };
};
