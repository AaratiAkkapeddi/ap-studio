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
  const artists = data.artists?.edges
  const clients = data.clients?.edges
  const projects = data.projects?.edges

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
    <Layout location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      <header>
      <p id="layout-toggle">
        <svg id="image-toggle" onClick={imageColumn} width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12.5" height="23.0705" fill="#111F4F"/>
        <rect y="26.9294" width="12.5" height="23.0705" />
        <rect x="16.5" width="11.6667" height="23.0705" />
        <rect x="16.5" y="26.9294" width="11.6667" height="23.0705" />
        <rect x="32.166" width="12.5" height="23.0705" />
        <rect x="32.166" y="26.9294" width="12.5" height="23.0705" />
        </svg>
        <svg id="text-toggle" onClick={textColumn} className="on" width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6042 50V6.71429H40V0H0V6.71429H16.3958V50H23.6042Z"/>
        </svg>
      </p>
      </header>
      <div className="artists-clients text-column">
        <div className="selected-clients">
          <h1>Selected Clients</h1>
          <ol style={{ listStyle: `none` }}>
              {clients.map((client,index) => {
              	
              	let featuredProjects = []
              	let title = client.node.frontmatter.name
				 for (var x = projects.length - 1; x >= 0; x--) {
				    for (var i = projects[x].node.frontmatter.clients?.length - 1; i >= 0; i--) {
				      if(projects[x].node.frontmatter.clients[i].client == client.node.frontmatter.title){
				        featuredProjects.push(projects[x].node)
				      }
				    }
				  }
				  console.log(featuredProjects[0])
              return (
                <li key={index}>
                  <a href={client.node.fields.slug}>
                  {

                      featuredProjects[0]?.frontmatter?.thumb?.image &&
                      <div className="hover">
                      <div className="hover-img"><Media size={featuredProjects[0]?.frontmatter?.thumb?.size} key={index} imageurl={featuredProjects[0]?.frontmatter?.thumb?.image} videourl={featuredProjects[0]?.frontmatter?.thumb?.mediaVideo} /></div>
                      <div className="hover-txt"><ReactMarkdown>{featuredProjects[0]?.frontmatter?.campaign_title}</ReactMarkdown><br/><ReactMarkdown>{featuredProjects[0]?.frontmatter?.notes}</ReactMarkdown></div>
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
          <h1>Selected Artists</h1>
          <ol style={{ listStyle: `none` }}>
              {artists.map((artist,index) => {
              	let featuredProjects = []
              	let title = artist.node.frontmatter.name
				 for (var x = projects.length - 1; x >= 0; x--) {
				    for (var i = projects[x].node.frontmatter.artists?.length - 1; i >= 0; i--) {
				      if(projects[x].node.frontmatter.artists[i].artist == artist.node.frontmatter.title){
				        featuredProjects.push(projects[x].node)
				      }
				    }
				  }
        

              return (
                <li key={index}>
                  <a href={artist.node.fields.slug}>
                   {
                      featuredProjects[0]?.frontmatter?.thumb?.image &&
                      <div className="hover">
                      <div className="hover-img"><Media size={featuredProjects[0]?.frontmatter?.thumb?.size} key={index} imageurl={featuredProjects[0]?.frontmatter?.thumb?.image} videourl={featuredProjects[0]?.frontmatter?.thumb?.mediaVideo} /></div>
                      <div className="hover-txt"><ReactMarkdown>{featuredProjects[0]?.frontmatter?.campaign_title}</ReactMarkdown><br/><ReactMarkdown>{featuredProjects[0]?.frontmatter?.notes}</ReactMarkdown></div>
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
    projects: allMarkdownRemark(filter: 
    {fields: {slug: {regex: "/projects/"}}}, sort: { fields: [frontmatter___date], order: ASC }) {
    edges {
        node {
          id
          frontmatter {
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
  }
`