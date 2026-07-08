export const sanitizeInput = (value) => {
  if (typeof value !== "string") return value;

  return value
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
};

export const sanitizeFormData = (data) => {
  const sanitized = {};

  Object.keys(data).forEach((key) => {
    sanitized[key] = sanitizeInput(data[key]);
  });

  return sanitized;
};
