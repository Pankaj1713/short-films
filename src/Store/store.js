import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const authTransform = createTransform(
  (inboundState) => ({
    token: inboundState.token,
  }),
  (outboundState) => ({
    token: outboundState.token,
  }),
  { whitelist: ["auth"] }
);

const persistConfig = {
  key: "root",
  storage,
  transforms: [authTransform],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);
export default store;
