export default defineNuxtPlugin(async () => {
  const { setAllProducts } = useProductsState();

  const products: IProduct[] = await $fetch("/api/db-product-setup");
  setAllProducts(products);
});
