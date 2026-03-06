export default defineNuxtPlugin(() => {
  const { isAnyModalOpen } = useModalsState();

  useHead({
    htmlAttrs: {
      class: computed(() => (isAnyModalOpen.value ? "modal-view" : "")),
    },
  });
});
