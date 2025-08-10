
import React, { useState } from "react";
import "./navBar.css";
import pokeballicon from "../../assets/images/pokeball-icon.png";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navRoutes = [
    {
      name: "Homepage",
      route: "/pokemon",
    },
    {
      name: "Pokemon",
      route: "/pokemon/cloyster",
    },
    {
      name: "Favorites",
      route: "/favorites",
    },
  ];

  const location = useLocation();

  return (
    <div className="navbar">
      <nav className="nav-grid">
        <Link to="/pokemon" className="logo" onClick={() => setIsSidebarOpen(false)}>
          <img className="block-img" src={pokeballicon} alt="pokeball icon" />
        </Link>

        <ul className="nav-links">
          {navRoutes.map(({ name, route }, index) => {
            const isActive = location.pathname === route;
            return (
              <li key={index} className={isActive ? "data-li active" : "data-li"}>
                <Link to={route}>{name}</Link>
              </li>
            );
          })}
        </ul>

        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/pokemon" onClick={() => setIsSidebarOpen(false)}>
            <img className="block-img" src={pokeballicon} alt="pokeball icon" />
          </Link>
          <button
            className="close-btn"
            aria-label="Close menu"
            onClick={() => setIsSidebarOpen(false)}
          >
            ×
          </button>
        </div>
        <ul className="sidebar-links">
          {navRoutes.map(({ name, route }, index) => {
            const isActive = location.pathname === route;
            return (
              <li key={index} className={isActive ? "data-li active" : "data-li"}>
                <Link to={route} onClick={() => setIsSidebarOpen(false)}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "open" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnHover />
    </div>
  );
};

export default NavBar;
