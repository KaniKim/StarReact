import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";

type MusicType = {
  artistName: string
  trackName: string
  artworkUrl: string
}

type musicProps = {
  props: MusicType
}

function CarouselCard({props}: musicProps) {
  const { artistName, trackName, artworkUrl } = props;

  return (
    <Card className={"mt-3"} style={{ width: "40%"}}>
      <Card.Img variant="top" src={artworkUrl}></Card.Img>
      <Card.Body style={{ backgroundColor: "#8840FF" }}>
        <Container fluid className="d-flex justify-content-between align-items-center" style={{ "display":"flex"}}>
          <Row>
            <Col>
              <Card.Title className="text-white">{ artistName }</Card.Title>
              <Card.Text className="text-white">{ trackName }</Card.Text>
            </Col>
          </Row>
          <Button className="rounded-circle bg-white" style={{ backgroundColor: "#8840FF", height: "50%"}}>
            <CaretRightFill style={{color: "#3D4350"}}></CaretRightFill>
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CarouselCard;