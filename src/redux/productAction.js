import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./types";



export function setProducts(props){
    return {
        type: SET_PRODUCTS,
        payload: props
    }
}

export function selectedProduct(props){
    return {
        type: SELECTED_PRODUCTS,
        payload:props
    }
}