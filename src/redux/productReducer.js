import { SET_PRODUCTS } from "./types"


const initialState = {
    products: [
        {
            id: 1,
            title: "Akash",
            category: "programer"
        }
    ],
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}