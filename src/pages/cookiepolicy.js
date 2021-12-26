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

const CookiePolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />   
      <div className="info-wrapper">
        <div className="cookie-row">
          <h1>Privacy & Cookies</h1>
          <p><ReactMarkdown>{data.cookie?.edges[0].node.frontmatter.cookie}</ReactMarkdown></p>
        </div>

        
      </div>
    </Layout>
  )
}

export default CookiePolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    cookie: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/pages/"}}, fileAbsolutePath: {regex: "/cookie/"}}
  ) {
    edges {
      node {
          id
          frontmatter {
           cookie
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
