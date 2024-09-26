import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productData from "../productData";

// Define the type for each product (customize according to your actual product structure)
interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

// Define the initial state structure
interface CartState {
    cart: Product[];
    items: any;
    totalQuantity: number;
    totalPrice: number;
}

const initialState: CartState = {
    cart: [],
    items: productData,  // assuming productData is an array of Product objects
    totalQuantity: 0,
    totalPrice: 0
};

// Create the slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add to cart action expecting a Product type as payload
        addToCart: (state, action: PayloadAction<Product>) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)

            if(find >= 0){
                state.cart[find].quantity += 1;
            }
            else{
                state.cart.push(action.payload);
            }
           
        },



        getCartTotal: (state) => {
            let {totalQuantity, totalPrice} = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartItem", cartItem)

                    const {price, quantity} = cartItem
                    console.log(price, quantity);

                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal
                },{

                      totalPrice:0,
                      totalQuantity:0
                }
            );

              state.totalPrice = parseInt(totalPrice.toFixed(2));
              state.totalQuantity = totalQuantity
        },



        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },


        increaseItemQuantity: (state:any, action) => {
            state.cart = state.cart.map((item:any) => {
                if(item.id === action.payload){
                   return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        },


        decreaseItemQuantity: (state:any, action) => {
            state.cart = state.cart
                .map((item:any) => {
                    if (item.id === action.payload) {
                        const newQuantity = item.quantity - 1;
                        // If the quantity reaches zero, return `null` so we can filter it out later
                        if (newQuantity <= 0) {
                            return null;
                        }
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                })
                // Filter out any `null` values (i.e., items with zero quantity)
                .filter((item:any) => item !== null);
        },
        
    }
})

export const {addToCart , getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions

export default cartSlice.reducer;
