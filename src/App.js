import "./App.css";
import ListGroup from "./components/ListGroup";
import List from "./components/List";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Link to="/">
          <h1 className="text-center">HackList</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ListGroup />} />
        <Route path="list/:id" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
