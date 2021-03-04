export const If = ({ test, children }) => {
  if (test) {
    return children;
  }
  return null;
};
