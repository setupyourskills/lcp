export default defineNuxtPlugin(() => {
  const { setPopupState } = usePopupsState();

  setTimeout(() => {
    setPopupState("Cookies", true);
  }, 1500);
});
