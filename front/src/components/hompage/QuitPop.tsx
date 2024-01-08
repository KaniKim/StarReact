import { Button, Modal } from "react-bootstrap";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { cancelToFalse } from "../../redux/quitApply";

function PopupModal() {
  const cancel = useAppSelector((state: RootState) => state.quit.cancel);
  const dispatch = useAppDispatch();

  return (
    <Modal
      show={cancel}
    >
      <Modal.Body className="bg-black" >
        <div className="d-grid gap-2">
          <Button className="bg-black" >Quit a host</Button>
          <Button className="bg-black" onClick={() => dispatch(cancelToFalse(false))}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PopupModal;