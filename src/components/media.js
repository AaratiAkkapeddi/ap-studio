import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Media = ({imageurl, videourl, size}) => {

	if(videourl){
		return (
			   <div className="media-item">
			    <video muted loop autoPlay>
			      <source src={videourl} type="video/mp4"/>
			    </video>
			    </div>
			  )
	} else if(imageurl){
		return (
			    <div className="media-item">
			      <img src={imageurl}/>
			    </div>
			  )
	} else{
		return(
			<div></div>
		)
	}
	
}

export default Media