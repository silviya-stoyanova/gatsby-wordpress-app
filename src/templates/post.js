import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"

const Tags = ({ post }) => {
  let content = 'Tags: '

  content += post.tags
    ? post.tags.map(tag => tag.name).join(', ')
    : 'no tags'

  return (
    <div>
      <i className="italic" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

const Categories = ({ post }) => {
  let content = 'Category: '

  content += post.categories
    ? post.categories.map(category => category.name).join(', ')
    : 'no categories'

  return (
    <div>
      <i className="italic" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

const getPostSiblings = (currPost, allPosts) => (
  allPosts.filter(post => post.node.slug === currPost.slug)[0]
)

const NavLink = ({ post, postType }) => (
  post
    ? (
      <Link to={'post/' + post.slug} className={"nav-" + postType} >
        <span className="nav-subtitle">{postType}</span>
        <span >{post.title}</span>
      </Link >
    )
    : null
)

const PostTemplate = (props) => {
  const post = props.data.wordpressPost
  const allPosts = props.data.allWordpressPost.edges
  const postSiblings = getPostSiblings(post, allPosts)
  const resolutions = (post.featured_media) ? post.featured_media.localFile.childImageSharp.resolutions : null

  return (
    <Layout>
      <section>
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        </header>

        {resolutions &&
          <div>
            <Img resolutions={resolutions} />
            <img src={resolutions.src} alt="" />
          </div>
        }

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <hr />
        <Tags post={post} />
        <Categories post={post} />

        <footer>
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <NavLink post={postSiblings.previous} postType="previous" />
              <NavLink post={postSiblings.next} postType="next" />
            </div>
          </nav>
        </footer>
      </section>
    </Layout >
  )
}

export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            categories {
              name
            }
            tags {
              name
            }
            slug
            
            
        }

      allWordpressPost {
        edges {
          node {
            title
            slug
          }
          previous {
            title
            slug
          }
          next {
            title
            slug
          }
        }
      }
    }
`


// featured_media {
//   localFile {
//     childImageSharp {
//       resolutions {
//         src
//         width
//         height
//       }
//     }
//   }
// }