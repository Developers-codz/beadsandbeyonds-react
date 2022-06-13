export const getSearchedData = (products,itemToSearch) => {
    if(itemToSearch === ""){
        return products;
    }
    else{
        const filteredData =  products.filter(product => {
            return product.name.toLowerCase().includes(itemToSearch)
        })
        return filteredData
    }
}