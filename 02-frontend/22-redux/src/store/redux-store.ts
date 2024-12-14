import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
