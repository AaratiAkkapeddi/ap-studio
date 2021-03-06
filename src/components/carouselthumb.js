import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const CarouselThumb = ({imageurl, videourl, name}) => {

	if(videourl && videourl.length > 0){
		return (
			    <div className="thumb-item">
				    <video muted loop autoPlay>
				      <source src={videourl} type="video/mp4"/>
				    </video>
			    </div>
			  )
	} else if(imageurl){
		let imgsizes = imageurl + "/-/resize/x480/ 480w, " + imageurl + "/-/resize/x1900/ 800w"
		return (
			    <div className="thumb-item">
			      <img src={imageurl+"/-/resize/x480/"} srcSet={imgsizes} sizes="(max-width: 600px) 480px,
            800px" alt={name}/>
			    </div>
			  )
	} else{
		return(
			<div></div>
		)
	}
	
}

export default CarouselThumb