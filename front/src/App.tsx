import "./App.css";
import BrandNav from "./components/hompage/NavBar";
import AlertApplication from "./components/hompage/PartyAlert";
import InfiniteScroll from "./components/hompage/scroll/InfiniteScroll";

function App() {

  return (
    <>
      <BrandNav></BrandNav>
      <AlertApplication></AlertApplication>
      <InfiniteScroll></InfiniteScroll>
    </>
  );
}

export default App;
