import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  buyItem,
  deleteList,
} from "../redux/listGroupSlice";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function List() {
  const listGroup = useSelector((state) => state.listGroup);
  const params = useParams();
  const navigate = useNavigate();
  const list = listGroup.find((list) => list.id === params.id);

  const dispatch = useDispatch();

  const [inputItem, setInputItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputItem) return;
    dispatch(addItem(inputItem, params.id));
    setInputItem("");
  };

  return (
    list && (
      <div className="container bg-light rounded shadow p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3>{list.listTitle}</h3>
          <i
            className="fa-solid fa-trash-can fa-xl"
            onClick={() => {
              dispatch(deleteList(params.id));
              navigate("/");
            }}
          ></i>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type an item you want to add..."
              value={inputItem}
              onChange={(e) => setInputItem(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button"
            >
              Add
            </button>
          </div>
        </form>
        <ul className="list-group pb-3">
          {list.items.map((item) => {
            return (
              <li
                key={item.id}
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
                    onClick={() =>
                      dispatch(buyItem({ itemId: item.id, listId: params.id }))
                    }
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
                    onClick={() =>
                      dispatch(
                        deleteItem({ itemId: item.id, listId: params.id })
                      )
                    }
                  ></i>
                </div>
              </li>
            );
          })}
        </ul>
        <Link to={"/"}>
          <button className="btn btn-primary">Go back</button>
        </Link>
      </div>
    )
  );
}

export default List;
