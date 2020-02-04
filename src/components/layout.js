import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import AsideBar from "./aside-bar"

import "./layout.css"
import "./style.css"

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
            <AsideBar title="Latest Posts" array={data.allWordpressPost.edges.slice(0, 4)} hasLink={true} />
            {/* <AsideBar title="You might also like.." array={data.allWordpressPage.nodes} hasLink={true} isListOfPages={true} /> */}
            <AsideBar title="List of all categories" array={data.allWordpressCategory.edges} />
            <AsideBar title="List of all tags" array={data.allWordpressTag.edges} />
            {/* <Pages title="You might also like.." array={data.allWordpressPage.nodes} /> */}
            {/* <RecentPosts title="Latest Posts" array={data.allWordpressPost.edges.slice(0, 4)} /> */}
            {/* <Categories title="List of all categories" array={data.allWordpressCategory.edges} /> */}
            {/* <Tags title="List of all tags" array={data.allWordpressTag.edges} /> */}
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

// site {
//   siteMetadata {
//     title
//   }
// }
