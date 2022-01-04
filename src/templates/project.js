import * as React from "react"
import { Link, graphql } from "gatsby"
import Media from "../components/media"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"
import Top from "../components/top"
import Seo from "../components/seo"

const ProjectTemplate = ({ data, location }) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  let projectDefaultColumns = "two-column"
  if(project.frontmatter.media?.length > 10){
    projectDefaultColumns = "three-column"
  }else if(project.frontmatter.media?.length <= 4){
    projectDefaultColumns = "one-column"
  }
  if(typeof window != `undefined`){
    if(window.outerWidth <= 768){
      projectDefaultColumns = "one-column"
    }
  }
   function fullColumn(){
    document.querySelector(".project-media-container").classList.remove("two-column")
    document.querySelector(".project-media-container").classList.remove("three-column")
    document.querySelector(".project-media-container").classList.remove("one-column")
    document.querySelector(".project-media-container").classList.add("full-column")
    document.querySelector("#three").classList.remove("on")
    document.querySelector("#two").classList.remove("on")
    document.querySelector("#one").classList.add("on")
    document.querySelector("#one-mobile").classList.remove("on")
    document.querySelector("#full-mobile").classList.add("on")
  }
  function oneColumn(){
    document.querySelector(".project-media-container").classList.remove("full-column")
    document.querySelector(".project-media-container").classList.remove("two-column")
    document.querySelector(".project-media-container").classList.remove("three-column")
    document.querySelector(".project-media-container").classList.add("one-column")
    document.querySelector("#three").classList.remove("on")
    document.querySelector("#two").classList.remove("on")
    document.querySelector("#one").classList.add("on")
    document.querySelector("#one-mobile").classList.add("on")
    document.querySelector("#full-mobile").classList.remove("on")
  }
  function twoColumn(){
    document.querySelector(".project-media-container").classList.remove("one-column")
    document.querySelector(".project-media-container").classList.remove("three-column")
    document.querySelector(".project-media-container").classList.add("two-column")
    document.querySelector("#one").classList.remove("on")
    document.querySelector("#three").classList.remove("on")
    document.querySelector("#two").classList.add("on")
  }
  function threeColumn(){
    document.querySelector(".project-media-container").classList.remove("two-column")
    document.querySelector(".project-media-container").classList.remove("one-column")
    document.querySelector(".project-media-container").classList.add("three-column")
    document.querySelector("#one").classList.remove("on")
    document.querySelector("#two").classList.remove("on")
    document.querySelector("#three").classList.add("on")
  }
  return (
    <Layout data={data} location={location} title={siteTitle}>
      <Seo
        title={siteTitle}
        description={project.frontmatter.description || project.excerpt}
      />

        <header className="project-header">
          <h1><ReactMarkdown>{project.frontmatter.campaign_title}</ReactMarkdown></h1>
          <ReactMarkdown>{project.frontmatter.notes}</ReactMarkdown>
          <p id="mobile-layout-toggle">
            <svg onClick={oneColumn} className={`${projectDefaultColumns == "one-column" ? 'on' : ''}`} id='one-mobile' width="25" height="25" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">            <rect width="23" height="11"/>
            <rect x="7" y="14" width="9" height="11"/>
            </svg>
            <svg onClick={fullColumn} className={`${projectDefaultColumns == "full-column" ? 'on' : ''}`} id='full-mobile' width="25" height="25" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="23" height="11" />
            <rect y="14" width="23" height="11" />
            </svg>
          </p>
          <p id="layout-toggle">
            <svg onClick={threeColumn} className={`${projectDefaultColumns == "three-column" ? 'on' : ''}`} id='three' width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="34" width="13" height="48" />
            <rect x="17" width="13" height="48" />
            <rect width="13" height="48" />
            </svg>

            <svg onClick={twoColumn} className={`${projectDefaultColumns == "two-column" ? 'on' : ''}`} id='two' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="48" />
            <rect x="26" width="22" height="48" />
            </svg>

            <svg onClick={oneColumn} className={`${projectDefaultColumns == "one-column" ? 'on' : ''}`} id='one' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" />
            </svg>
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: project.html }}
          itemProp="articleBody"
        />
        <div className={`${projectDefaultColumns} project-media-container`}>
          {project.frontmatter.media?.map((item, index) => {

          return (
            <Media name={item.media_name} size={item.size} key={index} imageurl={item.media} videourl={item.mediaVideo} />
          )
        })}
          </div>
          <div className="project-footer">
            <h1><a href="/projects">Back</a></h1>
            <Top></Top>
          </div>



    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug(
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
      fields{
        slug
      }
      frontmatter {
        campaign_title
        notes
        thumb{
          image
          video
        }
        clients{
          client
        }
        media{
          mediaVideo
          media
          size
          media_name
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
