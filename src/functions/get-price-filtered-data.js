export const getPriceFilteredData = (data, pricerange) => {
    return data.filter(({ price }) => price <= pricerange);
  };
  