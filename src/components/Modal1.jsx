import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addList } from "../redux/listGroupSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Modal1() {
  const dispatch = useDispatch();

  const [newListName, setNewListName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(newListName));
    setNewListName("");
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new list
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleModalSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="Type new list name..."
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create new list
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal1;
