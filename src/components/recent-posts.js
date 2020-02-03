// unused component
import React, { Fragment } from "react"
import Link from "gatsby-link"

const RecentPosts = ({ title, array }) => (
    <Fragment>
        <header>
            <h1>{title}</h1>
        </header>

        <section className="widget widget_recent_entries">
            <ul>
                {
                    array.map(el => (
                        <li key={el.node.slug}>
                            <Link to={'post/' + el.node.slug}>
                                {el.node.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    </Fragment>
)

// export default RecentPosts