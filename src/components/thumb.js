import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Thumb = ({imageurl, videourl}) => {

	if(videourl){
		return (
			    <div className="thumb-item">
				    <video muted loop autoPlay>
				      <source src={videourl} type="video/mp4"/>
				    </video>
			    </div>
			  )
	} else if(imageurl){
		return (
			    <div className="thumb-item">
			      <img src={imageurl}/>
			    </div>
			  )
	} else{
		return(
			<div></div>
		)
	}
	
}

export default Thumb