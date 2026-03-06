export const useModalsState = () => {
  const _modalsState = useState<IModalsState>("stateModal", () => ({
    purchase: false,
    contact: false,
    mentions: false,
    terms: false,
    confidential: false,
    cookies: false,
    credits: false,
    use: false,
  }));

  function getModalState<K extends keyof IModalsState>(
    modalSection: K,
  ): boolean {
    return _modalsState.value[modalSection];
  }

  function setModalState<K extends keyof IModalsState>(
    modalSection: K,
    modalState: boolean,
  ) {
    Object.keys(_modalsState.value).forEach(
      (k) => (_modalsState.value[k as keyof IModalsState] = false),
    );

    _modalsState.value[modalSection] = modalState;
  }

  const isAnyModalOpen = computed(() =>
    Object.values(_modalsState.value).some(Boolean),
  );

  return {
    isAnyModalOpen,
    setModalState,
    getModalState,
  };
};
