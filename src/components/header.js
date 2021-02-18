import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.inline.svg";

class Header extends React.Component {
  render () {
    return (
      <header className="bg-transparent pt-8 md:pt-12">
        <div className="container lg:px-32">
          <div className="flex flex-wrap items-center">
            
            <Link 
              className={this.props.color === 'black' ? `block text-purple transition duration-500 ease-in-out` : `block text-white transition duration-500 ease-in-out`}
              to="/"
              aria-label="Althaus Logo"
            >
              <div className="mt-px md:mt-0">
                <Logo />
              </div>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
