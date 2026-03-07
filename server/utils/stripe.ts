import Stripe from "stripe"

const config = useRuntimeConfig();
const STRIPE_SECRET_KEY = config.stripeSecretKey

export const stripe = new Stripe(STRIPE_SECRET_KEY, { typescript: true })
