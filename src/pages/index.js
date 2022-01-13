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

        if(currScroll > vh){
          
          if(el.classList.contains("white")){
            el.classList.remove("white")
          }
        }else{
          if(!el.classList.contains("white")){
            el.classList.add("white")
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
  let featuredClients = [];
  let featuredArtists = [];
  /*create array of featured projects by matching the title from all projects to the ones specified under the homepage*/
  for (var x = unfilteredProjects.length - 1; x >= 0; x--) {
    for (var i = homepage.projects.length - 1; i >= 0; i--) {
      if(unfilteredProjects[x].node.frontmatter.title == homepage.projects[i].project){
        if(!unfilteredProjects[x].node.frontmatter.draft){
          featuredProjects.push(unfilteredProjects[x])
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
    <div className="mobile-menu">
      <a></a>
      <h1 onClick={mobileOpen} className="mobile-trigger">Menu</h1>
    </div>
 
      <h1 className="overlay-title mobile">
        <div className="overlay-inner">
          <span>AP Studio, Inc  </span><br/>
          <span>AP Studio, Paris  </span><br/>
          <span>AP Studio, New York </span><br/>
          <span>AP Studio, Los Angeles </span><br/>
          <span>AP Studio, Inc  </span><br/>
          <span>AP Studio, Paris  </span><br/>
          <span>AP Studio, New York </span><br/>
          <span>AP Studio, Los Angeles </span><br/>
          <span>AP Studio, Inc  </span><br/>
          <span>AP Studio, Paris  </span><br/>
          <span>AP Studio, New York </span><br/>
          <span>AP Studio, Los Angeles </span><br/>
          <span>AP Studio, Inc  </span><br/>
          <span>AP Studio, Paris  </span><br/>
          <span>AP Studio, New York </span><br/>
          <span>AP Studio, Los Angeles </span><br/>
          <span>AP Studio, Inc  </span><br/>
          <span>AP Studio, Paris  </span><br/>
          <span>AP Studio, New York </span><br/>
          <span>AP Studio, Los Angeles </span><br/>
          <span>AP Studio, Inc  </span><br/>
          <span>AP Studio, Paris  </span><br/>
          <span>AP Studio, New York </span><br/>
          <span>AP Studio, Los Angeles </span><br/>
        </div>
      </h1>
    <h1 className="overlay-title">
    <div className="overlay-inner">
      <span>AP Studio, Inc  </span><br/>
      <span>AP Studio, Paris  </span><br/>
      <span>AP Studio, New York </span><br/>
      <span>AP Studio, Los Angeles </span><br/>
      <span>AP Studio, Inc  </span><br/>
      <span>AP Studio, Paris  </span><br/>
      <span>AP Studio, New York </span><br/>
      <span>AP Studio, Los Angeles </span><br/>
      <span>AP Studio, Inc  </span><br/>
      <span>AP Studio, Paris  </span><br/>
      <span>AP Studio, New York </span><br/>
      <span>AP Studio, Los Angeles </span><br/>
      <span>AP Studio, Inc  </span><br/>
      <span>AP Studio, Paris  </span><br/>
      <span>AP Studio, New York </span><br/>
      <span>AP Studio, Los Angeles </span><br/>
      <span>AP Studio, Inc  </span><br/>
      <span>AP Studio, Paris  </span><br/>
      <span>AP Studio, New York </span><br/>
      <span>AP Studio, Los Angeles </span><br/>
      <span>AP Studio, Inc  </span><br/>
      <span>AP Studio, Paris  </span><br/>
      <span>AP Studio, New York </span><br/>
      <span>AP Studio, Los Angeles </span><br/>
    </div>
    </h1>
   {featuredProjects.length > 10 ?
    <div
      className='carousel'>
      <div className='inner'>
          {featuredProjects.map((project, index) => {

            if(index < 15 && !project.node.frontmatter.draft){
              const title = project.node.frontmatter.campaign_title

              return (
              
                <a className={`${project.node.frontmatter.thumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                  <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                  <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                </a>
     
              )

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

              return (
              
                <a className={`${project.node.frontmatter.thumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                  <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                  <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                </a>
     
              )

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
       <FilmStrip hpText={homepage.intro || ""} projects={projects}/>
      <div className="artists-clients">
        <div className="selected-clients">
          <h1>Selected Clients <a className="more-info" href="/artists&clients">View All Clients</a></h1>
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
          <h1>Selected Artists <a className="more-info" href="/artists&clients">View All Artists</a></h1>
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
          }
        }
      }
    }
    projects: allMarkdownRemark(filter: 
    {fields: {slug: {regex: "/projects/"}}}, sort: { fields: [frontmatter___date], order: ASC }) {
    edges {
        node {
          id
          frontmatter {
            title
            draft
            notes
            campaign_title
            thumb {
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
