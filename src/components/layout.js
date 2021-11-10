import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ location, title, children }) => {


  return (
    <div className="global-wrapper" >
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
