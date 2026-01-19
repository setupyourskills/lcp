// Sections
export interface IFaqSection {
  question: string;
  answer: string;
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
  Purchase: boolean;
  Confidential: boolean;
  Terms: boolean;
  Gdpr: boolean;
  Contact: boolean;
}

export interface IModalProps {
  modalName: string;
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

export interface IFaqProps {
  question: string;
  answer: string;
}

export interface IInfoCardProps {
  number?: number | null;
  title: string;
  content: string;
  style?: string;
}

export interface IInputProps {
  placeholder: string;
}

export interface ITestimonialProps {
  content: string;
  avatar: string;
  name: string;
  country: string;
}
