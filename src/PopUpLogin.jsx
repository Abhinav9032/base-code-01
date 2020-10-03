import React from "react";

function PopUpLogin() {
  return (
    <div>
      <div className="css-l8s3ml css-1h3wlde css-jp51mf" id="pop-up-login">
        <div className="css-1ruxp1v">
          <form
            className="css-of0vry css-cgq59l css-k008qs"
            data-private="true"
          >
            <input
              className="css-96ud0v undefined"
              placeholder="Email/Phone"
              id="email-phone-login"
            />
            <label className="css-1dv1kvn" for="login-email">
              Email/Phone
            </label>
            <input
              autocomplete="login-password"
              className="css-96ud0v"
              placeholder="Password"
              type="password"
              id="login-password"
            />
            <label className="css-1dv1kvn" for="login-password">
              Login
            </label>
            <button className="css-1uttnpt" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="css-zcxndt css-1tyndxa css-k008qs">
          <a className="css-1lr543i">Sign Up!</a>
          &nbsp;
          <a className="css-1lr543i">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default PopUpLogin;
