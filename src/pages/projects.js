import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Thumb from "../components/thumb"
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    groupCells: true,
    autoPlay: true,
    wrapAround: true
}

const ProjectIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.projects.edges
  
  function recent(){
    document.querySelector("#older").classList.remove("on")
    document.querySelector("#recent").classList.add("on")
    let items = document.querySelectorAll(".film-item")
    for (var i = items.length - 1; i >= 0; i--) {
      console.log(items[i])
      items[i].style.order = Math.abs(i+2)
    }
    
  }
  function older(){
    document.querySelector("#recent").classList.remove("on")
    document.querySelector("#older").classList.add("on")
    let items = document.querySelectorAll(".film-item")
    for (var i = items.length - 1; i >= 0; i--) {
      console.log(items[i].style)
      items[i].style.order = "-"+Math.abs(i+2)
    }
  }
  return (
    <>
    

    <Layout location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      
      <div className="film-strip">
      <div style={{"order":"-1000"}} className="mini-overview">
        <div id="recent" onClick={recent} className="time-toggle on">Recent</div>
        <div id="older" onClick={older} className="time-toggle">Older</div>
      </div>
          {projects.map((project, index) => {
            
              const title = project.node.frontmatter.campaign_title

              return (
              
                <a className={`${project.node.frontmatter.thumb?.size} film-item`} style={{"order":index + 2}} key={index} href={project.node.fields.slug}>
                  <Thumb id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                </a>
     
              )

            
        })}
      
      </div>
      
      
     
    </Layout>
    </>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMarkdownRemark(filter: 
    {fields: {slug: {regex: "/projects/"}}}, sort: { fields: [frontmatter___date], order: ASC }) {
    edges {
        node {
          id
          frontmatter {
            title
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
