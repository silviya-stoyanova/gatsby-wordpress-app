import React, { Fragment } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const SideNav = () => {
    const navQuery = useStaticQuery(graphql`
        query NavQuery {
            allWordpressPage {
                nodes {
                    path
                    title
                }
            }
        }
    `)

    const Nav = navQuery.allWordpressPage

    return (
        <Fragment>
            <header>
                <h1>You might also like..</h1>
            </header>

            <section className="widget widget_recent_entries">
                <ul>
                    {
                        Nav.nodes.map(page => (
                            <li>

                                <Link to={page.path}>
                                    {page.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </Fragment>
    )
}

export default SideNav
