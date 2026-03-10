export interface IModalsState {
  purchase: boolean;
  contact: boolean;
  mentions: boolean;
  terms: boolean;
  confidential: boolean;
  cookies: boolean;
  credits: boolean;
  use: boolean;
  success: boolean;
}

export interface IPopupsState {
  cookies: boolean;
  alertInfo: boolean;
  alertOk: boolean;
  alertError: boolean;
}

export interface ICounterColorsCookie {
  red: number;
  blue: number;
  green: number;
  pink: number;
  gold: number;
  orange: number;
  white: number;
  yellow: number;
  black: number;
}

export interface IPspsState {
  card: boolean;
  paypal: boolean;
}

export interface ISendMailResponse {
  sent: boolean;
  message: string;
}

export interface ISectionFullRow {
  section_id: number;
  section_name: string;
  lang: string;

  component_id: number;
  component_name?: string;
  component_content?: string;
  component_boolean?: boolean;
  number?: number;
  style?: string;
  transition?: boolean;
  question?: string;
  answer?: string;
  height?: number;
  colorName?: string;
  component_type?: KnownComponent;
  avatar?: string;
  name?: string;
  country?: string;
  label?: string;
  modelValue?: any;
  popupName?: string;
  modalName?: string;
  placeholder?: string;
  thumbnails?: string[];
  section?: string;
  boxName?: string;
  text?: string;
}

export interface IProduct {
  id: number;
  color: string;
  name: string;
  description: string;
  price: number;
}
