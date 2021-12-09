import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Top = () => {
	function backToTop(){
	    window?.scrollTo({left:0, top:0,behavior:"smooth"});
	  }
	return (
	   <h1><a onClick={backToTop}>Top</a></h1>
	  )
}

export default Top