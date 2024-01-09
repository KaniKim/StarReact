import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { apply_host } from "../../api/fetch";
import { ThreeDots } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { cancelToTrue } from "../../redux/quitApply";

function AlertApplication() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: RootState) => state.apply);
  const notify = () =>
    toast.success("Application Complete", {
      autoClose: 3000,
      hideProgressBar: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton: false,
    });

  const handleClick = () => {
    dispatch(apply_host());
    notify();
  };

  return (
    <div>
      {state.check === false && (
        <Card className="bg-black" style={{ borderRadius: 0 }}>
          <Card.Body>
            <Container
              fluid
              className="d-flex justify-content-between align-items-center"
            >
              <Row>
                <Col>
                  <h4 className="text-white">Host a Party</h4>
                  <h4 className="text-secondary">
                    Be the first to host your artist party
                  </h4>
                </Col>
              </Row>
              <Button
                onClick={handleClick}
                className="rounded-pill"
                style={{ backgroundColor: "#8840FF", height: "50%" }}
              >
                Apply now
              </Button>
            </Container>
          </Card.Body>
        </Card>
      )}
      {state.check === true && (
        <Card className="bg-black" style={{ borderRadius: 0 }}>
          <h1 className="text-white ms-2">Your party application</h1>
          <Container fluid className="d-flex mt-3 mb-3">
            <Image
              width="75px"
              src={
                state.data.external_data.member.fandom.artist.image.thumb_url
              }
              thumbnail
            ></Image>
            <Row className="ms-3">
              <Col>
                <h4 className="text-white">
                  {state.data.external_data.member.fandom.artist.name}
                </h4>
                <h4 className="text-secondary">{state.date.toString()}</h4>
              </Col>
            </Row>
            <Row className="ms-auto">
              <Container fluid className="d-flex align-items-center">
                <Button
                  onClick={() => dispatch(cancelToTrue(true))}
                  className="rounded-pill bg-black text-white border-0 btn-primary"
                >
                  pending
                </Button>
                <ThreeDots
                  size={"30px"}
                  className="ms-3 text-white"
                ></ThreeDots>
              </Container>
            </Row>
          </Container>
        </Card>
      )}
    </div>
  );
}

export default AlertApplication;
