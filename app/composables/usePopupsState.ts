export const usePopupsState = () => {
  const _popupsState = useState<{
    state: IPopupsState;
    alertContent?: string;
  }>("statePopup", () => ({
    state: {
      cookies: false,
      alertInfo: false,
      alertOk: false,
      alertError: false,
    },
    alertContent: "",
  }));

  function setPopupState<K extends keyof IPopupsState>(
    popupElement: K,
    popupState: boolean,
    alertContent?: string,
  ) {
    if (alertContent && popupState) {
      _popupsState.value.alertContent = alertContent;
    }

    _popupsState.value.state[popupElement] = popupState;
  }

  function getPopupState<K extends keyof IPopupsState>(
    popupElement: K,
  ): boolean {
    return _popupsState.value.state[popupElement];
  }

  const alertContent = computed(() => _popupsState.value.alertContent);

  return {
    setPopupState,
    getPopupState,
    alertContent,
  };
};
