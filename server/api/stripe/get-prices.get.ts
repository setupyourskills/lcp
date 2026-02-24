import { stripe } from "../../utils/stripe";

export default defineEventHandler(async () => {
  const prices = await stripe.prices.list({ limit: 100 });

  const activePrices = prices.data.filter((price) => price.active);

  return { success: true, products: activePrices };
});
