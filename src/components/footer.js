import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
	return (
	    <footer>
	      <div>
	      	<a href="/">NEWSLETTER</a>
	      </div>
	      <div>
	      	<a href="/">INSTAGRAM</a>
	      	<a href="/">MODELS.COM</a>
	      </div>
	      <div>
	      	<a href="/">GENERAL INQUIRIES</a>
	      	<a href="/">Email@Address.com</a>
	      </div>
	      <div>
	      	<a href="/">COOKIES & DATA</a>
	      	<a href="/">POLICY</a>
	      </div>
	    </footer>
	  )
}

export default Footer