import { stripe } from "../../utils/stripe";

export default defineEventHandler(async () => {
  const products = await stripe.products.list({ limit: 100 });

  const activeProducts = products.data.filter((product) => product.active);

  return { success: true, products: activeProducts };
});
