import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({location}) => {
	let currentPath = location.pathname
	console.log(currentPath)
	return (
	    <div className="site-header">
	      <a href="/">AP Studio, Inc</a>
	      <nav>
	         <ul>
	            <li><a className={`${currentPath.includes("/projects") ? "current " : ""} `} href="/projects">Projects</a></li>
	            <li><a className={`${currentPath.includes("/artists&clients") || currentPath.includes("/clients/") ? "current " : ""} `} href="/artists&clients">Clients</a></li>
	            <li><a className={`${currentPath.includes("/artists&clients") || currentPath.includes("/artists/") ? "current " : ""} `} href="/artists&clients">Artists</a></li>
	            <li><a className={`${currentPath.includes("/news") ? "current " : ""} `} href="/news">News</a></li>
	            <li><a className={`${currentPath.includes("/info") || currentPath.includes("/cookiepolicy") ? "current " : ""} `} href="/info">Info</a></li>
	         </ul>
	      </nav>
	    </div>
	  )
}

export default Header