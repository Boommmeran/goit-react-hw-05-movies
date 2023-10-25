export const cutter = str => {
  if (str.length > 20) {
    return `${str.slice(0, 20).trim()}...`;
  }
  return str;
};
