const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  /***********/
  /* Artists */
  /***********/
  const artistPage = path.resolve(`./src/templates/artist.js`)

  // Get all markdown blog posts sorted by date
  const artistResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(artist|artists)/i" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (artistResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      artistResult.errors
    )
    return
  }

  const artists = artistResult.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (artists.length > 0) {
    artists.forEach((post, index) => {
      const previousPostId = index === 0 ? null : artists[index - 1].id
      const nextPostId = index === artists.length - 1 ? null : artists[index + 1].id

      createPage({
        path: post.fields.slug,
        component: artistPage,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  /***********/
  /* CLIENTS */
  /***********/

  const clientPage = path.resolve(`./src/templates/client.js`)

  // Get all markdown blog posts sorted by date
  const clientResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(client|clients)/i" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (clientResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      clientResult.errors
    )
    return
  }

  const clients = clientResult.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (clients.length > 0) {
    clients.forEach((post, index) => {
      const previousPostId = index === 0 ? null : clients[index - 1].id
      const nextPostId = index === clients.length - 1 ? null : clients[index + 1].id

      createPage({
        path: post.fields.slug,
        component: clientPage,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
  /************/
  /* Projects */
  /************/
  const projectPage = path.resolve(`./src/templates/project.js`)

  // Get all markdown blog posts sorted by date
  const projectResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(project|projects)/i" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (projectResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      projectResult.errors
    )
    return
  }

  const projects = projectResult.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (projects.length > 0) {
    projects.forEach((post, index) => {
      const previousPostId = index === 0 ? null : projects[index - 1].id
      const nextPostId = index === projects.length - 1 ? null : projects[index + 1].id

      createPage({
        path: post.fields.slug,
        component: projectPage,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }







}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
