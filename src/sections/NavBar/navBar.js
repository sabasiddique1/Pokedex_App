
import React from "react";
import "./navBar.css";
import pokeballicon from "../../assets/images/pokeball-icon.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
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
      <nav>
        <div className="block">
         <Link to="/pokemon"> <img className="block-img" src={pokeballicon} alt="pokeball icon" /></Link>
        </div>
        <div>
          <ul className="data-ul">
            {navRoutes.map(({ name, route }, index) => {
              const isActive = location.pathname === route;
              return (
                <Link to={route} key={index}>
                  <li className={isActive ? "data-li active" : "data-li"}>
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
