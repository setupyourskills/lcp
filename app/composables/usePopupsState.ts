import type { IPopupsState } from "~/assets/types/interfaces.d.ts";

export const usePopupsState = () => {
  const _popupsState = useState<IPopupsState>("statePopup", () => ({
    cookies: false,
    alertInfo: false,
    alertOk: false,
    alertError: false,
  }));

  const _alertContentState = useState("stateAlertContent");

  function setPopupState<K extends keyof IPopupsState>(
    popupElement: K,
    popupState: boolean,
    alertContent?: string
  ) {
    if (popupState === true && alertContent) {
      _alertContentState.value = alertContent;
    }
    _popupsState.value[popupElement] = popupState;
  }

  function getPopupState<K extends keyof IPopupsState>(
    popupElement: K,
  ): boolean {
    return _popupsState.value[popupElement];
  }

  function getAlertContent() {
    return _alertContentState.value;
  }

  return { setPopupState, getPopupState, getAlertContent };
};
