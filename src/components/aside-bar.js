import React, { Fragment } from "react"
import Link from "gatsby-link"

const AsideBar = ({ title, array, type }) => (
    <Fragment>
        <header>
            <h2>{title}</h2>
        </header>

        <section className="widget widget_recent_entries">
            <ul>
                {
                    array.map(el => (
                        <li key={el.node.slug}>
                            <Link to={type === 'post' ? type + '/' + el.node.slug : '#'}>
                                {type !== 'post' ? el.node.name : el.node.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    </Fragment>
)

export default AsideBar