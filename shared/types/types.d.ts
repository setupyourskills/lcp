export type YesMore = "yes" | "more";

export type KnownComponent =
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

export type LanguageCookie = "fr" | "en" | "zht" | "zhs";

export type ComponentStatus = {
  component_ok: string;
  component_failed: string;
  component_invalid: string;
};
