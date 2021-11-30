import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Top = () => {
	function backToTop(){
	    window?.scrollTo({left:0, top:0,behavior:"smooth"});
	  }
	return (
	   <a onClick={backToTop}>Top</a>
	  )
}

export default Top