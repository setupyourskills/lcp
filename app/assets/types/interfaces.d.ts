import type { KnownComponent } from "~/assets/types/types.d.ts"

// Sections
export interface IFaqSection {
  question: string;
  answer: string;
  height: number;
}

export interface IInfoCardSection {
  title: string;
  content: string;
}

export interface ITestimonialSection {
  content: string;
  avatar: string;
  name: string;
  country: string;
}

export interface IUserResponse {
  id: number;
  email: string;
}

// Modals
export interface IModalsState {
  purchase: boolean;
  contact: boolean;
  mentions: boolean;
  terms: boolean;
  confidential: boolean;
  cookies: boolean;
  credits: boolean;
  use: boolean;
}

export interface IModalProps {
  modalName: string;
  title: string;
  content: string;
}

export interface ICloseComponentProps {
  componentType: string;
  componentName: string;
}

// Popups
export interface IPopupsState {
  cookies: boolean;
}

export interface IPopupProps {
  popupName: string;
  title: string;
  content: string;
}

export interface ICounterColorsCookie {
  red: number;
  blue: number;
  green: number;
  purple: number;
  gold: number;
  orange: number;
  white: number;
  yellow: number;
  black: number;
}

// Components
export interface IPspsState {
  paypal: boolean;
  stripe: boolean;
  card: boolean;
}

export interface IArticleHeaderProps {
  title: string;
  content: string;
  mark?: boolean;
}

export interface IBubblesProps {
  section: string;
}

export interface IButtonProps {
  title: string;
}

export interface IColorCardProps {
  colorName: keyof ICounterColorsCookie;
  colorLabel: string;
  componentType?: string;
}

export interface IInfoCardProps {
  number?: number | null;
  title: string;
  content: string;
  style?: string;
  transition?: boolean;
}

export interface IInputProps {
  placeholder: string;
}

export interface ITextareaProps {
  placeholder: string;
}

export interface IVidstackProps {
  title: string;
  videoSrc: string;
  thumbnails?: string;
}

export interface IBoxProps {
  boxName: string;
}

export interface ISwitchProps {
  label: string;
  modelValue: boolean;
  deactivated?: boolean;
}

export interface ISendMailResponse {
  sent: boolean;
  message: string;
}

export interface SectionFullRow {
  section_id:   number;
  section_name: string;
  lang:        string;

  component_id: number;
  component_name?:   string;
  component_content?: string;
  component_boolean?:    boolean;
  number?:      number;
  style?:       string;
  transition?:  boolean;
  question?:    string;
  answer?:      string;
  height?:      number;
  colorName?:   string;
  component_type?: KnownComponent;
  avatar?:      string;
  name?:        string;
  country?:     string;
  label?:       string;
  modelValue?:  any;
  popupName?:   string;
  modalName?:   string;
  placeholder?: string;
  thumbnails?:  string[];
  section?:     string;
  boxName?:     string;
  text?:        string;
}
