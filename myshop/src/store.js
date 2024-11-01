
import { configureStore, createSlice } from '@reduxjs/toolkit'; 


const productSlice=createSlice({
    name:'products',

    initialState : {
        veg : [
           { name:'tomato', price:120.00, brand:'naturals'},
           { name:'potato', price:90.00, brand:'naturals'},
           { name:'tomato', price:110.00, brand:'farmfresh'},
           { name:'potato', price:80.00, brand:'farmfresh'},
           { name:'tomato', price:110.00, brand:'ruchi'},
           { name:'potato', price:80.00, brand:'ruchi'},
           { name:'beetroot', price:120.00, brand:'naturals'},
           { name:'carrots', price:90.00, brand:'naturals'},
           { name:'beetroot', price:110.00, brand:'farmfresh'},
           { name:'carrots', price:80.00, brand:'farmfresh'},
           { name:'beetroot', price:110.00, brand:'ruchi'},
           { name:'carrots', price:80.00, brand:'ruchi'}
        ],
        nonveg : [
            { name:'chiken', price:220.00, brand:'naturals'},
            { name:'fish', price:320.00, brand:'naturals'},
            { name:'chiken', price:210.00, brand:'farmfresh'},
            { name:'fish', price:310.00, brand:'farmfresh'},
            { name:'chiken', price:210.00, brand:'suguna'},
            { name:'fish', price:310.00, brand:'suguna'},
            { name:'pork', price:220.00, brand:'naturals'},
            { name:'mutton', price:320.00, brand:'naturals'},
            { name:'pork', price:210.00, brand:'farmfresh'},
            { name:'mutton', price:310.00, brand:'farmfresh'},
            { name:'pork', price:210.00, brand:'suguna'},
            { name:'mutton', price:310.00, brand:'suguna'}
        ]
    },
    reducers:{}
});

const cartSlice=createSlice({

    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{

            const stat=state.find(item=>item.name === action.payload.name);
            if(stat)
            {
                stat.quantity +=1; 
            }
            else
            {
                state.push({...action.payload,quantity:1});
            }
        },

        removeFromCart:(state,action)=>{

            const stat=state.find(item=>item.name === action.payload.name);

            if(stat)
            {
                if(stat.quantity === 1)
                {
                    return state.filter(product=>product.name !== stat.name);
                }
                else
                {
                    stat.quantity -= 1;
                }
            }
        },

        deleteFromCart:(state,action)=>{

            return state.filter(product=>product.name !== action.payload.name);

        }
    } 
});

const store=configureStore({

    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer
    }
});
export const {addToCart,removeFromCart,deleteFromCart} = cartSlice.actions;
export default store;