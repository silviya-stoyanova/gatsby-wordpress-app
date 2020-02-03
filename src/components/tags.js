// unused component
import React, { Fragment } from "react"

const Tags = ({ title, array }) => (
    <Fragment>
        <header>
            <h1>{title}</h1>
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

// export default Tags
