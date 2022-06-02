import { Link } from "gatsby"
import React from "react"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <div className="page">
        <nav className="page__menu page__custom-settings menu">
          <ul className="menu__list r-list">
            <li className="menu__group">
              <Link to="/" className="menu__link r-link text-underlined">
                Reel
              </Link>
            </li>
            <li className="menu__group">
              <Link to="/aboutme" className="menu__link r-link text-underlined">
                About Me
              </Link>
            </li>
            <li className="menu__group">
              <Link
                to="/portfolio"
                className="menu__link r-link text-underlined"
              >
                Portfolio
              </Link>
            </li>
            <li className="menu__group">
              <Link
                to="/contactme"
                className="menu__link r-link text-underlined"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="linktr"></div>
    </div>
  )
}

export default NavBar
