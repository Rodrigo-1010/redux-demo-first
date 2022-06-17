import { configureStore } from "@reduxjs/toolkit";
import listGroupReducer from "../redux/listGroupSlice";

const store = configureStore({
  reducer: {
    listGroup: listGroupReducer,
  },
});

export default store;
