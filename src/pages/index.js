import React, { Fragment } from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

const AllPosts = ({ data }) => (
  <Fragment>
    <header>
      <h1>Posts</h1>
    </header>

    <section>
      {data.allWordpressPost.edges.map(({ node }) => {
        const resolutions = node.featured_media ? node.featured_media.localFile.childImageSharp.resolutions : null

        return (
          <article key={node.slug} className={"post"}>
            <h3 className="entry-title">
              <Link to={'post/' + node.slug}>
                {node.title}
              </Link>
            </h3>

            {resolutions &&
              <div>
                <Img resolutions={resolutions} />
              </div>
            }

            <div className="entry-content">
              <div className="post-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>

            <div className="entry-meta">{node.date}</div>
          </article>
        )
      })}
    </section>
  </Fragment>
)

const HomePage = (props) => {
  const data = props.data

  return (
    <Layout>
      <AllPosts data={data} />
    </Layout >
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default HomePage

export const pageQuery = graphql`
    query postsQuery{
      allWordpressPost{
        edges{
          node{
            id
            title
            excerpt
            slug
            date(formatString: "MMMM DD, YYYY")

            featured_media {
            localFile {
              childImageSharp {
                resolutions {
                  src
                  width
                  height
                }
              }
            }
          }
        }
    }
  }
}
`
