import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Thumb from "../components/thumb"
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'
import Flickity from 'react-flickity-component'
import Media from "../components/media"

const flickityOptions = {
    groupCells: true,
    autoPlay: true,
    wrapAround: true
}

const ArtistIndex = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const artistsold = data.artists?.edges
  const clientsold = data.clients?.edges
  let clients;
  let artists;
  clients = clientsold.sort(function (a, b) {
    if ( a.node.frontmatter.name.toLowerCase() < b.node.frontmatter.name.toLowerCase() ) {
        return -1;
    } else if ( a.node.frontmatter.name.toLowerCase() > b.node.frontmatter.name.toLowerCase() ) {
        return 1;
    } else {
        return 0;
    }
} ) ;
  artists = artistsold.sort(function (a, b) {
    if ( a.node.frontmatter.name.toLowerCase() < b.node.frontmatter.name.toLowerCase() ) {
        return -1;
    } else if ( a.node.frontmatter.name.toLowerCase() > b.node.frontmatter.name.toLowerCase() ) {
        return 1;
    } else {
        return 0;
    }
} ) ;

  const projects = data.projects?.edges
  let letterC = "1"
  let letterA = "1"
  function imageColumn(){
    document.querySelector(".artists-clients").classList.remove("text-column")
    document.querySelector(".artists-clients").classList.add("image-column")
    document.querySelector("#text-toggle").classList.remove("on")
    document.querySelector("#image-toggle").classList.add("on")
  }
  function textColumn(){
    document.querySelector(".artists-clients").classList.remove("image-column")
    document.querySelector(".artists-clients").classList.add("text-column")
    document.querySelector("#image-toggle").classList.remove("on")
    document.querySelector("#text-toggle").classList.add("on")
  }

  return (
    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      <header className="ac-header">
      <p id="layout-toggle">
        <svg id="image-toggle" onClick={imageColumn} width="40" height="40" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12.5" height="23.0705" fill="#111F4F"/>
        <rect y="26.9294" width="12.5" height="23.0705" />
        <rect x="16.5" width="11.6667" height="23.0705" />
        <rect x="16.5" y="26.9294" width="11.6667" height="23.0705" />
        <rect x="32.166" width="12.5" height="23.0705" />
        <rect x="32.166" y="26.9294" width="12.5" height="23.0705" />
        </svg>
        <svg id="text-toggle" onClick={textColumn} className="on" width="40" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6042 50V6.71429H40V0H0V6.71429H16.3958V50H23.6042Z"/>
        </svg>
      </p>
      </header>
      <div className="artists-clients ac-page text-column">
        <div className="selected-clients">
          <div id="small-client-header" className="ac-spacer"><h1>Clients</h1></div>
          <ol style={{ listStyle: `none` }}>
              {clients.map((client,index) => {
              	
              	let featuredProjects = []
              	let title = client.node.frontmatter.name
                let featuredProject = client.node.frontmatter.featured_project
                let firstLetter = title[0] 
                let drawLetterLabel = false
                if(firstLetter.toUpperCase() !== letterC.toUpperCase()){
                  letterC = firstLetter.toUpperCase()
                  drawLetterLabel = true
                }
				 for (var x = projects.length - 1; x >= 0; x--) {
				    for (var i = projects[x].node.frontmatter.clients?.length - 1; i >= 0; i--) {
              
				      if((projects[x].node.frontmatter.clients[i].client.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == title.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || (projects[x].node.frontmatter.clients[i].client == client.node.frontmatter.id)){
				        featuredProjects.push(projects[x].node)
				      }
				    }
				  }
          if(featuredProject){
            for (var x = projects.length - 1; x >= 0; x--) {
               if((projects[x].node.frontmatter.title == featuredProject) || (projects[x].node.frontmatter.id == featuredProject)){
                featuredProjects.unshift(projects[x].node)
              }
            }
          }
         
              return (
                <li key={index}>
                  {drawLetterLabel &&
                    <div className="letter-label">{firstLetter.toUpperCase()}</div>
                  }
                  <a href={client.node.fields.slug}>
                  {

                      (featuredProjects[0]?.frontmatter?.thumb?.image || featuredProjects[0]?.frontmatter?.thumb?.video) &&
                      <div className="hover">
                      <div className="hover-img"><Thumb size={featuredProjects[0]?.frontmatter?.thumb?.size} key={index} imageurl={featuredProjects[0]?.frontmatter?.thumb?.image} videourl={featuredProjects[0]?.frontmatter?.thumb?.video} /></div>
                      <div className="hover-txt">{featuredProjects[0]?.frontmatter.artists ? featuredProjects[0]?.frontmatter.artists[0]?.artist + ", " : ""}<ReactMarkdown>{featuredProjects[0]?.frontmatter?.campaign_title}</ReactMarkdown><br/><ReactMarkdown>{featuredProjects[0]?.frontmatter?.notes?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown></div>
                      </div>
                    }
                    
                    {title}
                      
                  </a>

                </li>
              )
            })}
          </ol>
        </div>
        <div className="selected-artists">
          <div id='small-artist-header' className="ac-spacer"><h1>Artists</h1></div>
          <ol style={{ listStyle: `none` }}>
              {artists.map((artist,index) => {
              	let featuredProjects = []
              	let title = artist.node.frontmatter.name
                let firstLetter = title[0] 
                let featuredProject = artist.node.frontmatter.featured_project

                let drawLetterLabel = false
                if(firstLetter.toUpperCase() !== letterA.toUpperCase()){
                  letterA = firstLetter.toUpperCase()
                  drawLetterLabel = true
                }
      				 for (var x = projects.length - 1; x >= 0; x--) {
                  for (var i = projects[x].node.frontmatter.artists?.length - 1; i >= 0; i--) {
      				      if((projects[x].node.frontmatter.artists[i].artist.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") == artist.node.frontmatter.name.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || (projects[x].node.frontmatter.artists[i].artist == artist.node.frontmatter.id)){
      				        featuredProjects.push(projects[x].node)
      				      }
      				    }
      				  }
              if(featuredProject){
       
                for (var x = projects.length - 1; x >= 0; x--) {

                  if((projects[x].node.frontmatter.title == featuredProject) || (projects[x].node.frontmatter.id == featuredProject)){
                featuredProjects.unshift(projects[x].node)
              }
                }
              }

              return (
                <li key={index}>
                 {drawLetterLabel &&
                    <div className="letter-label">{firstLetter}</div>
                  }
                  <a href={artist.node.fields.slug}>
                   {
                      (featuredProjects[0]?.frontmatter?.thumb?.image || featuredProjects[0]?.frontmatter?.thumb?.video) &&
                      <div className="hover">
                      <div className="hover-img"><Thumb size={featuredProjects[0]?.frontmatter?.thumb?.size} key={index} imageurl={featuredProjects[0]?.frontmatter?.thumb?.image} videourl={featuredProjects[0]?.frontmatter?.thumb?.video} /></div>
                      <div className="hover-txt">{featuredProjects[0]?.frontmatter.clients ? featuredProjects[0]?.frontmatter.clients[0].client + ", " : ""}<ReactMarkdown>{featuredProjects[0]?.frontmatter?.campaign_title}</ReactMarkdown><br/><ReactMarkdown>{featuredProjects[0]?.frontmatter?.notes?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown></div>
                      </div>
                    }
                    {title}
                   
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
      
     
    </Layout>
  )
}

export default ArtistIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    artists: allMarkdownRemark(filter: {fields: {slug: {regex: "/artists/"}}}, sort: { fields: [frontmatter___name], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            name
            featured_project
          }
          fields {
            slug
          }
        }
      }
    }
    clients: allMarkdownRemark(filter: {fields: {slug: {regex: "/clients/"}}}, sort: { fields: [frontmatter___name], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            name
            featured_project
          }
          fields {
            slug
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
            id
            title
            artists{
            	artist
            }
            clients{
            	client
            }
            campaign_title
            thumb {
              image
              video
              size
            }
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
