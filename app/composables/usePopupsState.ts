import type { IPopupsState } from "~/assets/types/interfaces.d.ts";

export const usePopupsState = () => {
  const popupsState = useState<IPopupsState>("statePopup", () => ({
    cookies: false,
    alertOdd: false,
  }));

  function setPopupState<K extends keyof IPopupsState>(
    popupElement: K,
    popupState: boolean,
  ) {
    popupsState.value[popupElement] = popupState;
  }

  function getPopupState<K extends keyof IPopupsState>(
    popupElement: K,
  ): boolean {
    return popupsState.value[popupElement];
  }

  return { setPopupState, getPopupState };
};
