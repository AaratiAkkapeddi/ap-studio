import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({location}) => {
	function mobileClose(){
		let headers = document.querySelectorAll('.site-header');
		for (var i = headers.length - 1; i >= 0; i--) {
			headers[i].classList.remove("open")
		}
	}
	function mobileOpen(){
		let headers = document.querySelectorAll('.site-header');
		for (var i = headers.length - 1; i >= 0; i--) {
			headers[i].classList.add("open")
		}
	}
	let currentPath = location.pathname
	return (
		<>
		<div className="mobile-menu">
		 	<a href="/"><h1>AP Studio, Inc</h1></a>
			<h1 onClick={mobileOpen} className="mobile-trigger">Menu</h1>
		</div>
	    <div className={`${location.pathname == "/" ? "white ": ""}site-header`}>
	      <a href="/">AP Studio, Inc</a>
	      <svg onClick={mobileClose} className="mobile-close" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<line x1="26.9393" y1="26.0607" x2="1.93934" y2="1.06066" stroke="white" strokeWidth="3"/>
			<line y1="-1.5" x2="35.3553" y2="-1.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 25)" stroke="white" strokeWidth="3"/>
			</svg>

	      <nav>
	         <ul>
	            <li><a className={`${currentPath.includes("/projects") ? "current " : ""} `} href="/projects">Projects</a></li>
	            <li className="desktop-only"><a className={` ${currentPath.includes("/artists&clients") || currentPath.includes("/clients/") ? "current " : ""} `} href="/artists&clients">Clients</a></li>
	            <li className="desktop-only"><a className={` ${currentPath.includes("/artists&clients") || currentPath.includes("/artists/") ? "current " : ""} `} href="/artists&clients">Artists</a></li>
	            <li className="mobile-only"><a className={` ${currentPath.includes("/artists&clients") || currentPath.includes("/clients/") ? "current " : ""} `} href="/clients">Clients</a></li>
	            <li className="mobile-only"><a className={` ${currentPath.includes("/artists&clients") || currentPath.includes("/artists/") ? "current " : ""} `} href="/artists">Artists</a></li>
	            <li><a className={`${currentPath.includes("/news") ? "current " : ""} `} href="/news">News</a></li>
	            <li><a className={`${currentPath.includes("/info") || currentPath.includes("/cookiepolicy") ? "current " : ""} `} href="/info">Info</a></li>
	         </ul>
	      </nav>
	    </div>
	    </>
	  )
}

export default Header