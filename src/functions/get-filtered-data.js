const getFilteredData = (data, categoryBy, clear) => {
  if (categoryBy && categoryBy === "FILTER_BY_PAINTING") {
    return data.filter((item) => item.category === "painting");
  }
  if (categoryBy && categoryBy === "FILTER_BY_DECORATION") {
    return data.filter((item) => item.category === "decorations");
  }
  if (categoryBy && categoryBy === "FILTER_BY_TOYS") {
    return data.filter((item) => item.category === "toys");
  }
  if (categoryBy && categoryBy === "FILTER_BY_HOME_DECORS") {
    return data.filter((item) => item.category === "home");
  }
  if (categoryBy && categoryBy === "CLEAR_ALL_FILTER") {
    console.log("clicked");
    return data;
  }
  return data;
};

export { getFilteredData };
