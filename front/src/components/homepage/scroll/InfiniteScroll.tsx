import { useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";
import { Col, Row, Spinner, Container } from "react-bootstrap";
import axios, { AxiosResponse } from "axios";
import { useAppSelector } from "../../../redux/store";

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
  const itemIndex = useRef<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<MusicData[]>([]);
  const target = useRef<HTMLDivElement>(null);
  const check = useAppSelector((state) => state.apply.check);

  let tempArray: MusicData[] = [];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (isLoaded) return;

      fetchBTS();
    });
  });

  useEffect(() => observer.observe(target.current), []);

  const fetchBTS = () => {
    setIsLoaded(true);

    axios
      .get(
        `/api/search?term=bts&entity=song&offset=${itemIndex.current}&limit=20`,
      )
      .then((response: AxiosResponse) => {
        response.data["results"].shift();
        response.data["results"].forEach((value: MusicDataRequest) => {
          tempArray.push({
            artistName: value["artistName"],
            trackName: value["trackName"],
            artworkUrl: value["artworkUrl100"],
          });
        });
        itemIndex.current += 20;
        setData((data) => data.concat(tempArray));
        tempArray = [];
      });

    setIsLoaded(false);
  };

  return (
    <div>
      {check === true && (
        <h1
          className="ms-3 mb-3"
          style={{ color: "white", fontWeight: "bold" }}
        >
          NOW ON AIR
        </h1>
      )}
      <Container fluid className="align-items-center">
        <Row xs={1} md={2} lg={4} className="g-4">
          {data.map((element: MusicData, index: number) => {
            return (
              <Col key={index}>
                <CarouselCard
                  artistName={element.artistName}
                  trackName={element.trackName}
                  artworkUrl={element.artworkUrl}
                />
              </Col>
            );
          })}
          {!isLoaded && (
            <div ref={target}>
              <Spinner></Spinner>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default InfiniteScroll;
