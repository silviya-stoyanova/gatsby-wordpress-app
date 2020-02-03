import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Page = (props) => {
  const staticPage = props.data.wordpressPage
  
  return (
    <Layout>
      <section className="content-area" id="primary">
        <h1 dangerouslySetInnerHTML={{ __html: staticPage.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: staticPage.content }}></div>
      </section>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
      wordpressPage(id: { eq: $id }) {
        title
        content
      }      
  }
`
