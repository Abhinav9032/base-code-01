import React from "react";
import { useMediaQuery } from "react-responsive";
import logoThea from "./logo.png";
import './navbarMobile.css';

function Navbar(props) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 600 });
  if (isDesktopOrLaptop) {
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
          <ul className="navbar-nav   ml-auto  navbar-mobile-hide">
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
            <li className="nav-item mobile-view-menu-item" onClick={props.showPopUp}>
              <a className="nav-link">
                <div className="wish-list">
                  <UserLoginIcon />
                </div>
                <div id="navbar-item-text">Account</div>
              </a>
            </li>
            <li className="nav-item middle-item mobile-view-menu-item">
              <a className="nav-link" href="#">
                <div className="wish-list">
                  <WishList />
                </div>
                <div id="navbar-item-text">Wish-List</div>
              </a>
            </li>
            <li className="nav-item mobile-view-menu-item">
              <a className="nav-link mobile-view-nav-link" href="#">
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
  )

}else{
  return(
    <div className="mobile-menu-container">


{/*-----------------*/}


<div className="site-nav-container">
        <div id="header-menu-icon" className="header-icon menu-icon">
            <svg viewBox="0 0 24 24">
                <path d="M3.444 5.422a.733.733 0 110-1.466h17.047a.733.733 0
                        110 1.466H3.444zm0 7.111a.733.733 0
                        110-1.466h17.047a.733.733 0 110 1.466H3.444zm0
                        7.111a.733.733 0 110-1.466h17.047a.733.733 0 110
                        1.466H3.444z" fill="#3E4152" fillrule="evenodd">
                </path>
            </svg>
        </div>

        <div id="header-back-icon" className="nav-icon hide">
            <a href="/back">
                <svg className="header-icon menu-icon" viewBox="0 0 24 24">
                    <path fill="#3E4152" fillrule="evenodd" d="M20.25
                            11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749
                            0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745
                            0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748
                            0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5">
                    </path>
                </svg>
            </a>
        </div>
        <div className="nav-icon header-title" id="top-19px" >Thea Styles

    </div>


    <div id="header-title-2" className="nav-icon header-title hide" >
        <span className="header-heading">

        </span>
        <br /><span className="header-sub-heading"></span></div>
    <div className="header-actions pull-right">
        <div id="header-search-a2hs" className="header-icon">
            <svg width="20px" height="20px" viewBox="0 0 16 18">
                <g fill="none" fillrule="evenodd">
                    <path d="M-4-3h24v24H-4z">
                    </path>
                    <g fill="#3E4152">
                        <path d="M3.23 1.3c-.788
                                        0-1.43.61-1.43 1.359V15.34c0 .75.642
                                        1.359
                                        1.43 1.359h9.54c.788 0 1.43-.61
                                        1.43-1.359V2.66c0-.75-.642-1.359-1.43-1.359H3.23zM13
                                        18H3C1.621 18 .5 16.937.5
                                        15.632V2.368C.5
                                        1.063 1.621 0 3 0h10c1.379 0 2.5 1.063
                                        2.5
                                        2.368v13.264C15.5 16.937 14.379 18 13
                                        18z">
                        </path>

                        <path d="M10.25 8.25h-1.5v-1.5a.75.75 0
                                        00-1.5
                                        0v1.5h-1.5a.75.75 0 000
                                        1.5h1.5v1.5a.75.75 0
                                        001.5 0v-1.5h1.5a.75.75 0 000-1.5">
                        </path>
                    </g>
                </g>

            </svg>
        </div>
        <a id="header-share-icon" className="header-icon hide" href="/share">
            <svg viewBox="0 0 24 24">
                <g fill="none" fillrule="evenodd">
                    <path fill="#3E4152" d="M17.977 15.985c-.757
                                    0-1.44.32-1.924.828l-7.462-4.146c.056-.213.088-.436.088-.667
                                    0-.23-.032-.454-.088-.667l7.462-4.146a2.657
                                    2.657 0 10-.733-1.828c0
                                    .23.033.453.089.667l-7.462 4.146a2.657 2.657
                                    0
                                    10-1.924 4.485c.757 0 1.44-.32
                                    1.924-.829l7.462
                                    4.146a2.65 2.65 0 00-.088.668 2.657 2.657 0
                                    102.656-2.657">
                    </path>
                    <path d="M0 0h24v24H0z" opacity="{0.05}">
                    </path>
                </g>
            </svg>
        </a>


        <a id="header-search-icon" className="header-icon" href="/autosuggest">
            <svg viewBox="0 0 24 24">
                <path fill="#3E4152" fillrule="evenodd" d="M3.438
                                9.754a6.415 6.415 0 016.408-6.409 6.415 6.415 0
                                016.409 6.409 6.416 6.416 0 01-6.409 6.408 6.416
                                6.416 0 01-6.408-6.408M21.816
                                20.87l-5.974-6.02a7.839 7.839 0
                                001.88-5.097c0-4.343-3.534-7.875-7.876-7.875-4.342
                                0-7.875 3.532-7.875 7.875 0 4.342 3.533 7.875
                                7.875
                                7.875a7.837 7.837 0 004.946-1.753l5.983
                                6.029a.73.73
                                0 001.037.004.733.733 0 00.004-1.038">
                </path>
            </svg>
        </a>


        <div id="header-wishlist-icon" id="header-search-a2hs"  className="header-icon">
            <svg viewBox="0 0 24 24">
                <path fill="#3E4152" fillrule="evenodd" d="M17.741
                                20.041l-5.303-3.327a.733.733 0
                                00-.775-.002l-5.404
                                3.34V3.786H8.9v2.946a.733.733 0 101.467
                                0V3.786h7.373v16.255zm.734-17.722H5.525a.733.733
                                0
                                00-.733.734v18.314a.733.733 0
                                001.12.624l6.134-3.792
                                6.039 3.789a.733.733 0
                                001.123-.621V3.053a.733.733 0
                                00-.733-.734z">
                </path>
            </svg>
        </div>


        <a id="header-cart-icon" className="header-icon" href="/login">
            <svg viewBox="0 0 24 24">
                <path fill="#3E4152" fillrule="evenodd" d="M4.012
                                20.718L5.246 7.314H7.27v1.763a.733.733 0 101.466
                                0V7.314h6.528v1.763a.733.733 0 001.466
                                0V7.314h2.024l1.234 13.404H4.012zM12 3.282c1.56
                                0
                                2.865 1.1 3.187 2.565H8.813A3.268 3.268 0 0112
                                3.282zm8.15 3.228a.733.733 0
                                00-.73-.663h-2.747A4.734 4.734 0 0012
                                1.816a4.734
                                4.734 0 00-4.673 4.03H4.58a.733.733 0
                                00-.73.664L2.475 21.38a.734.734 0
                                00.73.804h17.59a.733.733 0 00.73-.803L20.15
                                6.51z">
                </path>
            </svg>
        </a>

    </div>
    </div>






{/*-----------------*/}
    </div>
  )
}
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
