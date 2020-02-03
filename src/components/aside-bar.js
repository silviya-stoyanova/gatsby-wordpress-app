import React, { Fragment } from "react"
import Link from "gatsby-link"

const AsideBar = ({ title, array, hasLink, isListOfPages }) => (
    <Fragment>
        <header>
            <h2>{title}</h2>
        </header>

        <section className="widget widget_recent_entries">
            <ul>
                {
                    array.map(el => (
                        <li key={!isListOfPages ? el.node.slug : el.slug}>
                            {
                                hasLink
                                    ? (
                                        <Link to={
                                            !isListOfPages
                                                ? 'post/' + el.node.slug
                                                : el.path
                                        }>
                                            {!isListOfPages ? el.node.title : el.title}
                                        </Link>
                                    )
                                    : el.node.name
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    </Fragment>
)

export default AsideBar