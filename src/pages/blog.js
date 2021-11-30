import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Thumb from "../components/thumb"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
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

  console.log(data)
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      <h1>BLOG</h1>
      <ol style={{ listStyle: `none` }}>
          {featuredProjects.map(project => {
          const title = project.frontmatter.campaign_title

          return (
            <li key={project.fields.slug}>
            <a href={project.fields.slug}>
              {title}
              <Thumb imageurl={project.frontmatter.thumb?.image} videourl={project.frontmatter.thumb?.video} />
            </a>
            </li>
          )
        })}
      </ol>
      <ol style={{ listStyle: `none` }}>
          {featuredClients.map(client => {
          const title = client.frontmatter.name

          return (
            <li key={client.fields.slug}>
              <a href={client.fields.slug}>
                {title}
              </a>
            </li>
          )
        })}
      </ol>
      <ol style={{ listStyle: `none` }}>
          {featuredArtists.map(artist => {
          const title = artist.frontmatter.name

          return (
            <li key={artist.fields.slug}>
              <a href={artist.fields.slug}>
                {title}
              </a>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

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
    projects: allMarkdownRemark(filter: {fields: {slug: {regex: "/projects/"}}}) {
    edges {
        node {
          id
          frontmatter {
            title
            campaign_title
            thumb {
              image
              video
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
      // <ol style={{ listStyle: `none` }}>
      //   {posts.map(post => {
      //     const title = post.frontmatter.title || post.fields.slug

      //     return (
      //       <li key={post.fields.slug}>
      //         <article
      //           className="post-list-item"
      //           itemScope
      //           itemType="http://schema.org/Article"
      //         >
      //           <header>
      //             <h2>
      //               <Link to={post.fields.slug} itemProp="url">
      //                 <span itemProp="headline">{title}</span>
      //               </Link>
      //             </h2>
      //             <small>{post.frontmatter.date}</small>
      //           </header>
      //           <section>
      //             <p
      //               dangerouslySetInnerHTML={{
      //                 __html: post.frontmatter.description || post.excerpt,
      //               }}
      //               itemProp="description"
      //             />
      //           </section>
      //         </article>
      //       </li>
      //     )
      //   })}
      // </ol>