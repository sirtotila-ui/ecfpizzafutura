export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[\d\s\+\-\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, "").length >= 10;
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateMessage = (message) => {
  return message && message.trim().length >= 10;
};
