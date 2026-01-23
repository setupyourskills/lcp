export default defineNuxtPlugin(() => {
  const { setPopupState } = usePopupsState();

  setTimeout(() => {
    setPopupState("cookies", true);
  }, 1500);
});
