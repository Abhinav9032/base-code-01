import React, { Component } from "react";
import DetailedProductCarouselView from "./DetailedProductCarouselView";
import "./DetailedProductView.css";
import "./css/font-awesome.css";


const imageData = [
  {
    small: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img1.webp',
    large: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img1.webp',
  },
  {
    small: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img2.jpg',
    large: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img2.jpg',
  },
  {
    small: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img3.webp',
    large: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img3.webp',
  },
  {
    small: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img4.webp',
    large: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img4.webp',
  },
  {
    small: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img5.webp',
    large: 'https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/ProductDetails/img5.webp',
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
            <main className="col-lg-6" id="desc-box">
					<article>
						<a href="#" className="text-primary btn-link">Clothes</a>
						<h3 className="product-name">Winter Boots Leather for Men</h3>
						<div>
							<ul className="rating-stars">
								<li  className="stars-active">
									<img src="bootstrap-ecommerce-html/images/icons/stars-active.svg" alt="⭐️"/>
								</li>
								<li>
									<img src="bootstrap-ecommerce-html/images/icons/starts-disable.svg" alt=""/>
								</li>
							</ul>
							<span className="label-rating mr-3 text-muted">7/10</span>
							<a href="#" className="btn-link  mr-3 text-muted"> <i className="fa fa-heart"></i> Save for later </a>
							<a href="#" className="btn-link text-muted"> <i className="fa fa-book-open"></i> Compare </a>
						</div> 

						<hr/>
			
						<div className="mb-3">
							<h6>Short description</h6>
							<ul className="list-dots mb-0">
								<li>Made in Russia</li>
								<li>Wolf leather </li>
								<li>Rubber material bottom</li>
								<li>Dark blue color</li>
							</ul>
						</div>
						
						<div className="form-group">
							<label className="text-muted">Available sizes</label>
							<div>
								<label className="js-check btn btn-check active">
									<input type="radio" name="option_size" value="option1" checked=""/>
									<span>Small</span>
								</label>
								<label className="js-check btn btn-check">
									<input type="radio" name="option_size" value="option1"/>
									<span>Medium</span>
								</label>
								<label className="js-check btn btn-check">
									<input type="radio" name="option_size" value="option1"/>
									<span>Large</span>
								</label>
								<label className="js-check btn btn-check disabled">
									<input type="radio" name="option_size" disabled="" value="option1"/>
									<span>Babies</span>
								</label>	
							</div>						
						</div>

						<div className="mb-3">
							<var className="price h4">$230.00</var> <br/>
							<span className="monthly">$32.00 / monthly <a href="#" className="btn-link">installment </a></span>
						</div> 

						<div className="mb-4">
							<a href="#" className="btn btn-primary">Buy now</a>
							<a href="#" className="btn btn-light">Add to card</a>
						</div>
						
					</article> 
				</main>

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
    li.push(<i className="fa fa-star" aria-hidden="true"></i>);
  }
  return li.map((item) => <li className="star-rating">⭐️</li>);
};
