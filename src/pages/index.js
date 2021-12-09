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

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const homepage = data.homepage.edges[0].node.frontmatter
  const projects = data.projects.edges
  const clients = data.clients.edges
  const artists = data.artists.edges

  let featuredProjects = [];
  let featuredClients = [];
  let featuredArtists = [];
  /*create array of featured projects by matching the title from all projects to the ones specified under the homepage*/
  for (var x = projects.length - 1; x >= 0; x--) {
    for (var i = homepage.projects.length - 1; i >= 0; i--) {
      if(projects[x].node.frontmatter.title == homepage.projects[i].project){
        featuredProjects.push(projects[x].node)
      }
    }
  }
  /*create array of featured clients by matching the title from all clients to the ones specified under the homepage*/
  for (var x = clients.length - 1; x >= 0; x--) {
    for (var i = homepage.clients.length - 1; i >= 0; i--) {
      if(clients[x].node.frontmatter.name == homepage.clients[i].client){
        featuredClients.push(clients[x].node)
      }
    }
  }
  /*create array of featured artists by matching the title from all artists to the ones specified under the homepage*/
  for (var x = artists.length - 1; x >= 0; x--) {
    for (var i = homepage.artists.length - 1; i >= 0; i--) {
      if(artists[x].node.frontmatter.name == homepage.artists[i].artist){
        featuredArtists.push(artists[x].node)
      }
    }
  }


  return (
    <>
    <div className="site-header">
        <a style={{"opacity":"0"}} href="/">AP Studio, Inc</a>
        <nav style={{"marginTop":"2rem"},{"color": "white"}}>
           <ul>
              <li><a href="">Projects</a></li>
              <li><a href="">Clients</a></li>
              <li><a href="">Artists</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Info</a></li>
           </ul>
        </nav>
      </div>
    <h1 className="overlay-title">AP Studio Inc.<br/>AP Studio Inc., Paris<br/>AP Studio Inc., New York</h1>
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
          {projects.map((project, index) => {
            if(index < 5){
              const title = project.node.frontmatter.campaign_title

              return (
              
                <a className={`${project.node.frontmatter.thumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                  <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                  <div className="slide-title"><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></div>
                </a>
     
              )

            }
        })}
    </Flickity>
    <Layout location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      
      <div className="film-strip">
      <div className="mini-overview">
        <ReactMarkdown>{homepage.intro || ""}</ReactMarkdown>
        <a className="more-info" href="/info">More Info</a>
      </div>
          {projects.map((project, index) => {
            if(index < 25){
              const title = project.node.frontmatter.campaign_title

              return (
              
                <a className={`${project.node.frontmatter.thumb?.size} film-item`} key={index} href={project.node.fields.slug}>
                  <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                </a>
     
              )

            }
        })}
        <div className="mini-overview">
          <a className="more-info" href="/projects">View All Projects</a>
        </div>
      </div>
      <div className="artists-clients">
        <div className="selected-clients">
          <h1>Selected Clients <a className="more-info" href="/artists&clients">View All Clients</a></h1>
          <ol style={{ listStyle: `none` }}>
              {featuredClients.map((client,index) => {
              const title = client.frontmatter.name

              return (
                <li key={index}>
                  <a href={client.fields.slug}>
                    {title}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
        <div className="selected-artists">
          <h1>Selected Artists <a className="more-info" href="/artists&clients">View All Artists</a></h1>
          <ol style={{ listStyle: `none` }}>
              {featuredArtists.map((artist, index) => {
              const title = artist.frontmatter.name

              return (
                <li key={index}>
                  <a href={artist.fields.slug}>
                    {title}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
      
     
    </Layout>
    </>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    homepage: allMarkdownRemark(
    filter: {fields: {slug: {regex: "/pages/"}}, fileAbsolutePath: {regex: "/homepage/"}}
  ) {
    edges {
      node {
          id
          frontmatter {
            intro
            clients {
              client
            }
            artists {
              artist
            }
            projects {
              project
            }
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
            campaign_title
            thumb {
              image
              video
              media_name
              size
            }
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
  }
`
