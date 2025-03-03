import { configureStore } from '@reduxjs/toolkit';
import addProductSlice from '../features/addProduct/addProductSlice';
import stockProductApi from '../features/stock_product_list/stockProductList';
// ...

export const store = configureStore({
  reducer: {
    addproduct: addProductSlice,
    [stockProductApi.reducerPath]: stockProductApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( stockProductApi.middleware )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store;

