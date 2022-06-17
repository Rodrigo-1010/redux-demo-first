export default function shoppingListReducer(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "MARK_DONE":
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        return { ...item, isBought: !item.isBought };
      });
    default:
      return state;
  }
}
