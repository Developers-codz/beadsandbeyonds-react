export const getRateFilteredData = (data, rating) => {
  return data.filter(({ ratings }) => ratings >= rating);
};
