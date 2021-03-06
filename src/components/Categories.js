// unused component
import React, { Fragment } from "react"

const Categories = ({ title, array }) => (
    <Fragment>
        <header>
            <h2>{title}</h2>
        </header>

        <section className="widget widget_recent_entries">
            <ul>
                {
                    array.map(el => (
                        <li key={el.node.slug}>
                            {el.node.name}
                        </li>
                    ))
                }
            </ul>
        </section>
    </Fragment>
)

// export default Categories
