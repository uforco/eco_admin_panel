import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import { RootState } from '@/redux/app/store';

export const addProductSlice = createSlice({
  name: 'add_product',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.product = { ...state.product, ...action.payload}
    },
    inputDataProduct: (state, action) => {
      state.product = { ...state.product, ...action.payload}
    },
    setContent: (state, action) => {
      state.product.description = action.payload
    },
    imageIncludes: (state, action) => {
      const {position, image} = action.payload;
      state.product.image[position] = image
    },
    deleteImage: (state, action) => {
      const {position} = action.payload;
      state.product.image[position] = '';
    },
    resetState: () => initialState
  }
})

// Action creators are generated for each case reducer function
export const { increment, imageIncludes, setContent, deleteImage, resetState, inputDataProduct } = addProductSlice.actions

export default addProductSlice.reducer

export const productSliceData = (state: RootState) => state.addproduct