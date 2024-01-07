import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { apply_host } from "../../redux/applyHost";
import { ThreeDots } from "react-bootstrap-icons";
import { toast } from "react-toastify";

function AlertApplication() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: RootState) => state.apply);    
  const notify = () => toast.success("Application Complete", {
    autoClose: 3000,
    hideProgressBar: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  function multipleFunc() {
    dispatch(apply_host());
    notify();
  }
 
  return (
    <div>
      {state.check === false && (
        <Card className="bg-dark" style={{borderRadius: 0}}>
          <Card.Body>
            <Container fluid className="d-flex justify-content-between align-items-center">
              <Row>
                <Col>
                  <h4 className="text-white">Host a Party</h4>
                  <h4 className="text-secondary">Be the first to host your artist party</h4>
                </Col>
              </Row>
              <Button onClick={() => {multipleFunc();}} className="rounded-pill" style={{ backgroundColor: "#8840FF", height: "50%"}}>Apply now</Button>
            </Container>
          </Card.Body>
        </Card>
      )
      }
      {state.check === true && (
        <Card className="bg-dark"  style={{borderRadius: 0}}>
          <h1 className="text-white ms-2">Your party application</h1>
          <Container fluid className="d-flex mt-3 mb-3">
            <Image width="7%" src={state.data.external_data.member.fandom.artist.image.thumb_url} thumbnail></Image>
            <Row className="ms-3">
              <Col>
                <h4 className="text-white">{state.data.external_data.member.fandom.artist.name}</h4>
                <h4 className="text-secondary">{state.date.toString()}</h4>
              </Col>
            </Row>
            <Row className="ms-auto">
              <Container fluid className="d-flex align-items-center">
                <Button onClick={() => dispatch(apply_host())} className="rounded-pill bg-black text-white">pending</Button>
                <ThreeDots size={"30px"} className="ms-3 text-white"></ThreeDots>
              </Container>
            </Row>
          </Container>
        </Card>
      )}
    </div>
  );

}

export default AlertApplication;