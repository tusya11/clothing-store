export const generateID = (min, max) =>
  Math.ceil(Math.random() * (max - min) + min);
