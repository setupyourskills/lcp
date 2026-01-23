export type ArticleHeader = {
  title: string;
  content: string;
};

export type HeroSection = {
  title: string;
  subtitle: string;
};

export type InfoNewsletterSection = {
  spam: string;
  confidential: string;
};

export type SubscriptionStatus = {
  ok: string;
  failed: string;
  invalid: string;
};

export type YesNo = "yes" | "no";
