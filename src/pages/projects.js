import * as React from "react"
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

const ProjectIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.projects.edges
  
  
  return (
    <>
    

    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      
      <FilmStrip hpText={false} projects={projects}/>
      
      
     
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
            draft
            clients{
              client
            }
            campaign_title
            thumb {
              image
              media_name
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
