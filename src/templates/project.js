import * as React from "react"
import { Link, graphql } from "gatsby"
import Media from "../components/media"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectTemplate = ({ data, location }) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={siteTitle}
        description={project.frontmatter.description || project.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
        <h1>PROJECT {project.fields.slug}</h1>
          <h1 itemProp="headline">{project.frontmatter.title}</h1>
          <p>{project.frontmatter.campaign_title}</p>
          <ReactMarkdown>{project.frontmatter.notes}</ReactMarkdown>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: project.html }}
          itemProp="articleBody"
        />
        <div className="project-media-container two-column">
          {project.frontmatter.media.map((item, index) => {
           console.log(item)
          return (
            <Media key={index} imageurl={item.media} videourl={item.mediaVideo} />
          )
        })}
          </div>
        <footer>

        </footer>
      </article>

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
        media{
          mediaVideo
          media
          media_name
        }
      }
    }
  }
`
