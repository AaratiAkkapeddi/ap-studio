import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Thumb = ({imageurl, videourl}) => {
	if(videourl){
		return (
			    <video muted loop autoPlay>
			      <source src={videourl} type="video/mp4"/>
			    </video>
			  )
	}else if(imageurl){
		return (
			    <div>
			      <img src={imageurl}/>
			    </div>
			  )
	}else{
		return(
			<div></div>
		)
	}
	
}

export default Thumb