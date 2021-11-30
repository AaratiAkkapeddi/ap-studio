import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
	return (
	    <div className="site-header">
	      <a href="/">AP Studio, Inc</a>
	      <nav>
	         <ul>
	            <li><a href="">Projects</a></li>
	            <li><a href="">Clients</a></li>
	            <li><a href="">Artists</a></li>
	            <li><a href="">News</a></li>
	            <li><a href="">Info</a></li>
	         </ul>
	      </nav>
	    </div>
	  )
}

export default Header