export const getBaseUrl = () => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://amirkakavand.github.io";
      return baseUrl;
};
