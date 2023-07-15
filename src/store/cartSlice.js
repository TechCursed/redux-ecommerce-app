const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    // Adds products action into the array
    add(state, action) {
      state.push(action.payload);
    },

    // Removes product with specified ID from the array
    //BUG FIX NOTE
    // filter method to remove the products based on the provided ID. However, 
    // the filter method returns a new array, and you are returning that new array 
    // as the state. This causes the state to be replaced with the filtered array, 
    // which is not what you intended.To fix this issue, you can modify your remove 
    // reducer function to directly mutate the state by using the splice method instead
    //  of returning a new array.
    remove(state, action) {
      const productIdToRemove = action.payload;
      const index = state.findIndex(item => item.id === productIdToRemove);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
