import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Media = ({imageurl, videourl, size, controls}) => {

	if(videourl && videourl.length > 0){
		return (
			   <div className={`${size == "portrait" ? "portrait" : "landscape"} media-item`}>
			    <video muted loop autoPlay defaultMuted playsinline controls={controls}>
			      <source src={videourl} type="video/mp4"/>
			    </video>
			    </div>
			  )
	} else if(imageurl){
		let imgsizes = imageurl + "/-/resize/x480/ 480w, " + imageurl + "/-/resize/x1900/ 800w"
		return (
			    <div className={`${size == "portrait" ? "portrait" : "landscape"} media-item`}>
			      <img src={imageurl + "/-/resize/x2000/"} srcSet={imgsizes} sizes="(max-width: 600px) 480px,
            800px"/>
			    </div>
			  )
	} else{
		return(
			<div></div>
		)
	}
	
}

export default Media