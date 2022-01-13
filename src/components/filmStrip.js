import * as React from "react"
import Thumb from "../components/thumb"
import ReactMarkdown from 'react-markdown'
import { StaticImage } from "gatsby-plugin-image"

const FilmStrip = ({hpText, projects}) => {
 if(hpText){
 	projects = projects.slice(0, 25)
 }
 function imageColumn(){
    document.querySelector(".film-strip").classList.remove("text-column")
  
    document.querySelector("#text-toggle").classList.remove("on")
    document.querySelector("#image-toggle").classList.add("on")
  }
  function textColumn(){
 
    document.querySelector(".film-strip").classList.add("text-column")
    document.querySelector("#image-toggle").classList.remove("on")
    document.querySelector("#text-toggle").classList.add("on")
  }
  function recent(){
    document.querySelector("#older").classList.remove("on")
    document.querySelector("#recent").classList.add("on")
    let items = document.querySelectorAll(".film-item")
    for (var i = items.length - 1; i >= 0; i--) {

      items[i].style.order = Math.abs(i+2)
    }
    
  }
  function older(){
    document.querySelector("#recent").classList.remove("on")
    document.querySelector("#older").classList.add("on")
    let items = document.querySelectorAll(".film-item")
    for (var i = items.length - 1; i >= 0; i--) {

      items[i].style.order = "-"+Math.abs(i+2)
    }
  }
	return (
		<>
		<p className="filmy" id="layout-toggle">
	       <svg id="image-toggle" className="on" onClick={imageColumn} width="40" height="40" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <rect width="12.5" height="23.0705" fill="#111F4F"/>
	        <rect y="26.9294" width="12.5" height="23.0705" />
	        <rect x="16.5" width="11.6667" height="23.0705" />
	        <rect x="16.5" y="26.9294" width="11.6667" height="23.0705" />
	        <rect x="32.166" width="12.5" height="23.0705" />
	        <rect x="32.166" y="26.9294" width="12.5" height="23.0705" />
	        </svg>
	        <svg id="text-toggle" onClick={textColumn} width="40" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <path d="M23.6042 50V6.71429H40V0H0V6.71429H16.3958V50H23.6042Z"/>
	        </svg>
	      </p>
	      <div className="film-strip">
	        <div style={{"order":"-1000"}} className="mini-overview">
	          {hpText ?
	          <>
		          <ReactMarkdown>{hpText}</ReactMarkdown>
		          <a className="more-info" href="/info">More Info</a>
	          </> :
	          <div> 
	          	<div id="recent" onClick={recent} className="time-toggle on">Recent</div>
        		<div id="older" onClick={older} className="time-toggle">Older</div>
        	  </div>
	      	}
	        </div>
	        <div id="text-projects">
	        {projects.map((project, index) => {
	              if(!project.node.frontmatter.draft){
	                const title = project.node.frontmatter.campaign_title
	   
	                return (
	                
	                  <a  className={`text-item`} key={index} href={project.node.fields.slug}>
	                    <h1> {project.node.frontmatter.campaign_title}</h1>
	                    <div className="hover-img">
	                     <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
	                    </div>
	                    <div className="hover-text">
	                     <p> <ReactMarkdown>{project.node.frontmatter.notes}</ReactMarkdown></p>
	                    </div>
	                  </a>
	       
	                )

	              }
	          })}
	        </div>
	            {projects.map((project, index) => {
	              if(!project.node.frontmatter.draft){
	                const title = project.node.frontmatter.campaign_title

	                return (
	                
	                  <a className={`${project.node.frontmatter.thumb?.size} film-item`} key={index} href={project.node.fields.slug}>
	                    <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
	                  	<div className="opacity-title">{project.node.frontmatter.campaign_title}</div>
	                  </a>
	       
	                )

	              }
	          })}
	            { hpText &&
		          <div className="mini-overview">
		            <div id='meta-text'></div>
		            <a className="more-info" href="/projects">View All Projects</a>
		          </div>
		      }
	      </div>
	    </>
	  )
}

export default FilmStrip