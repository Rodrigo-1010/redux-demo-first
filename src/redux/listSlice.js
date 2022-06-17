import { createSlice, nanoid } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name) => {
        const id = nanoid();
        return { payload: { id, name, isBought: false } };
      },
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    boughtItem(state, action) {
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        return { ...item, isBought: !item.isBought };
      });
    },
  },
});

const { actions, reducer } = listSlice;

export const { addItem, deleteItem, boughtItem } = actions;
export default reducer;
