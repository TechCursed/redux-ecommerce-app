const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],

    reducers : {
       
        //adds products action into the array
        add(state, action){
          state.push(action.payload);
        },
         //filters the array
        remove(state, action){
         return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const{add, remove} = cartSlice.actions;
export default cartSlice.reducer;