import { Row } from "react-bootstrap";
import BrandNav from "./components/homepage/NavBar";
import AlertApplication from "./components/homepage/PartyAlert";
import InfiniteScroll from "./components/homepage/scroll/InfiniteScroll";
import { ToastContainer } from "react-toastify";
import PopupModal from "./components/homepage/QuitPop";

function App() {
  return (
    <div className="bg-black">
      <BrandNav />
      <div className="d-grid gap-5">
        <Row>
          <AlertApplication />
        </Row>
        <Row>
          <InfiniteScroll />
        </Row>
      </div>
      <PopupModal />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
