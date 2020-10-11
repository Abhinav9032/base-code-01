import React, { Component } from "react";
import DetailedProductCarouselView from "./DetailedProductCarouselView";
import "./DetailedProductView.css";
import "./css/font-awesome.css";

import img1 from "./images/SlickCarousel_Images/img1.webp";
import img2 from "./images/SlickCarousel_Images/img2.jpg";
import img3 from "./images/SlickCarousel_Images/img3.webp";
import img4 from "./images/SlickCarousel_Images/img4.webp";
import img5 from "./images/SlickCarousel_Images/img5.webp";

const imageData = [
  {
    small: img1,
    large: img1,
  },
  {
    small: img2,
    large: img2,
  },
  {
    small: img3,
    large: img3,
  },
  {
    small: img4,
    large: img4,
  },
  {
    small: img5,
    large: img5,
  },
];

const alt = "WristWatch";

export default class DetailedProductView extends Component {
  render() {
    return (
      <div className="detailed-product-view-container">
        <div className="fluid react-slick">
          <div className="fluid__image-container">
            <DetailedProductCarouselView
              imageData={imageData}
              altValue={alt}
              {...{
                rimProps: {
                  enlargedImagePortalId: "portal",
                  enlargedImageContainerDimensions: {
                    width: "200%",
                    height: "100%",
                  },
                },
              }}
            />
          </div>
          <div className="fluid__instructions" style={{ position: "relative" }}>
            <div id="portal" className="portal" />
            <div className="product-detail-info-container">
              <a href="#" className="brand-detail">
                Brand : Reebok
              </a>

              <h4>Designer Kurtis by W</h4>

              <div className="star-with-user-count">
                <ul className="rating-container">
                  <Stars stars={5} />
                </ul>
                <span className="rating-count">9 ratings</span>
              </div>


              <div className="mrp-display">MRP: <span className="mrp-striker">&#8377;2399.00</span></div>
              <div className="price-display">Price: <span className="price-highlighter">&#8377;2399.00</span></div>
              <div className="price-display">You Save: <span className="price-highlighter">&#8377;2399.00 (5%)</span></div>
              <p>Inclusive of all taxes</p>

            </div>
          </div>
          <div style={{ height: "1000px" }} />
        </div>
      </div>
    );
  }
}

const Stars = (starsRating) => {
  let s = starsRating.stars;
  let li = [];

  while (s-- > 0) {
    li.push(<i class="fa fa-star" aria-hidden="true"></i>);
  }
  return li.map((item) => <li className="star-rating">⭐️</li>);
};
