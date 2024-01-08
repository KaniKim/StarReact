import { Button, Modal } from "react-bootstrap";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { cancelToFalse, cancel_host } from "../../redux/quitApply";
import { resetApplyState }  from "../../redux/applyHost";

function PopupModal() {
  const cancel = useAppSelector((state: RootState) => state.quit.cancel);
  const dispatch = useAppDispatch();

  return (
    <Modal
      show={cancel}
    >
      <Modal.Body className="bg-black" >
        <div className="d-grid gap-2">
          <Button id="col" className="bg-black border-0 btn-primary" onClick={() => {
            dispatch(resetApplyState());
            dispatch(cancel_host());
            dispatch(cancelToFalse(false));
          }
          }>Quit a host</Button>
          <Button className="bg-black border-0 btn-primary" onClick={() => dispatch(cancelToFalse(false))}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PopupModal;