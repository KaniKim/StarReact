import { Button, Card, Col, Container, Row } from "react-bootstrap";

function AlertApplication() {
  return (
    <Card className="bg-dark mt-5">
      <Card.Body>
        <Container fluid className="d-flex justify-content-between align-items-center" style={{ "display":"flex"}}>
          <Row>
            <Col>
              <h4 className="text-white">Host a party</h4>
              <h4 className="text-secondary">Be the first to host your artist's party</h4>
            </Col>
          </Row>
          <Button className="rounded-pill" style={{ backgroundColor: "#8840FF", height: "50%"}}>Apply now</Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default AlertApplication;