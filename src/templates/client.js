import * as React from "react"
import { Link, graphql } from "gatsby"
import Top from "../components/top"
import Thumb from "../components/thumb"
import Media from "../components/media"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"
import Seo from "../components/seo"

const ClientPageTemplate = ({ data, location }) => {
  const client = data.markdownRemark
  const projects = data.projects.edges
  const siteTitle = data.site.siteMetadata?.title || `Title`

  let clientProjects = []
  projects.map((project,index) => {
    for(let i = project.node.frontmatter.clients?.length - 1; i >= 0; i--){

      if((project.node.frontmatter.clients[i]?.client == client.frontmatter.name) || (project.node.frontmatter.clients[i]?.client == client.frontmatter.id)){
        if(!project.node.frontmatter.draft){
           clientProjects.push(project.node)
        }
      }
    }   
  })
 let clientProjectDivs = clientProjects?.map((project, index) => {
        

        if(project.frontmatter.thumb){
          return (

            <a className={`${project.frontmatter.thumb?.size == "portrait" ? "portrait ": "landscape "} client-project`} href={project.fields.slug}>
            <Media name={project.frontmatter.thumb?.media_name} size={project.frontmatter.thumb?.size} key={index} imageurl={project.frontmatter.thumb?.image} videourl={project.frontmatter.thumb?.video} />
            <p className="client-project-list">{project.frontmatter.campaign_title} {project.frontmatter.release_date_public ? ", "+project.frontmatter.release_date_public : ""}</p>
            

              
            <div className="hover">
            <Thumb name={project.frontmatter.thumb?.media_name} size={project.frontmatter.thumb?.size} key={index} imageurl={project.frontmatter.thumb?.image} videourl={project.frontmatter.thumb?.video} />

            <div className="hover-txt">{project.frontmatter.artists ? project.frontmatter.artists[0]?.artist + " " : ""}</div>
            </div>
                    
            </a>
          )
     
        }

 })
  let mobile = false;
 if(typeof window != `undefined`){
    if(window.outerWidth <= 768){
      mobile = true;
    }
  }
  function imageColumn(){
    document.querySelector(".project-media-container").classList.remove("text-column")
    document.querySelector(".project-media-container").classList.add("client-three-image-column")
    document.querySelector(".project-media-container").classList.add("three-image-column")
    document.querySelector("#text-toggle").classList.remove("on")
    document.querySelector("#image-toggle").classList.add("on")
  }
  function textColumn(){
    document.querySelector(".project-media-container").classList.remove("client-three-image-column")
    document.querySelector(".project-media-container").classList.remove("three-image-column")
    document.querySelector(".project-media-container").classList.add("text-column")
    document.querySelector("#image-toggle").classList.remove("on")
    document.querySelector("#text-toggle").classList.add("on")
  }
  return (
      <Layout data={data} location={location} title={siteTitle}>
      <Seo
        title={siteTitle}
      />

        <header className="project-header">
          <h1><ReactMarkdown>{client.frontmatter.name}</ReactMarkdown></h1>
          <div></div>
          <p id="layout-toggle">
           <svg id="image-toggle" className={`${ clientProjectDivs.length < 2 ? "on" :" "}`} onClick={imageColumn} width="40" height="40" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12.5" height="23.0705" fill="#111F4F"/>
            <rect y="26.9294" width="12.5" height="23.0705" />
            <rect x="16.5" width="11.6667" height="23.0705" />
            <rect x="16.5" y="26.9294" width="11.6667" height="23.0705" />
            <rect x="32.166" width="12.5" height="23.0705" />
            <rect x="32.166" y="26.9294" width="12.5" height="23.0705" />
            </svg>
            <svg id="text-toggle" onClick={textColumn} className={`${ clientProjectDivs.length < 2 ? "" :" on"}`} width="40" height="40" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6042 50V6.71429H40V0H0V6.71429H16.3958V50H23.6042Z"/>
            </svg>
          </p>
        </header>
        <div className={`${(mobile || clientProjectDivs.length < 2) ? 'client-three-image-column three-image-column ' : 'text-column '} project-media-container client-media-container`}>
        {clientProjectDivs}
        </div>
          <div className="project-footer">
            <a className="desktop-only" href="/artists&clients">Return to Client Index</a>
            <a className="mobile-only" href="/clients">Return to Client Index</a>
            <Top></Top>
          </div>



    </Layout>
  )
}

export default ClientPageTemplate

export const pageQuery = graphql`
  query ClientBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        id
        name
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
            draft
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
