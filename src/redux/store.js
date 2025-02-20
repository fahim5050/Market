import { configureStore } from "@reduxjs/toolkit";
import {
  presistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import BazarReducer from "./BazarSlice";
// import { version } from "react";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const persistConfig={
  key: "root",
  version: 1,
  storage,
};
const persistedRducer=persistReducer(persistConfig,BazarReducer)
export const store = configureStore({
  reducer: {
    bazar: persistedRducer
  },
  middleware:(getDefultMiddlewar)=>
  getDefultMiddlewar({
      serializableCheck:{
        ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      }
  })
}); 
export let persistor=persistStore(store)

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
