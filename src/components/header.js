import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
	return (
	    <div className="site-header">
	      <a href="/">AP Studio, Inc</a>
	      <nav>
	         <ul>
	            <li><a href="/projects">Projects</a></li>
	            <li><a href="/artists&clients">Clients</a></li>
	            <li><a href="/artists&clients">Artists</a></li>
	            <li><a href="/blog">News</a></li>
	            <li><a href="/info">Info</a></li>
	         </ul>
	      </nav>
	    </div>
	  )
}

export default Header