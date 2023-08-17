import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./greetingSlice";

const store = configureStore({
  reducer: {
    allgreeting: greetingSlice,
  },
});

export default store;
