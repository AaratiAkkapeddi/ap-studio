import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Thumb from "../components/thumb"
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'
import Media from "../components/media"
import Map from "../components/map"

const Info = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let locations = data.locations.edges
  return (
    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />   
      <div className="info-wrapper">
        <div className="info-row">
          <h1>About</h1>
          <h1><ReactMarkdown>{data.info?.edges[0].node.frontmatter.about}</ReactMarkdown></h1>
        </div>
        <div className="info-row">
          <h1>Location</h1>
          <h1><ReactMarkdown>{data.info?.edges[0].node.frontmatter.location}</ReactMarkdown></h1>
        </div>
        <div className="maps-wrapper">
        {locations.map((location, index) => {
              return (
                <>
                {(index % 2 == 0 && index == locations.length - 1) &&
                  <div className="map-wrapper" key={index}>
                  </div>
                }
                <div className="map-wrapper" key={index}>
                  <h1><ReactMarkdown>{location.node.frontmatter.name}</ReactMarkdown></h1>

                  <Map latitude={parseFloat(location.node.frontmatter.latitude)} longitude={parseFloat(location.node.frontmatter.longitude)}/>
                  <h1><ReactMarkdown>{location.node.frontmatter.address}</ReactMarkdown></h1>
                </div>
  
                
                </>
              )
            })}
        </div>
        <div className="info-row">
          <h1>Contact</h1>
          <h1><ReactMarkdown>{data.info?.edges[0].node.frontmatter.contact}</ReactMarkdown></h1>
        </div>
        <div className="info-row">
          <h1>Platforms</h1>
          <h1><ReactMarkdown>{data.info?.edges[0].node.frontmatter.profiles}</ReactMarkdown></h1>
        </div>
      </div>
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
    locations: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/location/"}}}
  ) {
    edges {
      node {
          id
          frontmatter {
           name
           address
           longitude
           latitude
          }
        }
      }
    }
  }
`
