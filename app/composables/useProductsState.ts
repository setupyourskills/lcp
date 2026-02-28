import type { IProductState, Product, ICounterColorsCookie } from "~/assets/types/interfaces.d.ts";

export const useProductsState = () => {
  const _productState = useState<IProductState>("stateProducts", () => ({
    products: [],
  }));

  function setAllProducts(newProducts: Product[]) {
    _productState.value.products = newProducts;
  }

  function getProduct(color: keyof ICounterColorsCookie) {
    if (!color) return;

    return _productState.value.products.find(
      (p: Product) => p.color === color
    );
  }

  return {
    setAllProducts,
    getProduct,
  };
};
