import { configureStore } from '@reduxjs/toolkit'
import addProductSlice from './../features/addProduct/addProductSlice';
// ...

export const store = configureStore({
  reducer: {
    addProduct: addProductSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStore = typeof store;

