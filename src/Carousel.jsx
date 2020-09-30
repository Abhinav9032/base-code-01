import React, { useState, useEffect } from "react";
import APP_CONSTANTS from './Constants';

function Carousel() {
  const [imageDetails, setImageDetails] = useState([]);
  const [carouselItemsList, setCarouselItemsList] = useState([]);
  useEffect(() => {
    console.log("use Effect called", imageDetails);
    const url = APP_CONSTANTS.HTTP_PROTOCOL+APP_CONSTANTS.LOCAL_URL+APP_CONSTANTS.CAROUSEL_ENDPOINT;

    console.log('URL formed -> ',url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImageDetails(data);
        setCarouselItemsList(
          imageDetails.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                imageUsed={item.imageUsed}
                captionHead={item.captionHead}
                captionSmall={item.captionSmall}
              />
            );
          })
        );
      });
  }, [imageDetails.length]);

  const setCarousel = setInterval(setCarouselActiveElement, 1000);

  function setCarouselActiveElement() {
    if (carouselItemsList.length > 1) {
      document
        .getElementsByClassName("carousel-inner")[0]
        .children[0].classList.add("active");
      clearInterval(setCarousel);
    }
  }
  return (
    <div className="carousel-container-wide">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" id="carousel-header">{carouselItemsList}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

function CarouselItem(props) {
  return (
    <div className="carousel-item">
      <img src={props.imageUsed} className="d-block w-100" id="carousel-image-fixed" alt="props.alt" />
      <div className="carousel-caption d-none d-md-block" id="carousel-text">
        <h3>{props.captionHead}</h3>
        <p>{props.captionSmall}</p>
      </div>
    </div>
  );
}

export default Carousel;
