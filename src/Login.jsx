import React from "react";
import "./Login.css";

function showLogin() {
  document.getElementById("login-component-container").style.display = "flex";
  document.getElementById("forgot-password-component").style.display = "none";
  document.getElementById("signup-component-container").style.display = "none";
}

function showSignUp() {
  document.getElementById("login-component-container").style.display = "none";
  document.getElementById("forgot-password-component").style.display = "none";
  document.getElementById("signup-component-container").style.display = "flex";
}

function showForgotPassword() {
  document.getElementById("login-component-container").style.display = "none";
  document.getElementById("forgot-password-component").style.display = "flex";
  document.getElementById("signup-component-container").style.display = "none";
}

function inputChanged(event) {
  console.log("a");
}

function validateEmail(inputEmailOrPhone, event) {
  console.log("Event", event);
  console.log("Input Event", inputEmailOrPhone);

  var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  if (inputEmailOrPhone == "") {
    console.log("  Please enter your Email or Phone Number  ");
    event.preventDefault();
    return false;
  } else if (!mailFormat.test(inputEmailOrPhone)) {
    console.log(
      "  Email Address / Phone number is not valid, Please provide a valid Email or phone number "
    );
    event.preventDefault();
    return false;
  } else {
    console.log(" Success ");
  }
}
function Login() {
  return (
    <>
      <div>
        <div className="css-zcxndt css-1tyndxa css-158z90c css-k008qs">
          <div
            className="css-l8s3ml css-1h3wlde css-o9di7c"
            id="signup-component-container"
          >
            <div className="css-1x9jn5u">
              <div className="css-3wr1ll">
                <h2 className="css-1n90z8d">
                  Get ready for an amazing shopping experience
                </h2>
                <h5 className="css-czik8g">
                  Sign up to complete your purchase.
                </h5>
                <div className="css-1tx38fa css-k008qs">
                  <div
                    className="css-of0vry css-cgq59l css-1imlk2a
                            css-k008qs"
                  >
                    <div
                      className="css-zcxndt css-1tyndxa css-uewl2b
                                css-k008qs"
                    >
                      <div className="css-u6ywvl">
                        <button className="css-ueoi01">
                          <img
                            className="css-l49lrr"
                            src="https://s3.ca-central-1.amazonaws.com/logojoy/images/facebook@2x.png"
                            alt=""
                            role="presentation"
                          />
                        </button>
                      </div>
                      <div className="css-u6ywvl">
                        <button className="css-i09m3c">
                          <img
                            className="css-l49lrr"
                            src="https://s3.ca-central-1.amazonaws.com/logojoy/images/google-plus.png"
                            alt=""
                            role="presentation"
                          />
                        </button>
                      </div>
                      <div className="css-u6ywvl">
                        <button className="css-e48n1r">
                          <img
                            className="css-deaxn8"
                            src="https://s3.ca-central-1.amazonaws.com/logojoy/images/twitter@2x.png"
                            alt=""
                            role="presentation"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="css-zcxndt css-1tyndxa css-k008qs">
                      <div
                        className="css-of0vry css-98hmgt
                                    css-k008qs"
                      ></div>
                      <span className="css-mejexs css-k008qs">or</span>
                      <div
                        className="css-of0vry css-1e7ea2v
                                    css-k008qs"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="css-cgq59l css-1ve4pyz css-k008qs">
                  <form
                    className="css-of0vry css-cgq59l css-k008qs"
                    data-private="true"
                  >
                    <input
                      className="css-96ud0v undefined"
                      placeholder="Full Name"
                      id="register-name"
                      required=""
                      onChange={inputChanged}
                    />
                    <label className="css-1dv1kvn" htmlFor="register-name">
                      Full Name
                    </label>
                    <input
                      className="css-96ud0v undefined"
                      placeholder="Email/Phone"
                      id="email-phone-signup"
                      required=""
                      onChange={inputChanged}
                    />
                    <label className="css-1dv1kvn" htmlFor="register-email">
                      Email
                    </label>
                    <input
                      autoComplete="register-password"
                      className="css-96ud0v undefined"
                      placeholder="Password"
                      type="password"
                      id="register-password"
                      required=""
                      onChange={inputChanged}
                    />
                    <label className="css-1dv1kvn" htmlFor="register-password">
                      Password
                    </label>
                    <button
                      className="css-1uttnpt"
                      type="submit"
                      onClick={(event) => {
                        validateEmail(
                          document.getElementById("email-phone-signup").value,
                          event
                        );
                      }}
                    >
                      Sign up
                    </button>
                  </form>
                </div>
                <div className="css-zcxndt css-1tyndxa css-k008qs">
                  <p className="css-2lqkcv">
                    By signing up, you agree to our
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener
                                noreferrer"
                    >
                      terms of service
                    </a>
                  </p>
                </div>
                <div className="css-zcxndt css-1tyndxa css-k008qs">
                  <button className="css-18056rf">Continue as guest</button>
                </div>
              </div>
              <a className="css-1aoji92">
                Already have an account?{" "}
                <span className="css-1081t4c" onClick={showLogin}>
                  Sign In
                </span>
              </a>
            </div>
            <div className="css-1x9jn5u css-sh891t">
              <div className="css-3wr1ll">
                <div className="css-noy1t9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                  >
                    <g fill="#ffffff">
                      <path
                        d="M43 45h-.2a1 1 0 0
                                    1-.8-1.2c.3-1.2.5-2.5.7-3.8s.3-2.2.4-3.1v-.4a4.6
                                    4.6 0 0 0 0-1.9h-.2a29.5 29.5 0 0
                                    0-5.9-3.2
                                    39.6 39.6 0 0 0-7.1-2.4 1.6 1.6 0 0
                                    1-.7-.3
                                    1.5 1.5 0 0 1-.4-.7 16.6 16.6 0 0
                                    1-.8-4.3c-.2-2.1-.2-4.2-.3-5.7a2.2 2.2 0
                                    0
                                    0-2.3-2.2 1.8 1.8 0 0 0-1.3.6 3.5 3.5 0
                                    0
                                    0-.6 2.2l.2 20.5v.6l-.5.3a1.1 1.1 0 0
                                    1-1.2-.1 5.3 5.3 0 0
                                    1-1.6-1.4l-.4-.4a7.6
                                    7.6 0 0 0-5.4-2.2l-1.4.3a1.9 1.9 0 0
                                    0-.8.6c.4.6 1.7 2.3 6 6.5a1 1 0 1 1-1.4
                                    1.4c-6.9-6.8-6.8-7.7-6.8-8.1v-.2h.1a3.9
                                    3.9
                                    0 0 1 2-2 5.8 5.8 0 0 1 2.2-.4 9.7 9.7 0
                                    0 1
                                    6.9 2.8l.3.3-.2-18.4a5.4 5.4 0 0 1
                                    1.1-3.7
                                    3.8 3.8 0 0 1 2.7-1.2 3.9 3.9 0 0 1 3.8
                                    2.1
                                    5.2 5.2 0 0 1 .6 2.1c0 1.5.1 3.5.3
                                    5.5a16.7
                                    16.7 0 0 0 .6 3.7 41.5 41.5 0 0 1 7.4
                                    2.4
                                    31.2 31.2 0 0 1 6.3 3.5l.6.6a4.8 4.8 0 0
                                    1
                                    .4 3.3v.4c-.1.9-.2 1.9-.4 3.2s-.5 2.6-.8
                                    3.9a1 1 0 0 1-1.1.5z"
                      ></path>
                      <rect
                        x="1.2"
                        y=".8"
                        width="6.4"
                        height="6.38"
                        rx="1"
                        ry="1"
                      ></rect>
                      <rect
                        x="9.7"
                        y=".8"
                        width="6.4"
                        height="6.38"
                        rx="1"
                        ry="1"
                      ></rect>
                      <rect
                        x="18.2"
                        y=".8"
                        width="6.4"
                        height="6.38"
                        rx="1"
                        ry="1"
                      ></rect>
                      <rect
                        x="1.2"
                        y="9.3"
                        width="6.4"
                        height="6.38"
                        rx="1"
                        ry="1"
                      ></rect>
                      <rect
                        x="9.7"
                        y="9.3"
                        width="6.4"
                        height="6.38"
                        rx="1"
                        ry="1"
                      ></rect>
                      <rect
                        x="18.2"
                        y="9.3"
                        width="6.4"
                        height="6.38"
                        rx="1"
                        ry="1"
                      ></rect>
                    </g>
                  </svg>
                  <div className="css-1xw37d">
                    <h3 className="css-3dkxyb">Choose your product</h3>
                    <p className="css-1txbmir">from our wide variety</p>
                  </div>
                </div>
                <div className="css-noy1t9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                  >
                    <g fill="#ffffff">
                      <path
                        d="M43.3 45.4h-40a2 2 0 0 1-2-2V3.3a2
                                    2 0 0
                                    1 2-2h30.1a3.9 3.9 0 0 1 2.4.9l8.5
                                    7.8a3.6
                                    3.6 0 0 1 1.1 2.4v31a2 2 0 0 1-2.1
                                    2zM3.3
                                    3.3v40.1h40V12.5a1.7 1.7 0 0
                                    0-.4-.9l-8.5-7.9a2 2 0 0 0-1.1-.4z"
                      ></path>
                      <path
                        d="M32.1 17.2H15.7a2 2 0 0 1-2-2V2.3a1
                                    1 0 0
                                    1 2 0v12.9h16.4V2.3a1 1 0 1 1 2 0v12.9a2
                                    2 0
                                    0 1-2 2zM9.3 44.7a1 1 0 0 1-1-1V25.4a2 2
                                    0 0
                                    1 2-2h26a2 2 0 0 1 2 2v18.3a1 1 0 0 1-2
                                    0V25.4h-26v18.3a1 1 0 0 1-1 1z"
                      ></path>
                      <path
                        d="M27.7 12.2a1 1 0 0 1-1-1v-3h-5.4a1
                                    1 0 0
                                    1 0-2h7.3v5a1 1 0 0 1-.9 1zM30.3
                                    32.4H15.8a1
                                    1 0 1 1 0-2h14.5a1 1 0 0 1 0 2zM30.3
                                    38.5H15.8a1 1 0 0 1 0-2h14.5a1 1 0 0 1 0
                                    2z"
                      ></path>
                    </g>
                  </svg>
                  <div className="css-1xw37d">
                    <h3 className="css-3dkxyb">Save your favourites</h3>
                    <p className="css-1txbmir">in wishlist or cart</p>
                  </div>
                </div>
                <div className="css-noy1t9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                  >
                    <g fill="#ffffff">
                      <path
                        d="M28.5 31.9l-.9-.2-4.3-2.3a1.2 1.2 0
                                    0
                                    0-.9 0l-4.3 2.2A1.5 1.5 0 0 1 16
                                    30l.8-4.8a1.2 1.2 0 0 0-.3-.8L13 21a1.5
                                    1.5
                                    0 0 1 .9-2.6l4.8-.7a1.2 1.2 0 0 0
                                    .7-.5l2.1-4.3A1.5 1.5 0 0 1 23 12a1.5
                                    1.5 0
                                    0 1 1.4 1l2.1 4.3a1.2 1.2 0 0 0
                                    .7.5l4.8.7a1.5 1.5 0 0 1 .8 2.6l-3.5
                                    3.4a1.2
                                    1.2 0 0 0-.3.8l.8 4.8a1.5 1.5 0 0 1-.6
                                    1.6zM23 27.3a3 3 0 0 1 1.4.3l3.3
                                    1.8-.6-3.7A3.2 3.2 0 0 1 28
                                    23l2.7-2.6-3.7-.6a3.2 3.2 0 0
                                    1-2.2-1.6L23
                                    14.8l-1.7 3.4a3.2 3.2 0 0 1-2.3
                                    1.6l-3.7.5L18 23a3.2 3.2 0 0 1 .9
                                    2.6l-.6
                                    3.7 3.3-1.8a3 3 0 0 1 1.4-.2z"
                      ></path>
                      <path
                        d="M23 45.4a2.7 2.7 0 0
                                    1-2.1-1l-1.4-1.7a1.7
                                    1.7 0 0 0-1.9-.4l-2 .9a2.6 2.6 0 0
                                    1-3.8-1.8l-.5-2.1a1.7 1.7 0 0
                                    0-1.5-1.2H7.6A2.6 2.6 0 0 1 5
                                    34.6l.5-2.1a1.7 1.7 0 0
                                    0-.9-1.8l-2-1a2.6
                                    2.6 0 0 1-.9-4.1L3.1 24a1.7 1.7 0 0 0
                                    0-2l-1.4-1.7a2.6 2.6 0 0 1
                                    .9-4.1l2-1a1.7
                                    1.7 0 0 0 .9-1.8L5 11.3A2.6 2.6 0 0 1
                                    7.6
                                    8h2.2a1.7 1.7 0 0 0 1.5-1.2l.5-2.1a2.6
                                    2.6 0
                                    0 1 3.8-1.8l2 .9a1.7 1.7 0 0 0
                                    1.9-.4l1.4-1.7a2.7 2.7 0 0 1 4.2 0l1.4
                                    1.7a1.7 1.7 0 0 0 1.9.4l2-.9a2.6 2.6 0 0
                                    1
                                    3.8 1.8l.5 2.1A1.7 1.7 0 0 0 36.2
                                    8h2.2a2.6
                                    2.6 0 0 1 2.6 3.3l-.5 2.1a1.7 1.7 0 0 0
                                    .9
                                    1.8l2 1a2.6 2.6 0 0 1 .9 4.1L42.9 22a1.7
                                    1.7
                                    0 0 0 0 2l1.4 1.7a2.6 2.6 0 0 1-.9
                                    4.1l-2
                                    1a1.7 1.7 0 0 0-.9 1.8l.5 2.1a2.6 2.6 0
                                    0
                                    1-2.6 3.3h-2.2a1.7 1.7 0 0 0-1.5 1.2l-.5
                                    2.1a2.6 2.6 0 0 1-3.8 1.8l-2-.9a1.7 1.7
                                    0 0
                                    0-1.9.4l-1.4 1.7a2.7 2.7 0 0 1-2.1
                                    1.1zM18.2
                                    40a3.8 3.8 0 0 1 2.9 1.3l1.4 1.7a.6.6 0
                                    0 0
                                    1 0l1.4-1.7a3.8 3.8 0 0 1 4.4-1l2
                                    .9h.6a.7.7
                                    0 0 0 .3-.5l.5-2.1a3.8 3.8 0 0 1
                                    3.5-2.8h2.2l.5-.2a.7.7 0 0 0
                                    .1-.6l-.5-2.1a3.8 3.8 0 0 1
                                    2-4.1l2-1a.6.6 0
                                    0 0 .2-1l-1.4-1.7a3.8 3.8 0 0 1
                                    0-4.5l1.4-1.6a.6.6 0 0 0-.2-1l-2-1a3.8
                                    3.8 0
                                    0 1-2-4.1l.5-2.1a.7.7 0 0
                                    0-.1-.6l-.5-.2h-2.2a3.8 3.8 0 0
                                    1-3.5-2.8l-.5-2.1a.7.7 0 0
                                    0-.3-.5h-.6l-2
                                    .9a3.8 3.8 0 0 1-4.4-1l-1.4-1.6a.6.6 0 0
                                    0-1
                                    0l-1.4 1.7a3.8 3.8 0 0 1-4.4
                                    1l-2-.9h-.6a.7.7 0 0 0-.3.5l-.5 2.1a3.8
                                    3.8
                                    0 0 1-3.5 2.8H7.6l-.5.2a.7.7 0 0
                                    0-.1.6l.5
                                    2.1a3.8 3.8 0 0 1-2 4.1l-2 1a.6.6 0 0
                                    0-.2
                                    1l1.4 1.7a3.8 3.8 0 0 1 0 4.5L3.3
                                    27a.6.6 0
                                    0 0 .2 1l2 1a3.8 3.8 0 0 1 2 4.1l-.5
                                    2a.7.7
                                    0 0 0 .1.6l.5.2h2.2a3.8 3.8 0 0 1 3.5
                                    2.8l.5
                                    2.1a.7.7 0 0 0 .3.5h.6l2-.9a3.5 3.5 0 0
                                    1
                                    1.5-.4z"
                      ></path>
                    </g>
                  </svg>
                  <div className="css-1xw37d">
                    <h3 className="css-3dkxyb">Get rewards in your wallet</h3>
                    <p className="css-1txbmir">and save more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="css-zcxndt css-1tyndxa css-158z90c css-k008qs"
          id="login-component-container"
        >
          <div className="css-l8s3ml css-1h3wlde css-jp51mf">
            <div className="css-1ruxp1v">
              <h3 className="css-my2f48">Login</h3>
              <div className="css-cgq59l css-1ttuzry css-k008qs">
                <div className="css-cgq59l css-vbxhai css-k008qs">
                  <div
                    className="css-of0vry css-cgq59l css-1imlk2a
                            css-k008qs"
                  >
                    <div
                      className="css-zcxndt css-1tyndxa css-uewl2b
                                css-k008qs"
                    >
                      <div className="css-u6ywvl">
                        <button className="css-ueoi01">
                          <img
                            className="css-l49lrr"
                            src="https://s3.ca-central-1.amazonaws.com/logojoy/images/facebook@2x.png"
                            alt=""
                            role="presentation"
                          />
                        </button>
                      </div>
                      <div className="css-u6ywvl">
                        <button className="css-i09m3c">
                          <img
                            className="css-l49lrr"
                            src="https://s3.ca-central-1.amazonaws.com/logojoy/images/google-plus.png"
                            alt=""
                            role="presentation"
                          />
                        </button>
                      </div>
                      <div className="css-u6ywvl">
                        <button className="css-e48n1r">
                          <img
                            className="css-deaxn8"
                            src="https://s3.ca-central-1.amazonaws.com/logojoy/images/twitter@2x.png"
                            alt=""
                            role="presentation"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="css-zcxndt css-1tyndxa css-k008qs">
                      <div
                        className="css-of0vry css-98hmgt
                                    css-k008qs"
                      ></div>
                      <span className="css-mejexs css-k008qs">or</span>
                      <div
                        className="css-of0vry css-1e7ea2v
                                    css-k008qs"
                      ></div>
                    </div>
                  </div>
                </div>
                <form
                  className="css-of0vry css-cgq59l css-k008qs"
                  data-private="true"
                >
                  <input
                    className="css-96ud0v undefined"
                    placeholder="Email/Phone"
                    id="email-phone-login"
                    onChange={inputChanged}
                  />
                  <label className="css-1dv1kvn" htmlFor="login-email">
                    Email/Phone
                  </label>
                  <input
                    autoComplete="login-password"
                    className="css-96ud0v"
                    placeholder="Password"
                    type="password"
                    id="login-password"
                    onChange={inputChanged}
                  />
                  <label className="css-1dv1kvn" htmlFor="login-password">
                    Login
                  </label>
                  <button
                    className="css-1uttnpt"
                    type="submit"
                    onClick={(event) => {
                      validateEmail(
                        document.getElementById("email-phone-login").value,
                        event
                      );
                    }}
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="css-zcxndt css-1tyndxa css-k008qs">
                <a onClick={showForgotPassword} className="css-1lr543i">
                  Forgot password?
                </a>
                <a className="css-1lr543i" onClick={showSignUp}>
                  Create an Account
                </a>
              </div>
            </div>
            <div className="css-a04zfm">
              By signing up, you agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                terms of service
              </a>
            </div>
          </div>
        </div>

        <div
          className="css-zcxndt css-1tyndxa css-158z90c css-k008qs"
          id="forgot-password-component"
        >
          <div className="css-l8s3ml css-1h3wlde css-23ndgy">
            <div className="css-1ruxp1v">
              <h3 className="css-ftnw2w">Send Reset Email</h3>
              <p className="css-11qftio">
                Enter your account email/phone below to recieve reset
                instructions
              </p>
              <div
                className="css-cgq59l
                css-1ttuzry css-k008qs"
              >
                <form
                  className="css-of0vry css-cgq59l
                    css-k008qs"
                  data-private="true"
                >
                  <input
                    className="css-96ud0v
                        undefined"
                    placeholder="Email"
                    type="email"
                    id="reset-email"
                    onChange={inputChanged}
                  />
                  <label className="css-1dv1kvn" htmlFor="reset-email">
                    Email
                  </label>
                  <button className="css-1uttnpt">Reset Password</button>
                </form>
              </div>
              <div
                className="css-cgq59l
                css-zcxndt css-k008qs"
              >
                <a onClick={showLogin} className="css-1bzitn3">
                  Back to login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
