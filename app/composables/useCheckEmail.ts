const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const useCheckEmail = (email: string = "") => {
  const isInvalidRegex = !EMAIL_REGEX.test(email);
  const isTooLong = email.length > 255;

  return { isInvalidRegex, isTooLong };
};
