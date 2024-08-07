import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./userSlice";
import addressReducer from "./addressSlice";
import { apiSlice } from "./api";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "address"],
};

const rootReducer = combineReducers({
    user: userReducer,
    address: addressReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});

export default store;

export const persistor = persistStore(store);
