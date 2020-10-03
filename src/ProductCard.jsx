import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import APP_CONSTANTS from "./Constants";

function ProductCard(props) {
  const [imageDetails, setImageDetails] = useState([]);
  const [productItemList, setproductItemList] = useState([]);

  useEffect(() => {
    console.log("use Effect called", imageDetails);
    const url =
      APP_CONSTANTS.HTTP_PROTOCOL +
      APP_CONSTANTS.LOCAL_URL +
      APP_CONSTANTS.PRODUCTS_ENDPOINT;

    console.log("URL formed -> ", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImageDetails(data);
        setproductItemList(
          imageDetails.map((item) => {
            return (
              <SingleProduct
                imageUrl={item.productImageUrl}
                category={item.brand}
                itemName={item.productName}
                description={item.description}
                cost={item.cost}
              />
            );
          })
        );
      });
  }, [imageDetails.length]);

  return (
    <div className="container">
      <div className="row">{productItemList}</div>
    </div>
  );
}

function SingleProduct(props) {
  return (
    <div className="col-md-3">
      <div className="card card-product">
        <div className="card-image">
          <a href="#">
            {" "}
            <img
              className="img"
              src={props.imageUrl}
              id="card-image-custom"
            />{" "}
          </a>
        </div>
        <div className="table">
          <h6 className="category text-rose">{props.category}</h6>
          <h4 className="card-caption">
            <a href="#">{props.itemName}</a>
          </h4>
          <div className="card-description"> {props.description} </div>
          <div className="ftr">
            <div className="price">
              <h4>{props.cost}</h4>{" "}
            </div>
            <div className="stats">
              <button
                type="button"
                rel="tooltip"
                title=""
                className="btn btn-just-icon"
                data-original-title="Saved to Wishlist"
              >
                {" "}
                <CartIcon />{" "}
              </button>
              <button
                type="button"
                className="btn btn-just-icon"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to Wishlist"
              >
                <WishList />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartIcon() {
  return (
    <svg
      width="1.5em"
      height="2em"
      viewBox="0 0 16 16"
      className="bi bi-cart3"
      fill="#039dfc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      />
    </svg>
  );
}

function WishList() {
  return (
    <svg
      width="1.5em"
      height="2em"
      viewBox="0 0 16 16"
      className="bi bi-bookmark-heart"
      fill="#039dfc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
      />
      <path
        fillRule="evenodd"
        d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
      />
    </svg>
  );
}

export default ProductCard;
