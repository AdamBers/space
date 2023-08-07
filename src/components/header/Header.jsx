import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import cart from "../../assets/img/cart.svg";

function Header() {
  const [isOpened, setOpened] = useState(false);
  function handleOpen() {
    setOpened(!isOpened);
  }

  isOpened
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
        onClick={() => setOpened(false)}
      />
      <div className="nav">
        <a href="#" className="nav__link text-gradient">
          Home
        </a>
        <a href="#" className="nav__link text-gradient">
          Products
        </a>
        <a href="#" className="nav__link">
          
            <svg
              width="25"
              height="20"
              viewBox="0 0 25 20"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
              className="img-gradient"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                fill="white"
              />
            </svg>
          
        </a>
      </div>
      <div
        className={isOpened ? "burger-active" : "burger"}
        onClick={handleOpen}
      ></div>

      {isOpened && (
        <div className={isOpened ? "modal" : ""}>
          <a href="#" className="nav__link" onClick={handleOpen}>
            Home
          </a>
          <a href="#" className="nav__link" onClick={handleOpen}>
            Products
          </a>
          <a href="#" className="nav__link" onClick={handleOpen}>
            <img src={cart} alt="" />
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
