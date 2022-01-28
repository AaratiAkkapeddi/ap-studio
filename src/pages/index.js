import * as React from "react"
import {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Thumb from "../components/thumb"
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'
import Flickity from 'react-flickity-component'
import FilmStrip from '../components/filmStrip'
const flickityOptions = {
    groupCells: true,
    autoPlay: true,
    wrapAround: true
}

const HomeIndex = ({ data, location }) => {
  useEffect(()=>{
    if(typeof document != `undefined` && typeof window != `undefined`){
    document.querySelector("#homepage-wrapper").addEventListener('scroll', function(e) { 
        let currScroll = document.querySelector("#homepage-wrapper").scrollTop
        let scrollDir = 1;
        if(lastScrollTop > currScroll){
          scrollDir = -1;
        }
        lastScrollTop = currScroll;
        let vh = window.innerHeight
        let el = document.querySelector(".site-header")
        let el2 = document.querySelector(".mobile-menu")

        if(currScroll > vh){
          
          if(el.classList.contains("white")){
            el.classList.remove("white")
             el2.classList.remove("white")
          }
        }else{
          if(!el.classList.contains("white")){
            el.classList.add("white")
            el2.classList.add("white")
          }
        }
       

     }

    );
  }
    
  },[]);
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const homepage = data.homepage.edges[0].node.frontmatter
  const unfilteredProjects = data.projects.edges
  const projects = []
  const clients = data.clients.edges
  const artists = data.artists.edges

  let featuredProjects = [];
  let featuredProjects2 = [];
  let featuredClients = [];
  let featuredArtists = [];
  /*create array of featured projects by matching the title from all projects to the ones specified under the homepage*/
  for (var i = homepage.projects.length - 1; i >= 0; i--) {
    for (var x = unfilteredProjects.length - 1; x >= 0; x--) {
    
      if(unfilteredProjects[x].node.frontmatter.title == homepage.projects[i].project){
        if(!unfilteredProjects[x].node.frontmatter.draft){
          featuredProjects.unshift(unfilteredProjects[x])
        }
      }
    
    }
  }
  for (var i = homepage.featured_projects.length - 1; i >= 0; i--) {
    for (var x = unfilteredProjects.length - 1; x >= 0; x--) {
    
      if(unfilteredProjects[x].node.frontmatter.title == homepage.featured_projects[i].project){
        if(!unfilteredProjects[x].node.frontmatter.draft){
          featuredProjects2.unshift(unfilteredProjects[x])
        }
      }
    
    }
  }
  for (var x = unfilteredProjects.length - 1; x >= 0; x--) {
      if(!unfilteredProjects[x].node.frontmatter.draft){
        projects.unshift(unfilteredProjects[x])
      }
  }

  /*create array of featured clients by matching the title from all clients to the ones specified under the homepage*/
  for (var x = clients.length - 1; x >= 0; x--) {
    for (var i = homepage.clients.length - 1; i >= 0; i--) {
      if(clients[x].node.frontmatter.name == homepage.clients[i].client){
        featuredClients.push(clients[x].node)
      }
    }
  }
  /*create array of featured artists by matching the title from all artists to the ones specified under the homepage*/
  for (var x = artists.length - 1; x >= 0; x--) {
    for (var i = homepage.artists.length - 1; i >= 0; i--) {
      if(artists[x].node.frontmatter.name == homepage.artists[i].artist){
        featuredArtists.push(artists[x].node)
      }
    }
  }
  if (featuredClients.length < 1){
    for (var i = clients.length - 1; i >= 0; i--) {
      if(i < 10){
        featuredClients.push(clients[i].node)
      }
      
    }
  }
  if (featuredArtists.length < 1){
    for (var i = artists.length - 1; i >= 0; i--) {
      if(i < 10){
        featuredArtists.push(artists[i].node)
      }
      
    }
  }
  let lastScrollTop = 0;

featuredArtists = featuredArtists.sort(function (a, b) {
    if ( a.frontmatter.name.toLowerCase() < b.frontmatter.name.toLowerCase() ) {
        return -1;
    } else if ( a.frontmatter.name.toLowerCase() > b.frontmatter.name.toLowerCase() ) {
        return 1;
    } else {
        return 0;
    }
} ) ;
featuredClients = featuredClients.sort(function (a, b) {
    if ( a.frontmatter.name.toLowerCase() < b.frontmatter.name.toLowerCase() ) {
        return -1;
    } else if ( a.frontmatter.name.toLowerCase() > b.frontmatter.name.toLowerCase() ) {
        return 1;
    } else {
        return 0;
    }
} ) ;

function mobileClose(){
    let headers = document.querySelectorAll('.site-header');
    for (var i = headers.length - 1; i >= 0; i--) {
      headers[i].classList.remove("open")
    }
  }
  function mobileOpen(){
    let headers = document.querySelectorAll('.site-header');
    for (var i = headers.length - 1; i >= 0; i--) {
      headers[i].classList.add("open")
    }
  }
  return (
    <div id='homepage-wrapper'>
    <div className="child"> 
   
 
      <h1 className="overlay-title mobile">
        <div className="overlay-inner">
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1214.36 261.58"><defs></defs><g><g><path d="M1214.36,120.64c-2.39-29.86-8.06-56.14-41.51-56.14-27.17,0-48.08,20.6-48.08,77.34s20.91,77.34,48.08,77.34c35.24-.6,40.91-31.05,41.51-58.83l-26.58-.89c-2.09,15.53-2.69,32.85-13.14,32.85-8.06,0-11.05-9-11.05-46.59,0-47.18,1.8-56.14,9.56-56.14,7.46,0,9.55,8.66,10.15,32ZM1019.9,216.79h34.64V98.84a15.65,15.65,0,0,1,11.65-5.67c6,0,9.85,3.58,9.85,14.93V216.79h34.64V95.56c0-19.71-7.76-31.06-24.19-31.06-12.84,0-23.29,8.36-31.35,16.72h-.6V66.89H1019.9Zm-56.43,0h38.82V4.18H963.47ZM853.82,261.58h15.53l23-47.77V178H853.53v38.82h14.33ZM804.14,141.84c0,45.69-2.69,52.26-10.75,52.26s-10.75-6.57-10.75-52.26,2.68-52.26,10.75-52.26,10.75,6.57,10.75,52.26m37,0c0-56.74-20.91-77.34-47.78-77.34s-47.78,20.6-47.78,77.34,20.9,77.34,47.78,77.34,47.78-20.6,47.78-77.34M697,38.82h34.64V4.18H697Zm0,178h34.64V66.89H697Zm-51.75-27.47c-1.79,2.69-5.37,4.78-10.45,4.78-10.15,0-11.94-6.87-11.94-52.86,0-47.18,2.68-53.45,12.84-53.45,4.47,0,8.06,2.09,9.55,4.78Zm1.49,27.47h33.15V4.18H645.28V75.25h-.6A26.74,26.74,0,0,0,622.89,64.5c-25.39,0-37,27.47-37,77,0,49,9,77.64,34,77.64,13.74,0,19.41-6.57,26.28-14.33h.59Zm-76-149.9H536.11v118a15.65,15.65,0,0,1-11.64,5.67c-6,0-9.86-3.58-9.86-14.93V66.89H480V188.13c0,18.81,9.86,31.05,25.68,31.05,11.65,0,21.8-8.36,29.87-16.72h.59v14.33h34.64ZM397.14,93.76h16.13v97.35c0,20.61,13.43,28.07,29,28.07,7.17,0,19.11-.3,29.56-3V188.13c-2.09,0-5.67.59-9.85.59-12.54,0-13.74-7.76-13.74-12.84V93.76h21.5V66.89H447.91V12.24H413.27V66.89H397.14ZM289.79,155.28c0,29.26,8.36,65.69,49.87,65.69,34.94,0,53.45-26,53.45-58.52,0-61.82-70.47-74.06-70.47-110.19,0-11.65,5.37-19.41,14.63-19.41,15.53,0,15.53,20,15.53,31.95h34.64C386.54,26.58,373.1,0,338.17,0,305.32,0,288,26,288,57.93c0,63,70.47,71.67,70.47,109.59,0,8.66-4.48,20.61-17.32,20.61-16.72,0-16.72-20.91-16.72-32.85ZM123.17,216.79H162v-85.1h15.53c36.43,0,51.36-25.68,51.36-63.9,0-46-23-63.61-66.89-63.61H123.17ZM162.29,37h3c12.84,0,24.78.89,24.78,31.65,0,25.68-8.66,31.95-24.48,31.95h-3.29ZM0,216.79H32.55l5.37-47.18H69.28L75,216.79h37.33L86,4.18H29.86Zm66-78.23H41.81L54.05,37h.6Z"/></g></g></svg></span>
        </div>
      </h1>
    <h1 className="overlay-title">
    <div className="overlay-inner">
        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1214.36 261.58"><defs></defs><g><g><path d="M1214.36,120.64c-2.39-29.86-8.06-56.14-41.51-56.14-27.17,0-48.08,20.6-48.08,77.34s20.91,77.34,48.08,77.34c35.24-.6,40.91-31.05,41.51-58.83l-26.58-.89c-2.09,15.53-2.69,32.85-13.14,32.85-8.06,0-11.05-9-11.05-46.59,0-47.18,1.8-56.14,9.56-56.14,7.46,0,9.55,8.66,10.15,32ZM1019.9,216.79h34.64V98.84a15.65,15.65,0,0,1,11.65-5.67c6,0,9.85,3.58,9.85,14.93V216.79h34.64V95.56c0-19.71-7.76-31.06-24.19-31.06-12.84,0-23.29,8.36-31.35,16.72h-.6V66.89H1019.9Zm-56.43,0h38.82V4.18H963.47ZM853.82,261.58h15.53l23-47.77V178H853.53v38.82h14.33ZM804.14,141.84c0,45.69-2.69,52.26-10.75,52.26s-10.75-6.57-10.75-52.26,2.68-52.26,10.75-52.26,10.75,6.57,10.75,52.26m37,0c0-56.74-20.91-77.34-47.78-77.34s-47.78,20.6-47.78,77.34,20.9,77.34,47.78,77.34,47.78-20.6,47.78-77.34M697,38.82h34.64V4.18H697Zm0,178h34.64V66.89H697Zm-51.75-27.47c-1.79,2.69-5.37,4.78-10.45,4.78-10.15,0-11.94-6.87-11.94-52.86,0-47.18,2.68-53.45,12.84-53.45,4.47,0,8.06,2.09,9.55,4.78Zm1.49,27.47h33.15V4.18H645.28V75.25h-.6A26.74,26.74,0,0,0,622.89,64.5c-25.39,0-37,27.47-37,77,0,49,9,77.64,34,77.64,13.74,0,19.41-6.57,26.28-14.33h.59Zm-76-149.9H536.11v118a15.65,15.65,0,0,1-11.64,5.67c-6,0-9.86-3.58-9.86-14.93V66.89H480V188.13c0,18.81,9.86,31.05,25.68,31.05,11.65,0,21.8-8.36,29.87-16.72h.59v14.33h34.64ZM397.14,93.76h16.13v97.35c0,20.61,13.43,28.07,29,28.07,7.17,0,19.11-.3,29.56-3V188.13c-2.09,0-5.67.59-9.85.59-12.54,0-13.74-7.76-13.74-12.84V93.76h21.5V66.89H447.91V12.24H413.27V66.89H397.14ZM289.79,155.28c0,29.26,8.36,65.69,49.87,65.69,34.94,0,53.45-26,53.45-58.52,0-61.82-70.47-74.06-70.47-110.19,0-11.65,5.37-19.41,14.63-19.41,15.53,0,15.53,20,15.53,31.95h34.64C386.54,26.58,373.1,0,338.17,0,305.32,0,288,26,288,57.93c0,63,70.47,71.67,70.47,109.59,0,8.66-4.48,20.61-17.32,20.61-16.72,0-16.72-20.91-16.72-32.85ZM123.17,216.79H162v-85.1h15.53c36.43,0,51.36-25.68,51.36-63.9,0-46-23-63.61-66.89-63.61H123.17ZM162.29,37h3c12.84,0,24.78.89,24.78,31.65,0,25.68-8.66,31.95-24.48,31.95h-3.29ZM0,216.79H32.55l5.37-47.18H69.28L75,216.79h37.33L86,4.18H29.86Zm66-78.23H41.81L54.05,37h.6Z"/></g></g></svg></span>
    </div>
    </h1>
   {featuredProjects.length > 1 ?
    <div
      className='carousel'>
      <div className='inner'>
          {featuredProjects.map((project, index) => {

            if(index < 15 && !project.node.frontmatter.draft){
              const title = project.node.frontmatter.campaign_title
              if(project.node.frontmatter.carouselthumb && (project.node.frontmatter.carouselthumb?.image || project.node.frontmatter.carouselthumb?.video)){
                return (
                
                  <a className={`${project.node.frontmatter.carouselthumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                    <Thumb name={project.node.frontmatter.carouselthumb?.media_name} id={project.node.frontmatter.carouselthumb?.id} imageurl={project.node.frontmatter.carouselthumb?.image} videourl={project.node.frontmatter.carouselthumb?.video} />
                    <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                  </a>
       
                )
              }else{
                return (
              
                  <a className={`${project.node.frontmatter.thumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                    <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                    <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                  </a>
       
                )
              }
              

            }
        })}
          <a className={`${featuredProjects[0].node.frontmatter.thumb?.size} carousel-slide`} key={-1} href={featuredProjects[0].node.fields.slug}>
            <Thumb name={featuredProjects[0].node.frontmatter.thumb?.media_name} id={featuredProjects[0].node.frontmatter.thumb?.id} imageurl={featuredProjects[0].node.frontmatter.thumb?.image} videourl={featuredProjects[0].node.frontmatter.thumb?.video} />
            <div className="slide-title"><h1><ReactMarkdown>{featuredProjects[0].node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
          </a>
          <a className={`${featuredProjects[1].node.frontmatter.thumb?.size} carousel-slide`} key={-2} href={featuredProjects[1].node.fields.slug}>
            <Thumb name={featuredProjects[1].node.frontmatter.thumb?.media_name} id={featuredProjects[1].node.frontmatter.thumb?.id} imageurl={featuredProjects[1].node.frontmatter.thumb?.image} videourl={featuredProjects[1].node.frontmatter.thumb?.video} />
            <div className="slide-title"><h1><ReactMarkdown>{featuredProjects[1].node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
          </a>
      </div>
    </div>
    :
    <div
      className='carousel'>
      <div className='inner'>
          {projects.map((project, index) => {

            if(index < 15 && !project.node.frontmatter.draft){
              const title = project.node.frontmatter.campaign_title

              if(project.node.frontmatter.carouselthumb){
                return (
                
                  <a className={`${project.node.frontmatter.carouselthumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                    <Thumb name={project.node.frontmatter.carouselthumb?.media_name} id={project.node.frontmatter.carouselthumb?.id} imageurl={project.node.frontmatter.carouselthumb?.image} videourl={project.node.frontmatter.carouselthumb?.video} />
                    <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                  </a>
       
                )
              }else{
                return (
              
                  <a className={`${project.node.frontmatter.thumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                    <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                    <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                  </a>
       
                )
              }

            }
        })}
          <a className={`${projects[0].node.frontmatter.thumb?.size} carousel-slide`} key={-1} href={projects[0].node.fields.slug}>
            <Thumb name={projects[0].node.frontmatter.thumb?.media_name} id={projects[0].node.frontmatter.thumb?.id} imageurl={projects[0].node.frontmatter.thumb?.image} videourl={projects[0].node.frontmatter.thumb?.video} />
            <div className="slide-title"><h1><ReactMarkdown>{projects[0].node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
          </a>
          <a className={`${projects[1].node.frontmatter.thumb?.size} carousel-slide`} key={-2} href={projects[1].node.fields.slug}>
            <Thumb name={projects[1].node.frontmatter.thumb?.media_name} id={projects[1].node.frontmatter.thumb?.id} imageurl={projects[1].node.frontmatter.thumb?.image} videourl={projects[1].node.frontmatter.thumb?.video} />
            <div className="slide-title"><h1><ReactMarkdown>{projects[1].node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
          </a>
      </div>
    </div>
  }
  </div>
    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
       <FilmStrip hpText={homepage.intro || ""} projects={featuredProjects2.length > 0 ? featuredProjects2.reverse() : projects}/>
      <div className="artists-clients">
        <div className="selected-clients">
          <h1>Selected Clients <a className="more-info" href="/artists&clients">View All Clients</a> <a className="more-info mobile" href="/clients">View All Clients</a></h1>
          <ol style={{ listStyle: `none` }}>
              {featuredClients.map((client,index) => {
              const title = client.frontmatter.name

              return (
                <li key={index}>
                  <a href={client.fields.slug}>
                    {title}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
        <div className="selected-artists">
          <h1>Selected Artists <a className="more-info" href="/artists&clients">View All Artists</a> <a className="more-info mobile" href="/artists">View All Artists</a></h1>
          <ol style={{ listStyle: `none` }}>
              {featuredArtists.map((artist, index) => {
              const title = artist.frontmatter.name

              return (
                <li key={index}>
                  <a href={artist.fields.slug}>
                    {title}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
      
     
    </Layout>
    </div>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    homepage: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/pages/"}}, fileAbsolutePath: {regex: "/homepage/"}}
  ) {
    edges {
      node {
          id
          frontmatter {
            intro
            clients {
              client
            }
            artists {
              artist
            }
            projects {
              project
            }
            featured_projects {
              project
            }
          }
        }
      }
    }
    projects: allMarkdownRemark(filter: 
    {fields: {slug: {regex: "/projects/"}}}, sort: { fields: [frontmatter___title], order: ASC }) {
    edges {
        node {
          id
          frontmatter {
            title
            draft
            notes
            clients{
              client
            }
            campaign_title
            thumb {
              image
              video
              media_name
              size
            }
            carouselthumb {
              image
              video
              media_name
              size
            }
          }
          fields {
            slug
          }
        }
      }
    }
    clients: allMarkdownRemark(filter: {fields: {slug: {regex: "/clients/"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            name
          }
          fields {
            slug
          }
        }
      }
    }
    artists: allMarkdownRemark(filter: {fields: {slug: {regex: "/artists/"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            name
          }
          fields {
            slug
          }
        }
      }
    }
    info: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/pages/"}}, fileAbsolutePath: {regex: "/info/"}}
  ) {
    edges {
      node {
          id
          frontmatter {
           email
           models
           instagram
          }
        }
      }
    }
  }
`
