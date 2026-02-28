import type { Product } from "~/assets/types/interfaces.d.ts";

export default defineNuxtPlugin(async () => {
  const { setAllProducts } = useProductsState();

  const products: Product[] = await $fetch("/api/db-product-setup");
  setAllProducts(products);
});
