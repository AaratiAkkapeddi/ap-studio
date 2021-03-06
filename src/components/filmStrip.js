import React, { useState } from 'react';

import Thumb from "../components/thumb"
import ReactMarkdown from 'react-markdown'
import { StaticImage } from "gatsby-plugin-image"

const FilmStrip = ({hpText, projects, clients, mobile}) => {
 if(hpText){
 	projects = projects.slice(0, 25)
 }


   const [reverse, setReverse] = useState(0);

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
  	console.log(reverse)
  	setReverse(0)
    document.querySelector("#older").classList.remove("on")
    document.querySelector("#recent").classList.add("on")
    // let items = document.querySelectorAll(".film-item")
    // for (var i = items.length - 1; i >= 0; i--) {

    //   items[i].style.order = Math.abs(i+2)
    // }
    
  }
  function older(){
  	console.log(reverse)
    document.querySelector("#recent").classList.remove("on")
    document.querySelector("#older").classList.add("on")
    setReverse(1)
    // let items = document.querySelectorAll(".film-item")
    // for (var i = items.length - 1; i >= 0; i--) {

    //   items[i].style.order = "-"+Math.abs(i+2)
    // }
  }
  let projectsReverse = projects.reverse()
	return (
		<>
		
	      <div className={`${mobile ? "mobile-only ":"desktop-only "} film-strip ${hpText ? "" :"text-column "}`}>
	      <div className="film-spacer"></div>
	      <p className={`${hpText ? "" :"projects-page "} filmy`} id="layout-toggle">
	       <svg id="image-toggle" className={`${hpText ? "on ":" "}`} onClick={imageColumn} width="40" height="40" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <rect width="12.5" height="23.0705" fill="#111F4F"/>
	        <rect y="26.9294" width="12.5" height="23.0705" />
	        <rect x="16.5" width="11.6667" height="23.0705" />
	        <rect x="16.5" y="26.9294" width="11.6667" height="23.0705" />
	        <rect x="32.166" width="12.5" height="23.0705" />
	        <rect x="32.166" y="26.9294" width="12.5" height="23.0705" />
	        </svg>
	        <svg id="text-toggle" class={`${hpText ? " ":"on "}`} onClick={textColumn} width="40" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <path d="M23.6042 50V6.71429H40V0H0V6.71429H16.3958V50H23.6042Z"/>
	        </svg>
	      </p>
	        <div id="mini-first" style={{"order":"-1000"}} className={`${hpText ? " " :"projects-page-mini "} mini-overview`}>
	          {hpText ?
	          <>
		          <ReactMarkdown>{hpText?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown>
		          <a className="more-info" href="/info">More Info</a>
	          </> :
	          <div> 
	          	<div id="recent" onClick={recent} className="time-toggle on">Recent</div>
        		<div id="older" onClick={older} className="time-toggle">Older</div>
        	  </div>
	      	}
	        </div>
	        {reverse ?
	        <div id="text-projects">
	        {projectsReverse.map((project, index) => {
	        	    let featuredClients = []
	        	    for (var i = clients.length - 1; i >= 0; i--) {
								    for (var x = project.node.frontmatter.clients.length - 1; x >= 0; x--) {
								      if((clients[i].node.frontmatter.id == project.node.frontmatter.clients[x].client)||(clients[i].node.frontmatter.title == project.node.frontmatter.clients[x].client)){
								        featuredClients.push(clients[i].node.frontmatter.name)
								      }
								    }
								  }
	              if(!project.node.frontmatter.draft){
	                const title = project.node.frontmatter.campaign_title
	   
	                return (
	                
	                  <a  className={`text-item`} key={index} href={project.node.fields.slug}>
	                    <h1> {featuredClients.length > 0 ? featuredClients[0] + ", " : ""} {project.node.frontmatter.campaign_title}</h1>
	                    <div className="hover-img">
	                     <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
	                    </div>
	                    <div className="hover-text">
	                     <p> <ReactMarkdown>{project.node.frontmatter.notes?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown></p>
	                    </div>
	                  </a>
	       
	                )

	              }
	          })}
	        </div>
	        :
	        <div id="text-projects">
	        {projects.map((project, index) => {
	              if(!project.node.frontmatter.draft){
	                const title = project.node.frontmatter.campaign_title
	   							let featuredClients = []
	        	    for (var i = clients.length - 1; i >= 0; i--) {
								    for (var x = project.node.frontmatter.clients.length - 1; x >= 0; x--) {
								      if((clients[i].node.frontmatter.id == project.node.frontmatter.clients[x].client)||(clients[i].node.frontmatter.title == project.node.frontmatter.clients[x].client)){
								        featuredClients.push(clients[i].node.frontmatter.name)
								      }
								    }
								  }
	                return (
	                
	                  <a  className={`text-item`} key={index} href={project.node.fields.slug}>
	                    <h1> {featuredClients.length > 0 ? featuredClients[0] + ", " : ""} {project.node.frontmatter.campaign_title}</h1>
	                    <div className="hover-img">
	                     <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
	                    </div>
	                    <div className="hover-text">
	                     <p> <ReactMarkdown>{project.node.frontmatter.notes?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown></p>
	                    </div>
	                  </a>
	       
	                )

	              }
	          })}
	        </div>}
	         {reverse ?
	         	<>
	            {projectsReverse.map((project, index) => {
	            	let featuredClients = []
	        	    for (var i = clients.length - 1; i >= 0; i--) {
								    for (var x = project.node.frontmatter.clients.length - 1; x >= 0; x--) {
								      if((clients[i].node.frontmatter.id == project.node.frontmatter.clients[x].client)||(clients[i].node.frontmatter.title == project.node.frontmatter.clients[x].client)){
								        featuredClients.push(clients[i].node.frontmatter.name)
								      }
								    }
								  }
	              if(!project.node.frontmatter.draft){
	                const title = project.node.frontmatter.campaign_title

	                return (
	                
	                  <a className={`${project.node.frontmatter.thumb?.size} film-item`} key={index} href={project.node.fields.slug}>
	                    <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
	                  	<div className="opacity-title">{featuredClients.length > 0 ? featuredClients[0] + ", " : ""}{project.node.frontmatter.campaign_title}</div>
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
		      </>
		      :
		      <>
	            {projects.map((project, index) => {
	            	let featuredClients = []
	        	    for (var i = clients.length - 1; i >= 0; i--) {
								    for (var x = project.node.frontmatter.clients.length - 1; x >= 0; x--) {
								      if((clients[i].node.frontmatter.id == project.node.frontmatter.clients[x].client)||(clients[i].node.frontmatter.title == project.node.frontmatter.clients[x].client)){
								        featuredClients.push(clients[i].node.frontmatter.name)
								      }
								    }
								  }
	              if(!project.node.frontmatter.draft){
	                const title = project.node.frontmatter.campaign_title

	                return (
	                
	                  <a className={`${project.node.frontmatter.thumb?.size} film-item`} key={index} href={project.node.fields.slug}>
	                    <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
	                  	<div className="opacity-title">{featuredClients.length > 0 ? featuredClients[0] + ", " : ""}{project.node.frontmatter.campaign_title}</div>
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
		      </>
		  }
	      </div>
	    </>
	  )
}

export default FilmStrip