import React, { Fragment } from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

const AllPosts = ({ data }) => (
  <Fragment>
    <header>
      <h1>Posts</h1>
    </header>

    <section>
      {data.allWordpressPost.edges.map(({ node }) => (
        <article key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
          <h3 className="entry-title">
            <Link to={'post/' + node.slug}>
              {node.title}
            </Link>
          </h3>

          <div className="entry-content">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>

          <div className="entry-meta">{node.date}</div>
        </article>
      ))}
    </section>
  </Fragment>
)

const HomePage = (props) => {
  const data = props.data
  console.log(data)

  return (
    <Layout>
      <main className="content-area" id="primary">
        <AllPosts data={data} />
      </main>
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
        }
    }
  }
}
`
