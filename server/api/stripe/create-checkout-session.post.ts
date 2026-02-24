import { stripe } from "../../utils/stripe";

import type { IPurchaseItem } from "~/assets/types/interfaces.d.ts";
import type { PaymentTypes } from "~/assets/types/types.d.ts";

const config = useRuntimeConfig();
const PRODUCT_REF = {
  green: config.stripeProductRefGreen,
  orange: config.stripeProductRefOrange,
  yellow: config.stripeProductRefYellow,
  black: config.stripeProductRefBlack,
  red: config.stripeProductRefRed,
  pink: config.stripeProductRefPink,
  blue: config.stripeProductRefBlue,
  gold: config.stripeProductRefGold,
  white: config.stripeProductRefWhite,
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { purchase, paymentType } = body as { purchase: IPurchaseItem[], paymentType: PaymentTypes };

  if (!purchase) {
    throw createError({ statusCode: 400, statusMessage: "Purchase list is required!" });
  }

  const lineItems = purchase.map((p) => {
    const priceId = PRODUCT_REF[p.color as keyof typeof PRODUCT_REF];

    if (!priceId) {
      throw createError({ statusCode: 400, message: `Unknown product color: ${p.color}` });
    }

    return { price: priceId, quantity: p.count ?? 1 };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: [paymentType],

    billing_address_collection: "required",
    phone_number_collection: { enabled: true },

    name_collection: {
      business: { enabled: true, optional: true },
      individual: { enabled: true },
    },
    mode: "payment",
    line_items: lineItems,

    success_url: `${getRequestURL(event).origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${getRequestURL(event).origin}/cancel`,
  });
  
  return {
    url: session.url,
  };
});
