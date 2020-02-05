import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import AsideBar from "./aside-bar"

import "../static/styles/style.css"
import "../static/styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wordpressSiteMetadata {
        name
        description
      }

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

      allWordpressPage {
        nodes {
          path
          title
          slug
        }
      }

      allWordpressCategory {
        edges {
          node {
            name
            slug
          }
        }
      }

      allWordpressTag {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      <Header details={data.wordpressSiteMetadata} />

      <div className="has-sidebar">
        <div className="wrap">
          <main className="content-area" id="primary">
            {children}
          </main>

          <aside className="widget-area" id="secondary">
            <AsideBar title="Latest Posts" array={data.allWordpressPost.edges.slice(0, 4)} type="post" isListOfPages={true} />
            <AsideBar title="Categories" array={data.allWordpressCategory.edges} type="category" />
            <AsideBar title="Tags" array={data.allWordpressTag.edges} type="tag" />
          </aside>
        </div>
      </div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
