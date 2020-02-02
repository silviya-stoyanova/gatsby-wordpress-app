/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SideNav from "../components/side-nav.js"
import RecentPosts from "../components/recent-posts.js"

import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
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
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title + " ♥"} />
      <div className="has-sidebar" style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem`, }}>
        <main className="wrap">
          {children}


          <aside className="widget-area" id="secondary">
            <RecentPosts data={data.allWordpressPost.edges} />
            <SideNav />
          </aside>

        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
