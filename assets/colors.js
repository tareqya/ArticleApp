export const COLORS = {
  text: "#313234",
  background: "#f2f2f2",
  lightText: "gray",
  primary: "#454d7c",
  secondary: "#f5733b",
  white: "#fff",
  black: "#000",
  success: "#22bb33",
  danger: "#bb2124",
  warning: "#f0ad4e",
};

export const ArticlesColors = [
  "rgb(255, 171, 145)",
  "rgb(255, 204, 127)",
  "rgb(230, 238, 155)",
  "rgb(207, 147, 217)",
  "rgb(128, 222, 234)",
];

ArticlesColors.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
