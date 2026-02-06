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

export type FormStatus = {
  ok: string;
  failed: string;
  invalid: string;
};

export type YesNoMore = "yes" | "no" | "more";

export type ModalProps = {
  title: string;
  content: string;
};

export type pspProps = {
  boxName: string;
  showName: string;
};
