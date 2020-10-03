import React from "react";
import logoThea from "./logo.png";

function Navbar(props) {
  return (
    <div className="border-bottom">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logoThea} alt="Thea Styles" className="logo-thea" />
        </a>

        <div className="search-box  ml-auto"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav   ml-auto">
            <li className="nav-item active">
              <div className="btn-group" id="dropdown-container">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  id="dropdown-button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Action
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Saree
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Salwar
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Kurti
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Tops
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item active">
              <form className="form-inline my-2 my-lg-6" id="search-wrapper">
                <input
                  className="form-control mr-lg-6"
                  type="search"
                  placeholder="Search for products,brands and more"
                  aria-label="Search"
                  id="search-box"
                />
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                  id="search-icon-box"
                >
                  <SearchIcon />
                </button>
              </form>
            </li>
          </ul>

          <ul className="navbar-nav  ml-auto">
            <li className="nav-item" onClick={props.showPopUp}>
              <a className="nav-link">
                <div className="wish-list">
                  <UserLoginIcon />
                </div>
                <div id="navbar-item-text">Account</div>
              </a>
            </li>
            <li className="nav-item middle-item">
              <a className="nav-link" href="#">
                <div className="wish-list">
                  <WishList />
                </div>
                <div id="navbar-item-text">Wish-List</div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div>
                  <CartIcon />
                </div>
                <div id="navbar-item-text">Cart</div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function CartIcon() {
  return (
    <svg
      width="1em"
      height="1em"
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

function SearchIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-search"
      fill="#039dfc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
      />
      <path
        fillRule="evenodd"
        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
      />
    </svg>
  );
}

function WishList() {
  return (
    <svg
      width="1em"
      height="1em"
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

function UserLoginIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-person-circle"
      fill="#039dfc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
      <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path
        fillRule="evenodd"
        d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
      />
    </svg>
  );
}

export default Navbar;
