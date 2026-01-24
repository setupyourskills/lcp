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
  use: boolean;
}

export interface IModalProps {
  modalName: string;
  title: string;
  content: string;
}

export interface IPopupsState {
  cookies: boolean;
}

export interface IPopupProps {
  popupName: string;
  title: string;
  content: string;
}

// Components
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
  colorName: string;
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
