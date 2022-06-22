import {productReducer,initProductState} from "reducer"

describe("testing product filters" ,()=>{
    test("should sort by price",()=>{
        const state = productReducer(initProductState,{
            type:"SORT",
            payload:"LOW_TO_HIGH"
        })
        const expectedState = {...initProductState,sortBy:"LOW_TO_HIGH"}
        expect(state).toEqual(expectedState)
    })
    test("should set the filter by category" ,()=>{
        const state = productReducer(initProductState,{
            type:"FILTER",
            payload:"decorations"

        })
        const expectedState = {...initProductState,categoryBy:["decorations"]};
        expect(state).toEqual(expectedState);
    })
    test("should set rating",()=>{
        const state = productReducer(initProductState,{
            type:"RATINGS",
            payload:4
        })
        const expectedState = {...initProductState,ratings:4}
        expect(state).toEqual(expectedState)
    })
    test("should set by price",()=>{
        const state = productReducer(initProductState,{
            type:"PRICE",
            payload:500
        })
        const expectedState = {...initProductState,price:500}
        expect(state).toEqual(expectedState)
    })
    test("should set by search text",()=>{
        const state = productReducer(initProductState,{
            type:"SEARCH",
            payload:"toy"
        })
        const expectedState = {...initProductState,searchText:"toy"}
        expect(state).toEqual(expectedState)
    })
    test("should clear all data",()=>{
        const state = productReducer(initProductState,{
            type:"CLEAR"
        })
        const expectedState = {...initProductState,
            sortBy: null,
            categoryBy: [],
            ratings: 2,
            clear: null,
            price:1000,
            searchText:""
        }
        expect(state).toEqual(expectedState)
    })

})