import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import { Link } from "react-router-dom";

function NavbarCenter() {
  /*********************/
  /*   Menu Sticky     */
  /*********************/
  const [navSticky, setNavSticky] = useState(false);
  const [displayToggle, setDisplayToggle] = useState(false);

  function windowScroll() {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  }

  window.addEventListener("scroll", windowScroll);

  function toggleMenu() {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  }

  return (
    <>
      {/* <nav id="topnav" className="defaultscroll is-sticky"> */}
      <nav
        id="topnav"
        className={
          navSticky
            ? "defaultScroll is-sticky nav-sticky"
            : "defaultScroll is-sticky"
        }
      >
        <div className="container relative">
          {/* Logo container*/}
          <a className="logo" href="#">
            <span className="inline-block dark:hidden">
              <img src={logoDark} className="l-dark" height={24} alt="" />
              <img src={logoLight} className="l-light" height={24} alt="" />
            </span>
            <img
              src={logoLight}
              height={24}
              className="hidden dark:inline-block"
              alt=""
            />
          </a>
          {/* End Logo container*/}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/*Login button Start*/}
          <ul className="buy-button list-none mb-0">
            <li className="inline mb-0">
              <a href="">
                <span className="login-btn-primary">
                  <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">
                    <FeatherIcon icon="settings" className="h-4 w-4" />
                  </span>
                </span>
                {/* <span className="login-btn-light">
                  <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <FeatherIcon icon="settings" className="h-4 w-4" />
                  </span>
                </span> */}
              </a>
            </li>
            <li className="inline ps-1 mb-0">
              <a href="https://1.envato.market/techwind" target="_blank">
                {/* <div className="login-btn-primary">
                  <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">
                    <FeatherIcon icon="shopping-cart" className="h-4 w-4" />
                  </span>
                </div> */}
                <div className="login-btn-light">
                  <span className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700">
                    <FeatherIcon icon="shopping-cart" className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </li>
          </ul>
          {/*Login button End*/}
          <div id="navigation">
            {/* Navigation Menu*/}
            <ul className="navigation-menu nav-light">
              <li>
                <Link to={`/`} className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to={`/gallery`} className="sub-menu-item">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to={`/shows`} className="sub-menu-item">
                  Shows
                </Link>
              </li>
              <li>
                <Link to={`/contact`} className="sub-menu-item">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </nav>
      {/*end header*/}
    </>
  );
}

export default NavbarCenter;
