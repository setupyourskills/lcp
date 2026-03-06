export const useProductsState = () => {
  const _productState = useState<{ products: IProduct[] }>(
    "stateProducts",
    () => ({
      products: [],
    }),
  );

  function setAllProducts(newProducts: IProduct[]) {
    _productState.value.products = newProducts;
  }

  function getProduct(color: keyof ICounterColorsCookie) {
    return _productState.value.products.find(
      (p: IProduct) => p.color === color,
    );
  }

  return {
    setAllProducts,
    getProduct,
  };
};
