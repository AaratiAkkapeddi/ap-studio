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

const Info = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />   
      <ReactMarkdown>{data.info?.edges[0].node.frontmatter.about}</ReactMarkdown>
      <ReactMarkdown>{data.info?.edges[0].node.frontmatter.location}</ReactMarkdown>
      <ReactMarkdown>{data.info?.edges[0].node.frontmatter.profiles}</ReactMarkdown>
      <ReactMarkdown>{data.info?.edges[0].node.frontmatter.contact}</ReactMarkdown>
    </Layout>
  )
}

export default Info

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    info: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/pages/"}}, fileAbsolutePath: {regex: "/info/"}}
  ) {
    edges {
      node {
          id
          frontmatter {
           about
           profiles
           contact
           location
          }
        }
      }
    }
  }
`