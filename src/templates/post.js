import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

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

const PostTemplate = (props) => {
  const post = props.data.wordpressPost
  const resolutions = (post.featured_media) ? post.featured_media.localFile.childImageSharp.resolutions : null

  return (
    <Layout>
      <section id="primary">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

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
        }
    }
`
