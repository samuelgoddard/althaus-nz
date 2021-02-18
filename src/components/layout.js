import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import SmoothScroll from "./SmoothScroll";

import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div className="viewport">
      <div className="fixed z-50 fixed-text-left ml-6 hidden lg:block">
        <span className="text-lg text-white block">Learn Digital. Lead Digital.</span>
      </div>
      {/* <SmoothScroll> */}
        <AnimatePresence exitBeforeEnter initial={false}>
          {children}
        </AnimatePresence>
      {/* </SmoothScroll> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

