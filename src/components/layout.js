import React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css"
import "./sass/layout.scss"
import Navbar from "../components/global/Navbar"
import Footer from "../components/global/Footer"


const Layout = ({ children }) => (
  <> 
  <Navbar />
  {children} 
  <Footer />
  </>
  )


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
