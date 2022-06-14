import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [cartItem, setCartItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: cartItem });
    setCartItem(null);
  };

  const handleDeleteItem = (e) => {
    console.log(e.target);
    dispatch({ type: "REMOVE_ITEM", payload: e.target.innerText });
  };

  return (
    <div className="container px-5 mt-4">
      <h3 className="text-center mb-3">Shopping list</h3>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className=""
                type="text"
                onChange={(e) => setCartItem(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="col">
          <ul className="list-group">
            {cart.map((item, index) => {
              return (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={handleDeleteItem}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
