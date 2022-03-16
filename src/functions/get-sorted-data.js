const getSortedData = (data, sortBy) => {
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return data.sort((a, b) => a.price - b.price);
  }
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return data.sort((a, b) => b.price - a.price);
  }
  return data;
};

export { getSortedData };
