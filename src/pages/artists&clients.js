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
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      <div className="artists-clients">
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
                    {title}
                      {

                    	featuredProjects[0]?.frontmatter?.thumb?.image &&
                    	<div className="hover">
                    	<div className="hover-img"><Media size={featuredProjects[0]?.frontmatter?.thumb?.size} key={index} imageurl={featuredProjects[0]?.frontmatter?.thumb?.image} videourl={featuredProjects[0]?.frontmatter?.thumb?.mediaVideo} /></div>
                    	<div className="hover-txt"><ReactMarkdown>{featuredProjects[0]?.frontmatter?.campaign_title}</ReactMarkdown><br/><ReactMarkdown>{featuredProjects[0]?.frontmatter?.notes}</ReactMarkdown></div>
                    	</div>
                    }
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
                    {title}
                    {
                    	featuredProjects[0]?.frontmatter?.thumb?.image &&
                    	<div className="hover">
                    	<div className="hover-img"><Media size={featuredProjects[0]?.frontmatter?.thumb?.size} key={index} imageurl={featuredProjects[0]?.frontmatter?.thumb?.image} videourl={featuredProjects[0]?.frontmatter?.thumb?.mediaVideo} /></div>
                    	<div className="hover-txt"><ReactMarkdown>{featuredProjects[0]?.frontmatter?.campaign_title}</ReactMarkdown><br/><ReactMarkdown>{featuredProjects[0]?.frontmatter?.notes}</ReactMarkdown></div>
                    	</div>
                    }
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
