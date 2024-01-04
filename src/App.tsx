import "./App.css";
import BrandNav from "./components/hompage/NavBar";
import AlertApplication from "./components/hompage/PartyAlert";
import CarouselCard from "./components/hompage/scroll/CarouselCard";

function App() {

  return (
    <>
      <BrandNav></BrandNav>
      <AlertApplication></AlertApplication>
      <CarouselCard></CarouselCard>
    </>
  );
}

export default App;
