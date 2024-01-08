import { Row } from "react-bootstrap";
import BrandNav from "./components/hompage/NavBar";
import AlertApplication from "./components/hompage/PartyAlert";
import InfiniteScroll from "./components/hompage/scroll/InfiniteScroll";
import { ToastContainer } from "react-toastify";
import PopupModal from "./components/hompage/QuitPop";

function App() {
  return (
    <>
      <BrandNav></BrandNav>
      <div className="d-grid gap-5">
        <Row>
          <AlertApplication></AlertApplication>
        </Row>
        <Row>
          <InfiniteScroll></InfiniteScroll>
        </Row>
      </div>
      <PopupModal></PopupModal>
      <ToastContainer position="bottom-center"/>
    </>
  );
}

export default App;
