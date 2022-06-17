import { createSlice, nanoid } from "@reduxjs/toolkit";

const listGroupSlice = createSlice({
  name: "listGroup",
  initialState: [],
  reducers: {
    //LIST GROUP REDUCERS:
    addList: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (listTitle) => {
        const id = nanoid();
        return { payload: { id, listTitle, items: [] } };
      },
    },
    deleteList(state, action) {
      return state.filter((list) => list.id !== action.payload);
    },
    //INDIVIDUAL LIST REDUCERS:
    addItem: {
      reducer: (state, action) => {
        return state.map((list) => {
          return list.id === action.payload.listId
            ? { ...list, items: [...list.items, action.payload] }
            : list;
        });
      },
      prepare: (name, listId) => {
        const id = nanoid();
        return { payload: { id, name, isBought: false, listId } };
      },
    },
    deleteItem(state, action) {
      const list = state.find((list) => list.id === action.payload.listId);

      list.items = list.items.filter(
        (item) => item.id !== action.payload.itemId
      );
    },
    buyItem(state, action) {
      const item = state
        .find((list) => list.id === action.payload.listId)
        .items.find((item) => item.id === action.payload.itemId);

      item.isBought = !item.isBought;
    },
  },
});

const { actions, reducer } = listGroupSlice;

export const { addList, deleteList, addItem, deleteItem, buyItem } = actions;
export default reducer;
