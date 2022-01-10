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
        if(!projects[x].node.frontmatter.draft){
          featuredProjects.push(projects[x].node)
        }
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
  if (featuredClients.length < 1){
    for (var i = clients.length - 1; i >= 0; i--) {
      if(i < 10){
        featuredClients.push(clients[i].node)
      }
      
    }
  }
  if (featuredArtists.length < 1){
    for (var i = artists.length - 1; i >= 0; i--) {
      if(i < 10){
        featuredArtists.push(artists[i].node)
      }
      
    }
  }

function mobileClose(){
    let headers = document.querySelectorAll('.site-header');
    for (var i = headers.length - 1; i >= 0; i--) {
      headers[i].classList.remove("open")
    }
  }
  function mobileOpen(){
    let headers = document.querySelectorAll('.site-header');
    for (var i = headers.length - 1; i >= 0; i--) {
      headers[i].classList.add("open")
    }
  }
  return (
    <div id='homepage-wrapper'>
    <div className="mobile-menu">
      <a></a>
      <h1 onClick={mobileOpen} className="mobile-trigger">Menu</h1>
    </div>
    <div className="site-header">
        <a href="/">AP Studio, Inc</a>
        <svg className="mobile-close" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="26.9393" y1="26.0607" x2="1.93934" y2="1.06066" stroke="white" stroke-width="3"/>
        <line y1="-1.5" x2="35.3553" y2="-1.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 25)" stroke="white" stroke-width="3"/>
        </svg>

        <nav style={{"marginTop":"2rem"},{"color": "white"}}>
           <ul>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/artists&clients">Clients</a></li>
              <li><a href="/artists&clients">Artists</a></li>
              <li><a href="/blog">News</a></li>
              <li><a href="/info">Info</a></li>
           </ul>
        </nav>
      </div>
      <h1 className="overlay-title mobile">
        <span>AP Studio, Inc </span><br/>
        <span>AP Studio, Paris </span><br/>
        <span>AP Studio, New York </span><br/>
        <span>AP Studio, Inc </span><br/>
        <span>AP Studio, Paris </span><br/>
        <span>AP Studio, New York </span><br/>
        <span>AP Studio, Inc </span><br/>
        <span>AP Studio, Paris </span><br/>
        <span>AP Studio, New York </span><br/>
        <span>AP Studio, Los Angeles</span><br/>
      </h1>
    <h1 className="overlay-title">
       <span>AP Studio Inc.</span><span>AP Studio Inc., Paris</span><span>AP Studio Inc., New York</span></h1>
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
          {projects.map((project, index) => {
            if(index < 5 && !project.node.frontmatter.draft){
              const title = project.node.frontmatter.campaign_title

              return (
              
                <a className={`${project.node.frontmatter.thumb?.size} carousel-slide`} key={index} href={project.node.fields.slug}>
                  <Thumb name={project.node.frontmatter.thumb?.media_name} id={project.node.frontmatter.thumb?.id} imageurl={project.node.frontmatter.thumb?.image} videourl={project.node.frontmatter.thumb?.video} />
                  <div className="slide-title"><h1><ReactMarkdown>{project.node.frontmatter.campaign_title}</ReactMarkdown></h1></div>
                </a>
     
              )

            }
        })}
    </Flickity>
    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
       <FilmStrip hpText={homepage.intro || ""} projects={projects}/>
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
    </div>
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
            draft
            notes
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
