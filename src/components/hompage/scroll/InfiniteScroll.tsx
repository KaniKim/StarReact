import { useState } from "react";
import useIntersectionObserver from "../../../api/scroll";
import CarouselCard from "./CarouselCard";
import { Spinner } from "react-bootstrap";

interface MusicDataRequest {
    artistName: string;
    trackName: string;
    artworkUrl100: string;
}

interface MusicData {
    artistName: string;
    trackName: string;
    artworkUrl: string;
}

function InfiniteScroll() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemIndex, setItemIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<MusicData[]>([]);
 
  const fetchBTS = () => {
    fetch(`/api/lookup?id=883131348&entity=song&offset=${itemIndex}&limit=10`, {
      mode:"cors",
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "https://itunes.apple.com/",
        "Access-Control-Allow-Methods": "*" 
      },
    })
      .then(res => res.json())
      .then(res => {
        res["results"].shift();
        setIsLoaded(true);
        setItemIndex((i) => i + 10);
        res["results"].forEach((value: MusicDataRequest) => {
          data.push({artistName : value["artistName"], trackName: value["trackName"], artworkUrl: value["artworkUrl100"]});
        });
        setIsLoaded(false);
      });
  };

  const onInterset: IntersectionObserverCallback = (
    [entry],
    observer,
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      fetchBTS();
      observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    onInterset,
  });

  return (
    <div>
      {data.map((element: MusicData, index: number) => (
        <CarouselCard key={index} props={element}/> 
      ))}
      <div ref={setTarget}>{isLoaded && <Spinner></Spinner>}</div>
    </div>
  );
}

export default InfiniteScroll;