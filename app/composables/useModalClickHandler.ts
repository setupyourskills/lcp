import type { IModalsState } from "~/assets/types/interfaces.d.ts";

const CLOSE_MODAL_TIMEOUT = 400;

export const useModalClickHandler = () => {
  const { setModalState } = useModalsState();

  const clickHandler = (e: MouseEvent, modalName: keyof IModalsState) => {
    const target = e.target as HTMLElement | null;

    if (!target) return;

    const href = target.getAttribute("href");
    if (!href) return;

    if (target.classList.contains("modal")) {
      const modalKey = href.slice(1) as keyof IModalsState;

      e.preventDefault();

      setModalState(modalName, false);

      setTimeout(() => {
        setModalState(modalKey, true);
      }, CLOSE_MODAL_TIMEOUT);
    }
  };
  return {
    clickHandler,
  };
};
