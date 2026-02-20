import type { IModalsState } from "~/assets/types/interfaces.d.ts";

const CLOSE_MODAL_TIMEOUT = 400;

export const useModalClickHandler = () => {
  const { setModalState } = useModalsState();

  const clickHandler = (e: MouseEvent, isInModal: boolean, modalName?: keyof IModalsState) => {
    const target = e.target as HTMLElement | null;

    if (!target) return;

    const href = target.getAttribute("href");
    if (!href) return;

    if (target.classList.contains("modal")) {
      const modalKey = href.slice(1) as keyof IModalsState;

      e.preventDefault();

      if (isInModal && modalName) {
        setModalState(modalName as keyof IModalsState, false);

        setTimeout(() => {
          setModalState(modalKey, true);
        }, CLOSE_MODAL_TIMEOUT);
      } else setModalState(modalKey, true);

    } else if (target.classList.contains("inner-link")) {
    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);

    e.preventDefault();

    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  };
  return {
    clickHandler,
  };
};
