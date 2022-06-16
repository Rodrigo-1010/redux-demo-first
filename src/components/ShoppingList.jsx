import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ShoppingList() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem !== "") {
      dispatch({
        type: "ADD_ITEM",
        payload: { id: uuidv4(), name: newItem, isBought: false },
      });
    }
    setNewItem("");
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleCheckBought = (id) => {
    dispatch({ type: "MARK_DONE", payload: id });
  };

  return (
    <div className="container px-5 mt-4">
      <h3 className="text-center mb-3">Shopping list</h3>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add new item"
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </form>
          <ul className="list-group">
            {shoppingList.map((item) => {
              return (
                <li
                  key={item.id}
                  id={item.id}
                  className={
                    item.isBought
                      ? "list-group-item bg-success bg-opacity-10"
                      : "list-group-item"
                  }
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="checkbox"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCheckBought(item.id)}
                      className="form-check-input"
                    />
                    <span
                      className={
                        item.isBought ? "text-decoration-line-through " : ""
                      }
                    >
                      {item.name}
                    </span>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => handleDeleteItem(item.id)}
                    ></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
