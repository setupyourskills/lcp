export type ArticleHeader_view = {
  component_name: string;
  component_content: string;
};

export type ArticleHeader = {
  title: string;
  content: string;
};

export type ButtonComponent = {
  title: string;
};

export type ImageComponent = {
  filename: string;
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
};

type KnownComponent =
  | "component_article_header"
  | "component_button"
  | "component_image"
  | "component_vidstack"
  | "component_textarea"
  | "component_testimonial_card"
  | "component_switch"
  | "component_popup"
  | "component_modal"
  | "component_input"
  | "component_info_card"
  | "component_faq"
  | "component_color_card"
  | "component_close_modal"
  | "component_bubbles"
  | "component_box"
  | "component_info"
  | "component_status"
  | "component_psp"
  | "component_cookies_parameters";

export type ComponentsMap = { [K in KnownComponent]?: object };

export type LanguageCookie = "fr" | "en" | "zh";

export type ComponentStatus = {
  component_content: string;
  component_failed: string;
  component_invalid: string;
};

