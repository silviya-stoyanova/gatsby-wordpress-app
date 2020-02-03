import React, { Fragment } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const MainNav = ({ title, array }) => {

    const data = useStaticQuery(graphql`
        query mainNavQuery {
            allWordpressPage {
                nodes {
                    path
                    title
                    slug
                }
            }
        }
    `)

    return (
        <Fragment>
            <nav className="main-navigation">
                <ul>
                    {
                        data.allWordpressPage.nodes.map(el => (
                            <li key={el.slug}>
                                <Link to={el.path}>
                                    {el.title.split(' ')[0]}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </Fragment>
    )
}
export default MainNav
