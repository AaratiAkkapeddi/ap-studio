import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Thumb from "../components/thumb"
import Seo from "../components/seo"
import ReactMarkdown from 'react-markdown'
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let posts = data.blogs.edges
  function formatDate(date){
    let x = new Date(date);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let formatted = days[x.getDay()] + ", " + (months[x.getMonth()]) + " " +  x.getDate() +", " + x.getFullYear();
    return formatted
  }
  return (
    <Layout data={data} location={location} title={siteTitle}>
      <Seo title="AP Studio | Home" />
      <div className="blog-wrapper">
            {posts.map((post, index) => {
              let formattedDate = formatDate(post.node.frontmatter.date)
              return (
                <div className="blog-row" key={index}>
                  <div>
                    Posted on: <br/>{formattedDate}
                  </div>
                  <div>
                    <h1 className="post-title">{post.node.frontmatter.title}</h1>
                    <ReactMarkdown>{post.node.rawMarkdownBody?.replace(/<br>/gi, '\n &nbsp;  ')}</ReactMarkdown>
                  </div>
                </div>
              )
            })}
      </div>
     
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
    blogs: allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, sort: {fields: [frontmatter___date], order: ASC }) {
    edges {
        node {
          id
          rawMarkdownBody
          frontmatter {
            title
            date
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
