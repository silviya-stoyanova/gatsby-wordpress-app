import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MainNav from "./main-nav"

const Header = ({ details }) => (
  <header>
    <Link to="/" className="wrap">
      <h1 className="site-title">{details.name}</h1>
      <p className="site-description">{details.description + " 😎"}</p>
    </Link>

    <MainNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
