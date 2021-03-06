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
  const clients = data.clients.edges
  let featured_projectsoriginal = data.projectspage.edges[0].node.frontmatter.featured_projects
  let featured_projects = []
  let mobileFeatured_projectsoriginal = data.projectspage.edges[0].node.frontmatter.mobile_featured_projects || []
  let mobileFeatured_projects = []

  for (var i = 0; i < featured_projectsoriginal.length; i++) {
    featured_projects.push(featured_projectsoriginal[i].project)
  }
 
  let projectsOrder = []
  let featured_projectsOrder = []
  for (var i = projects.length - 1; i >= 0; i--) {
    if(!featured_projects.includes(projects[i].node.frontmatter.campaign_title)){
      projectsOrder.unshift(projects[i])
    } 
  }
  for (var y = featured_projects.length - 1; y >= 0; y--) {
      for (var i = projects.length - 1; i >= 0; i--) {
        if((featured_projects[y] == (projects[i].node.frontmatter.title)) || featured_projects[y] == (projects[i].node.frontmatter.id)){
          featured_projectsOrder.unshift(projects[i])
        } 
      }
  }
  let projectsFinalOrder = featured_projectsOrder;

  /* MOBILE */
  for (var i = 0; i < mobileFeatured_projectsoriginal.length; i++) {
    mobileFeatured_projects.push(mobileFeatured_projectsoriginal[i].project)
  }
 
  let mobileProjectsOrder = []
  let mobileFeatured_projectsOrder = []
  for (var i = projects.length - 1; i >= 0; i--) {
    if(!mobileFeatured_projects.includes(projects[i].node.frontmatter.title) || !mobileFeatured_projects.includes(projects[i].node.frontmatter.id)){
      projectsOrder.unshift(projects[i])
    } 
  }

  for (var y = mobileFeatured_projects.length - 1; y >= 0; y--) {
      for (var i = projects.length - 1; i >= 0; i--) {
        if((mobileFeatured_projects[y] == (projects[i].node.frontmatter.title)) || mobileFeatured_projects[y] == (projects[i].node.frontmatter.id)){
          mobileFeatured_projectsOrder.unshift(projects[i])
        } 
      }
  }
  let mobileProjectsFinalOrder = mobileFeatured_projectsOrder;

  return (
    <>
    

    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      
      <FilmStrip mobile={false} hpText={false} clients={clients} projects={projectsFinalOrder.reverse()}/>
      
      <FilmStrip mobile={true} hpText={false} clients={clients} projects={mobileProjectsFinalOrder.reverse()}/>
      
      
     
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
            draft
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
    projectspage: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/pages/"}}, fileAbsolutePath: {regex: "/projectspage/"}}
  ) {
    edges {
      node {
          id
          frontmatter {
           featured_projects{
              project
           }
           mobile_featured_projects {
              project
            }
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
