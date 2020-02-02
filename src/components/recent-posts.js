import React, { Fragment } from "react"
import Link from "gatsby-link"

const RecentPosts = ({ data }) => {
    // let latestPosts = data.allWordpressPost.edges.slice(0, 4)
    let latestPosts = data.slice(0, 4)

    return (
        <Fragment>
            <header>
                <h1>Latest Posts</h1>
            </header>
            <section className="widget widget_recent_entries">
                <ul>
                    {latestPosts.map(({ node }) => (
                        <li>

                            <Link to={'post/' + node.slug}>
                                {node.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Fragment>
    )
}

export default RecentPosts