import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {

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
		<div className="marquee"><h1>&nbsp; AP Studio, Inc AP Studio, Paris AP Studio, Los Angeles</h1></div>
	    <footer>
	      <div>
	      	<a href="/">NEWSLETTER</a>
	      </div>
	      <div>
	      	<a href="/">INSTAGRAM</a><br/>
	      	<a href="/">MODELS.COM</a>
	      </div>
	      <div>
	      	<a href="mailto:emaill@address.com">GENERAL INQUIRIES</a><br/>
	      	<a href="/">Email@Address.com</a>
	      </div>
	      <div>
	      	<a href="/cookies">COOKIES & DATA<br/>
	      	POLICY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
	      </div>
	    </footer>
	    </>
	  )
}

export default Footer