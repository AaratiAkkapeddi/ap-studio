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
	      <a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1214.36 261.58"><defs></defs><g><g><path d="M1214.36,120.64c-2.39-29.86-8.06-56.14-41.51-56.14-27.17,0-48.08,20.6-48.08,77.34s20.91,77.34,48.08,77.34c35.24-.6,40.91-31.05,41.51-58.83l-26.58-.89c-2.09,15.53-2.69,32.85-13.14,32.85-8.06,0-11.05-9-11.05-46.59,0-47.18,1.8-56.14,9.56-56.14,7.46,0,9.55,8.66,10.15,32ZM1019.9,216.79h34.64V98.84a15.65,15.65,0,0,1,11.65-5.67c6,0,9.85,3.58,9.85,14.93V216.79h34.64V95.56c0-19.71-7.76-31.06-24.19-31.06-12.84,0-23.29,8.36-31.35,16.72h-.6V66.89H1019.9Zm-56.43,0h38.82V4.18H963.47ZM853.82,261.58h15.53l23-47.77V178H853.53v38.82h14.33ZM804.14,141.84c0,45.69-2.69,52.26-10.75,52.26s-10.75-6.57-10.75-52.26,2.68-52.26,10.75-52.26,10.75,6.57,10.75,52.26m37,0c0-56.74-20.91-77.34-47.78-77.34s-47.78,20.6-47.78,77.34,20.9,77.34,47.78,77.34,47.78-20.6,47.78-77.34M697,38.82h34.64V4.18H697Zm0,178h34.64V66.89H697Zm-51.75-27.47c-1.79,2.69-5.37,4.78-10.45,4.78-10.15,0-11.94-6.87-11.94-52.86,0-47.18,2.68-53.45,12.84-53.45,4.47,0,8.06,2.09,9.55,4.78Zm1.49,27.47h33.15V4.18H645.28V75.25h-.6A26.74,26.74,0,0,0,622.89,64.5c-25.39,0-37,27.47-37,77,0,49,9,77.64,34,77.64,13.74,0,19.41-6.57,26.28-14.33h.59Zm-76-149.9H536.11v118a15.65,15.65,0,0,1-11.64,5.67c-6,0-9.86-3.58-9.86-14.93V66.89H480V188.13c0,18.81,9.86,31.05,25.68,31.05,11.65,0,21.8-8.36,29.87-16.72h.59v14.33h34.64ZM397.14,93.76h16.13v97.35c0,20.61,13.43,28.07,29,28.07,7.17,0,19.11-.3,29.56-3V188.13c-2.09,0-5.67.59-9.85.59-12.54,0-13.74-7.76-13.74-12.84V93.76h21.5V66.89H447.91V12.24H413.27V66.89H397.14ZM289.79,155.28c0,29.26,8.36,65.69,49.87,65.69,34.94,0,53.45-26,53.45-58.52,0-61.82-70.47-74.06-70.47-110.19,0-11.65,5.37-19.41,14.63-19.41,15.53,0,15.53,20,15.53,31.95h34.64C386.54,26.58,373.1,0,338.17,0,305.32,0,288,26,288,57.93c0,63,70.47,71.67,70.47,109.59,0,8.66-4.48,20.61-17.32,20.61-16.72,0-16.72-20.91-16.72-32.85ZM123.17,216.79H162v-85.1h15.53c36.43,0,51.36-25.68,51.36-63.9,0-46-23-63.61-66.89-63.61H123.17ZM162.29,37h3c12.84,0,24.78.89,24.78,31.65,0,25.68-8.66,31.95-24.48,31.95h-3.29ZM0,216.79H32.55l5.37-47.18H69.28L75,216.79h37.33L86,4.18H29.86Zm66-78.23H41.81L54.05,37h.6Z"/></g></g></svg></a>
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