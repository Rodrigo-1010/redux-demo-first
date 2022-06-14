export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET_NUMBER":
      return (state = action.payload);
    default:
      return state;
  }
}
