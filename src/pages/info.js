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
      <div className="info-column">
        <div>
          <h1>Info</h1>
          <ReactMarkdown>{data.info?.edges[0].node.frontmatter.about?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown>
        </div>
        <div>
          <h1>Contact</h1>
          <ReactMarkdown>{data.info?.edges[0].node.frontmatter.contact?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown>
        </div>
        </div>
        <div className="info-column">
        <div>
          <h1>Offices</h1>
          <div className="maps-wrapper">
          {locations.map((location, index) => {
                return (
                  <>
                 
                  <div id={`${location.node.frontmatter.name.split(" ").join("-") + "-map"}`}className="map-wrapper" key={index}>
                   

                    <Map latitude={parseFloat(location.node.frontmatter.latitude)} longitude={parseFloat(location.node.frontmatter.longitude)}/>
                    <div className="map-label"><div><ReactMarkdown>{location.node.frontmatter.name?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown></div><div><ReactMarkdown>{location.node.frontmatter.address?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown></div></div>
                  </div>
    
                  
                  </>
                )
              })}
          </div>
        </div>
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
           email
           instagram
           models
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
