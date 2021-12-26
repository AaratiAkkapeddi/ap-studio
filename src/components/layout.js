import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ location, title, children, data }) => {


  return (
    <div className="global-wrapper" >
      <Header location={location}></Header>
      <main>{children}</main>
      <Footer data={data}></Footer>
    </div>
  )
}

export default Layout
