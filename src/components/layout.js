import * as React from "react"
import {useEffect} from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ location, title, children, data }) => {

  useEffect(() => {
    // Update the document title using the browser API
    if(typeof(document) != `undefined`){
    	setTimeout(function(){
    		document.querySelector(".global-wrapper").classList.remove("loading")
    	}, 500)
    	

    }

  });
  return (
    <div className="global-wrapper child loading" >
      <Header location={location}></Header>
      <main>{children}</main>
      <Footer data={data}></Footer>
    </div>
  )
}

export default Layout
