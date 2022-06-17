import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal1 from "./Modal1";

function ListGroup() {
  const listGroup = useSelector((state) => state.listGroup);

  return (
    listGroup && (
      <div className="container bg-light rounded shadow p-3">
        <Modal1 />
        <ul className="list-group mt-3">
          {listGroup.map((list) => {
            return (
              <Link to={`list/${list.id}`} key={list.id}>
                <li className="list-group-item rounded mb-1">
                  {list.listTitle}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    )
  );
}

export default ListGroup;
