import * as React from "react"
import PropTypes from "prop-types"

const Header = () => {
  return (
    <header>
      <div className="text-3xl font-bold underline">Beam</div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header
