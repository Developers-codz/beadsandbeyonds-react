export const getRateFilteredData = (data, rating) => {
  // console.log(data, rating);
  return data.filter(({ ratings }) => ratings >= rating);
};
