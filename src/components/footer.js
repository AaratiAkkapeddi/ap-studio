import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ data }) => {
   console.log(data)
	function marquee(){
	  let speed = 0.2
	  const parentSelector = document.querySelector('.marquee');
	  if(parentSelector){
		const clone = parentSelector.innerHTML;
      const firstElement = parentSelector.children[0];
      let i = 0;
      let n = Math.floor(window.innerWidth/firstElement.clientWidth)
      parentSelector.insertAdjacentHTML('beforeend', clone);
      parentSelector.insertAdjacentHTML('beforeend', clone);
      for (var x = 100 - 1; x >= 0; x--) {
        parentSelector.insertAdjacentHTML('beforeend', clone);
      }

      setInterval(function () {
        firstElement.style.marginLeft = `-${i}px`;
        if (i > (firstElement.clientWidth * 90)) {
          i = 0;
        }
        i = i + speed;
      }, 0);

	  }
      
	}
	if(typeof(document) != "undefined"){
		setTimeout(marquee,800)
	}
	return (
		<>
		<div className="marquee"><h1>&nbsp;&nbsp;&nbsp; AP Studio, Inc &nbsp;&nbsp;&nbsp; AP Studio, New York &nbsp;&nbsp;&nbsp;AP Studio, Paris &nbsp;&nbsp;&nbsp;AP Studio, Los Angeles</h1></div>
	    <footer>
	      <div>
	      	<a href="/">NEWSLETTER</a>
	      </div>
	      <div>
	      	<a href={`${data?.info?.edges[0].node.frontmatter.instagram}`}>INSTAGRAM</a><br/>
	      	<a href={`${data?.info?.edges[0].node.frontmatter.models}`}>MODELS.COM</a>
	      </div>
	      <div>
	      	<a href={`mailto:${data?.info?.edges[0].node.frontmatter.email}`}>GENERAL INQUIRIES</a><br/>
	      	<a href={`mailto:${data?.info?.edges[0].node.frontmatter.email}`}>{data?.info?.edges[0].node.frontmatter.email}</a>
	      </div>
	      <div>
	      	<a href="/cookiepolicy">COOKIES & DATA<br/>
	      	POLICY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
	      </div>
	    </footer>
	    </>
	  )
}

export default Footer
