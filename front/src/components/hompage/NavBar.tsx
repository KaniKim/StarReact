import { Container, Navbar } from "react-bootstrap";

function BrandNav() {
  return (
    <div>
      <Navbar className={"bg-dark"} expand="lg">
        <Container className="ms-3">
          <Navbar.Brand className="text-white" href="#home">Sample</Navbar.Brand>
        </Container>
      </Navbar>   
    </div> 
  );
}

export default BrandNav;